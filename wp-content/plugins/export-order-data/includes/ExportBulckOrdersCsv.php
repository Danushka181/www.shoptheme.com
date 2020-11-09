<?php  
/**
 * @package Export_Order_Data
 * @version 1.0.0
 */

defined( 'ABSPATH' ) or die( 'Hey, you cant do this!');

class ExportBulckOrdersCsv extends ExportOrderData
{
	// Export bulk csv file
	protected function export_buck_orders_data_csv( $post_ids ){
		// get sub class for some functions
		require_once( 'ExportOrderDataCsv.php' );
		// Get saved settings for export CSV
		$saved_data 	=	ExportOrderDataCsv::get_saved_settings_data();
		$saved_data 	=	( $saved_data ) ? $saved_data : 'order_id | order_date | name | status | order_total |';
		$saved_data 	=	ExportOrderDataCsv::return_saved_data_as_array($saved_data);

		// Set file name for CSV File
		$filename = 'genarated-csv-for-'.count($post_ids).'-orders.csv';
		$fp = fopen('php://output', 'w');

		// Set headings for CSV file
		$csv_headings 	=	[];
		for ($i=0; $i < count($saved_data); $i++) { 
			if ( $saved_data[$i] != '' ) {
				$csv_headings[] 	=	ucfirst(str_replace('_', ' ', $saved_data[$i] ) );
			}
		}

		// check post ids list
		if ( $post_ids ) {
			header('Content-type: application/csv; charset=utf-8');
			header('Content-Disposition: attachment; filename='.$filename);
			// Set CSV Headings list
			fputcsv($fp, $csv_headings);

			// Loop the post ids list send by action
			for ($i=0; $i < count($post_ids); $i++) { 

				// Get specifc order data using ID
				$order = wc_get_order($post_ids[$i]);

				// Looping and collecting data as checking saved values by user
				foreach ( $saved_data as $key => $head ) {
					if ( $head != '' ) {
						switch ($head) {
							case 'order_id':
								$export_array[$key] = $order->ID;
								break;
							case 'status':
								$export_array[$key] = $order->data['status'];
								break;
							case 'currency':
								$export_array[$key] = $order->order_currency;
								break;
							case 'name':
								$export_array[$key] = $order->billing_first_name.' '.$order->billing_last_name;
								break;
							case 'order_total':
								$export_array[$key] = $order->order_total;
								break;
							case 'order_date':
								$export_array[$key] = $order->order_date;
								break;
							case 'discount_total':
								$export_array[$key] = $order->order_discount;
								break;
							case 'email':
								$export_array[$key] = $order->billing_email;
								break;
							case 'phone':
								$export_array[$key] = $order->billing_phone;
								break;
							case 'payment_method':
								$export_array[$key] = $order->payment_method_title;
								break;
						}
					}
				}
				// Set body of data array
				fputcsv($fp, $export_array);
			}
		}
		// Close CSV process 
		fclose($fp);
	    ob_end_flush();

	}

}