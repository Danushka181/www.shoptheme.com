<?php  
/**
 * @package Export_Order_Data
 * @version 1.0.0
 */

defined( 'ABSPATH' ) or die( 'Hey, you cant do this!');
	
class CreateDataBase extends ExportOrderData
{
	// Create a table to save export data
	protected function create_export_settings(){
		global $wpdb;
		$table_name = $wpdb->prefix . 'wc_export_list';
		$charset_collate = $wpdb->get_charset_collate();

		// create Review table
		$sql = "CREATE TABLE IF NOT EXISTS $table_name(
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			export_items varchar(300) NOT NULL,
			user_names varchar(300) NOT NULL,
			time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
			PRIMARY KEY  (id)
		) $charset_collate;";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}
}
