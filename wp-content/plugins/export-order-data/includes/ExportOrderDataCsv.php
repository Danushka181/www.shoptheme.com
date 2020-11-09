<?php  
/**
 * @package Export_Order_Data
 * @version 1.0.0
 */

defined( 'ABSPATH' ) or die( 'Hey, you cant do this!');

class ExportOrderDataCsv extends ExportOrderData
{
	// function for export single order
	protected function export_single_order_data(){
		// check if gave get or post request
		if ( isset( $_POST ) || isset( $_GET ) ) {
			// Get saved settings 
			$saved_data 	=	self::get_saved_settings_data();
			$saved_data 	=	( $saved_data ) ? $saved_data : 'order_id | order_date | name | status | order_total |';
			$saved_data 	=	self::return_saved_data_as_array($saved_data);

			// Ajax post order id
			$order_id 	=	$_POST['order'];

			// set post order id or get order id
			$order_id 	=	( $order_id ) ? $order_id : $_GET['order'];

			// get current order by id
			$order = wc_get_order($order_id);

			// dynamic file name for CSV
			$filename = 'genarated-csv-order-'.$order_id.'.csv';
			$fp = fopen('php://output', 'w');

			$header = $saved_data;

			// Define empty arrays
			$export_array = $custom_headings = [];
			if ( $header ) {
				header('Content-type: application/csv; charset=utf-8');
				header('Content-Disposition: attachment; filename='.$filename);
				// loop saved settings from user
				foreach ( $header as $key => $head ) {
					if ( $head != '' ) {
						switch ($head) {
							case 'order_id':
								$export_array[$key] = $order_id;
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
						$custom_headings[] 	=  ucfirst(	str_replace('_', ' ', $head ) );
					}
				}
				// set custom headings 
				fputcsv($fp, $custom_headings);
				// Set custom  dataset for CSV Body
				fputcsv($fp, $export_array);
				fclose($fp);
	            ob_end_flush();
			}		

            exit();
		}
	}

	// make user saved settings as array
	function return_saved_data_as_array( $data=null ){
		$make_data_array 	=	array();
		if ( $data ) {
			// Make saved data as array
			$make_data_array 	=	array();
			$make_data_array 	= 	array_map('trim',array_filter(explode('|',$data)));
		}
		return $make_data_array;
	}
}