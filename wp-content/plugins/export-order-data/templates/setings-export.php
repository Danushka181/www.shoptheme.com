<?php  
	/**
	 * @package Export_Order_Data
	 * @version 1.0.0
	 */
	defined( 'ABSPATH' ) or die( 'Hey, you cant do this!');

	$setting_array 	=	array(
		'order_id' => 'Order Id',
		'status' => 'Order status',
		'currency' => 'Order currency',
		'name' => 'Name Of Customer',
		'total' => 'Order Total',
		'get_date_created' => 'Order Date',
		'discount_total' => 'Order Discount',
		'email' => 'Customer Email',
		'phone' => 'Customer Phone',
		'payment_method' => 'Payment Method',
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
			<p>Navigate to <a href="admin.php??post_type=shop_order">orders listing</a> page..</p>

			<?php 
				if ( $setting_array ):
					?>
					<ul class="props-list" id="exp_props">
						<?php
							foreach ( $setting_array as $key => $seting ) {
								echo '<li class="seting_exp" data-id="'.$key.'">'.$seting.'</li>';
							}
						?>
					</ul>
					<?php
				endif; 

			?>
		    <div class="save-setings">
		    	<textarea name="exp_settings" readonly id="exp_settings" value="<?php echo esc_attr( get_option('exp_settings') ); ?>"></textarea>
		    	<a href="#" class="submits" id="save_exp_setings">Save Settings</a>
		    </div>
		    <span id="exp_msg" class="exp_msg"></span>
		</div>
	</div>

</div>