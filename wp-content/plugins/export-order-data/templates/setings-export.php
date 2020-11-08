<?php  
	/**
	 * @package Export_Order_Data
	 * @version 1.0.0
	 */
	defined( 'ABSPATH' ) or die( 'Hey, you cant do this!');

	$saved_data 	=	'';
	$saved_data 	=	$this->get_saved_settings_data();
	$saved_data 	=	( $saved_data ) ? $saved_data : 'order_id | order_date | name | status | order_total | ';

	// Settings array
	$setting_array 	=	array(
		'order_id' 			=> 'Order ID',
		'status' 			=> 'Order status',
		'currency' 			=> 'Order currency',
		'name' 				=> 'Name Of Customer',
		'order_total' 		=> 'Order Total',
		'order_date' 		=> 'Order Date',
		'discount_total' 	=> 'Order Discount',
		'email' 			=> 'Customer Email',
		'phone' 			=> 'Customer Phone',
		'payment_method' 	=> 'Payment Method',
	);

?>
<div class="wrap">
	<!-- Woocommerce Layout for related styles -->
	<div class="woocommerce-layout">
		<div class="woocommerce-layout__header">
			<h1 class="woocommerce-layout__header-breadcrumbs">
				<span>
					<a href="admin.php?page=wc-admin&amp;path=" data-link-type="wc-admin">WooCommerce</a>
				</span> / 
				<span>Order Export Settings</span>
			</h1>
		</div>
	</div>

	<!-- My custom settings fileds add here -->
	<div class="ex-order-setings">
		<div class="ex-order-setings-inner">
			<h1>Woocommerce Order data export Settings <sup>v 1.0.0</sup></h1>
			<p>Click on each items to export data on order pages. Plase be mind to save data after clicking items.</p>
			<p>Navigate to <a href="<?php echo admin_url( 'edit.php?post_type=shop_order'); ?>">orders listing</a> page..</p>

			<?php 
				if ( $setting_array ):
					?>
					<ul class="props-list" id="exp_props">
						<?php
							foreach ( $setting_array as $key => $seting ) {
								// check already save settings
								$active 	=	( strpos( $saved_data, $key ) !== false ) ? 'active' : '';
								echo '<li class="seting_exp '.$active.'" data-id="'.$key.'">'.$seting.'</li>';
							}
						?>
					</ul>
					<?php
				endif; 

			?>
		    <div class="save-setings">
		    	<textarea name="exp_settings" readonly id="exp_settings" value="<?php echo $saved_data; ?>"><?php echo $saved_data; ?></textarea>
		    	<a href="#" class="submits" id="save_exp_setings">Save Settings</a>
		    </div>
		    <!-- Err messages showing -->
		    <span id="exp_msg" class="exp_msg"></span>
		</div>
	</div>

</div>