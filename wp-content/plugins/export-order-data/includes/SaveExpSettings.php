<?php  
	/**
	 * @package  ReviewsData
	 */
	defined( 'ABSPATH' ) or die( 'Hey, you cant do this! you are not Eme');
	
	class SaveExpSettings extends ExportOrderData
	{
		protected function save_exp_order_data(){
			// check forms data send 
			if ( isset( $_POST['form_data'] )) {
				global $wpdb;
				$response 	=	[];
				$table_name = $wpdb->prefix . 'wc_export_list';

				$currnet_user 	=	get_current_user_id();

				// prepare to save settings
				$form_post_data 	=	strip_tags($_POST['form_data']);
				$data_arr   = array(
                    "export_items" 		=> $form_post_data,
                    "user_names"		=> $currnet_user,
					"time" 				=> date("Y-m-d H:i:s")
                );

				// Check this user if settings already saved
                $results = $wpdb->get_results( "SELECT * FROM $table_name WHERE user_names=$currnet_user");

                if ( count($results) != 0 ) {
                	$res 	= $wpdb->query($wpdb->prepare("UPDATE $table_name SET export_items='$form_post_data' WHERE user_names=$currnet_user"));
                	if ( $res == 0 ) {
                		$msg 	= 'Already Updated!';
                	}else{
                		$msg 	= 'New setting Updated!';
                	}
                }else{
                	$res 	= $wpdb->insert( $table_name, $data_arr );
                	$msg 	= 'New setting Added!';
                }


                if ( $res ) {
                	$response['status'] =	true;
                	$response['res'] 	=	$res;
                	$response['msg'] 	=	$msg;
                	$response['color'] 	=	"green";
                }else{
                	$response['res'] =	$res;
                	$response['status'] =	false;
                	$response['msg'] 	=	$msg;
                	$response['color'] 	=	"red";
                }

                echo json_encode( $response );

			}
		}
	}