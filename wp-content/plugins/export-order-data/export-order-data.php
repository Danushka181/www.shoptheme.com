<?php
/**
 * @package Export_Order_Data
 * @version 1.0.0
 */
/*
Plugin Name: Export Woocommerce Order Data
Plugin URI: http://fb.com/danushka181
Description: This will help to export Woocommerce orders data as CSV file.
Author: Danushka Madushanka
Version: 1.0.0
Author URI: http://fb.com/danushka181
*/

// Block direct access plugin data
if ( !defined('ABSPATH') ) { exit; }

if ( !class_exists( 'ExportOrderData' )) {
	// Check Woocommerce is active
	if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) )  ) ){

		// Define class for plugin
		class ExportOrderData{
			
			private static $instance = null;
			// Make self instance
			public static function getInstance() {
				if (!isset(self::$instance)) {
					$c = __CLASS__;
					self::$instance = new $c;
				}
				return self::$instance;
			}

			function __construct() {
				if (!isset(self::$instance)) {
		        	// Add page to dashboard for customize order export data
					add_action( 'admin_menu',array( $this, 'exp_order_export_admin_page') );
					// Load plugin resources for appearance
					add_action( 'admin_enqueue_scripts', array( $this, "exp_order_styles_and_script_load"));
					// Save settings and export csv ajax call
					add_action( 'wp_ajax_save_setings_form_data', array( $this, 'save_setings_form_data' ) );
					add_action( 'wp_ajax_export_single_post_data', array( $this, 'export_single_post_data' ) );
					add_action( 'wp_ajax_export_all_screening_post_data', array( $this, 'export_all_screening_post_data' ) );
					// Add custom export csv btn to order page
					add_action( 'woocommerce_order_item_add_action_buttons', array( $this, 'action_woocommerce_order_item_add_action_buttons'), 10, 1);
					// Add custom export btn to order actions
					add_filter( 'woocommerce_admin_order_actions', array($this, 'exp_custom_action_button_to_order_list'), 100, 2 );
					// Add custom button for each order on listing page
					add_action( 'admin_head', array($this,'custom_action_button_for_order_list_page') );
					// Add Bulk action for export order data as CSV
					add_filter( 'bulk_actions-edit-shop_order', array( $this,'export_bulk_csv_data_action_init'), 1, 1 );
					// Make the bulk action for selected orders
					add_filter( 'handle_bulk_actions-edit-shop_order', array( $this, 'export_scv_file_all_selected_items'), 10, 3 );
					// Add extra tabs button
					add_action( 'manage_posts_extra_tablenav', array( $this, 'export_additional_action_btn_for_tab' ), 20, 1);

				}
				// Define plugin path for future use
				define( "exp_plugn_path", plugin_dir_url( __FILE__ ));
			}

			// Add admin page for order export data customize
			public function exp_order_export_admin_page(){
				// add sub menu page under woocommerce Plugin
				add_submenu_page( 'woocommerce', 'Export Order', 'Export Order', 'manage_options', 'exp-order-export', array( $this,'exp_order_export_settings' ) );

			}

			public function active_plugin_data(){
				/* Plugin Activation protected function call */
				ExportOrderData::activate();			
				/* Plugin Deactivation protected function call */
				ExportOrderData::deactivate();
			}


			// Order export data customize page
			public function exp_order_export_settings(){
				require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'templates/setings-export.php' );
			}

			//  Load plugin related on admin login js and css 
			public function exp_order_styles_and_script_load(){	
				// Load plugin style-sheet here 
				wp_enqueue_style( 'export_styles', plugins_url( '/assets/css/exp-styles.min.css', __FILE__ ) );
				// Load Plugin Java-scripts Here
				//wp_enqueue_script( 'form_script', plugins_url( '/assets/js/jquery.min.js', __FILE__ ) );
				wp_enqueue_script( 'exp_cutom', plugins_url( '/assets/js/exp-script.js', __FILE__ ) );
			}
			// When plugin activate...
			protected function activate(){
				// Create database table when plugin activate
				require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/CreateDataBase.php' );
				$CreateDataBase = new CreateDataBase();
				$CreateDataBase::create_export_settings();
			}
			
			protected function deactivate(){
				// echo "Deactivated";
			}

			// Save user saved settings to database
			function save_setings_form_data(){
				require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/SaveExpSettings.php' );
				$SaveExpSettings = new SaveExpSettings();
				$SaveExpSettings::save_exp_order_data();
				die();
			}
			// Export data as a CSV
			function export_single_post_data(){
				require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/ExportOrderDataCsv.php' );
				$ExportOrderDataCsv = new ExportOrderDataCsv();
				$ExportOrderDataCsv::export_single_order_data();
				die();
			}

			// Get saved settings from database
			function get_saved_settings_data(){
				global $wpdb;
				$table_name = $wpdb->prefix . 'wc_export_list';
				$currnet_user 	=	get_current_user_id();
				// get all saved settings by user
				$results = $wpdb->get_results( "SELECT * FROM $table_name WHERE user_names=$currnet_user");
				// Saved data append to text area
				if ( $results ) {
					$saved_data 	=	$results[0]->export_items;
				}else{
					$saved_data 	=	'';
				}
				return $saved_data;
			}

			// define the order item export button on order single page
			function action_woocommerce_order_item_add_action_buttons( $order )
			{
				$order_object 	=	json_encode($order);
				// Custom button working with ajax function
				echo '<a href="#" order-id="'.$order->ID.'" id="single_export_csv" class="custom-export-btn button generate-items">' . __( 'Export CSV', 'exp_order' ) . '</a>';
			}

			// Create custom action button for order listing page
			function exp_custom_action_button_to_order_list( $actions, $order ) {
			    // custom action slug name
				$action_slug = 'export_csv_data';
			    // Set the action button data
				$actions[$action_slug] = array(
					'url'       => wp_nonce_url( admin_url( 'admin-ajax.php?action=export_single_post_data&order=' . $order->ID ), 'woocommerce-export-csv-data' ),
					'name'      => __( 'Export CSV', 'woocommerce' ),
					'action'    => $action_slug,
				);
				return $actions;
			}

			// Custom action button styles for order listing page
			function custom_action_button_for_order_list_page() {
			    // The key slug defined for your action button
				$action_slug = "export_csv_data";
				echo '<style>.wc-action-button-'.$action_slug.'::after { font-family: Dashicons !important; content: "\f123" !important; }</style>';
			}

			// Add bulk action for shop orders
			function export_bulk_csv_data_action_init( $actions ) {
				// Add Action
				$actions['exp_bulk_order_export'] = __( 'Export CSV', 'woocommerce' );
				return $actions;
			}

			// Export all selected items bulk action
			function export_scv_file_all_selected_items( $redirect_to, $action, $post_ids ){
				if ( $action !== 'exp_bulk_order_export' )
	        	return $redirect_to; // Exit if not a action
	        	require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/ExportBulckOrdersCsv.php' );
				$ExportBulckOrdersCsv = new ExportBulckOrdersCsv();
				$ExportBulckOrdersCsv::export_buck_orders_data_csv( $post_ids );
			}

			// export all data current screening using ajax
			function export_all_screening_post_data(){
				require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/ExportBulckOrdersCsv.php' );
				$ExportBulckOrdersCsv = new ExportBulckOrdersCsv();
				if ( isset( $_POST )) {
					$post_ids 	=	$_POST['post_ids'];
					ExportBulckOrdersCsv::export_buck_orders_data_csv( $post_ids );
				}

				die();
			}


			function export_additional_action_btn_for_tab( $which ) {
				global $typenow;
			    if ( 'shop_order' === $typenow && 'top' === $which ) {
			        ?>
			        <div class="alignleft actions custom">
			            <button type="submit" class="custom-export-btn" name="customExport" id="customExport" style="height:32px;" class="button" value="export_csv"><?php
			                echo __( 'Export CSV', 'woocommerce' ); ?></button>
			        </div>
			        <?php
			    }
			}


		}// End Class ExportOrderData


		// Call class when plugin init action
		add_action("init", function(){
			ExportOrderData::getInstance();
		});
	}else{
		wp_die( __( 'Please activate WooCommerce.', 'export_csv_plugin' ), 'Plugin dependency check', array( 'back_link' => true ) );
	}

}
// Do when plugin activate 
register_activation_hook( __FILE__, array( 'ExportOrderData', 'active_plugin_data' ) );
