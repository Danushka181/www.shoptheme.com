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
			add_action( 'admin_init', array( $this, "exp_order_styles_and_script_load"));
		}

		// Define plugin path for future use
		define( "exp_plugn_path", plugin_dir_url( __FILE__ ));
	}

	// Add admin page for order export data customize
	public function exp_order_export_admin_page(){
		add_menu_page( 'WC Export Settings', 'WC Export Settings', 'manage_options', 'exp_wc_order', array( $this,'exp_order_export_settings' ), 'dashicons-welcome-add-page', 120 );

		// Plugin Activation 
		register_activation_hook(__FILE__, array( $this, "activate"));
		
		// Plugin Deactivation 
		register_deactivation_hook(__FILE__, array( $this, "deactivate"));
	}

	// Order export data customize page
	public function exp_order_export_settings(){
		require_once(exp_plugn_path.'templates/setings-export.php');
	}


	public function exp_order_styles_and_script_load(){		
		
		
	}

	private function activate(){
		//echo "Activated";
	}
	
	private function deactivate(){
		//echo "Deactivated";
	}





}



// Call class when plugin init action
add_action("init", function(){
	ExportOrderData::getInstance();
});