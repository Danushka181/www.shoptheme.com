<?php
/**
 * @package Export_Order_Data
 * @version 1.0.0
 */
/*
Plugin Name: Export WC Order Info
Plugin URI: http://fb.com/danushka181
Description: This will help to export Woocommerce orders data as CSV file.
Author: Danushka Madushanka
Version: 1.0.0
Author URI: http://fb.com/danushka181
*/

// Block direct access plugin data
if ( !defined('ABSPATH') ) { exit; }

if ( !class_exists( 'ExportOrderData' )) {

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
				// Save settings ajax call
				add_action( 'wp_ajax_save_setings_form_data', array( $this, 'save_setings_form_data' ) );
				add_action( 'wp_ajax_export_single_post_data', array( $this, 'export_single_post_data' ) );

				add_action( 'woocommerce_order_item_add_action_buttons', array( $this, 'action_woocommerce_order_item_add_action_buttons'), 10, 1);
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
			wp_enqueue_script( 'form_script', plugins_url( '/assets/js/jquery.min.js', __FILE__ ) );
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



		// define the woocommerce_order_item_add_action_buttons
		function action_woocommerce_order_item_add_action_buttons( $order )
		{
			$order_object 	=	json_encode($order);
		    echo '<a onclick="return exportSingleOrderData('.$order->ID.');" href="#" order-id="'.$order->ID.'" id="customExport" class="button generate-items">' . __( 'Export CSV', 'exp_order' ) . '</a>';
		}


	}// End Class ExportOrderData


	// Call class when plugin init action
	add_action("init", function(){
		ExportOrderData::getInstance();
	});

}

// Do when plugin activate 
register_activation_hook( __FILE__, array( 'ExportOrderData', 'active_plugin_data' ) );
