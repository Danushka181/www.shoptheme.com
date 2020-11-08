<?php  
/**
 * @package Export_Order_Data
 * @version 1.0.0
 */

defined( 'ABSPATH' ) or die( 'Hey, you cant do this!');

class ExportOrderDataCsv extends ExportOrderData
{

	protected function export_single_order_data(){

		if ( isset( $_POST )) {

			$saved_data 	=	self::get_saved_settings_data();
			$saved_data 	=	( $saved_data ) ? $saved_data : 'order_id | get_date_created | name | status | total |';
			$saved_data 	=	self::return_saved_data_as_array($saved_data);

			// var_dump($saved_data);

			// Ajax post order id
			$order_id 	=	$_POST['order'];
			// get current order by id
			$order = wc_get_order($order_id);

			// var_dump($order);
			$filename = 'genarated-csv-'.$order_id.'.csv';
			$fp = fopen('php://output', 'w');


			$header = $saved_data;

			$export_array = [];
			if ( $header ) {
				header('Content-type: application/csv; charset=utf-8');
				header('Content-Disposition: attachment; filename='.$filename);
				fputcsv($fp, $header);
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
							case 'total':
								$export_array[$key] = $order->order_total;
								break;
							case 'get_date_created':
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
				fputcsv($fp, $export_array);
				fclose($f);
	            ob_end_flush();
			}		

            exit();


		}


	}

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