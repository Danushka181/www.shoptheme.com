<?php global $product, $woocommerce_loop, $mts_options; ?>



<div class="product-wrap effect-imgswitch">

	<div class="product-wrap-inner">

		<a href="<?php echo esc_url( get_the_permalink() ); ?>">
		<?php
			/**
			 * woocommerce_before_shop_loop_item_title hook
			 *
			 * @hooked woocommerce_show_product_loop_sale_flash - 10
			 * @hooked woocommerce_template_loop_product_thumbnail - 10
			 */
			do_action( 'woocommerce_before_shop_loop_item_title' );



			if ( version_compare( $woocommerce->version, '3.0.0', ">=" ) ) {
				$attachment_ids = $product->get_gallery_image_ids();
			} else {
				$attachment_ids = $product->get_gallery_attachment_ids();
			}



			$img_count = 0;



			if ( $attachment_ids ) {



				foreach ( $attachment_ids as $attachment_id ) {

					

					echo wp_get_attachment_image( $attachment_id, 'shop_catalog', 0, array('class' => "attachment-shop_catalog second-product-img") );



					$img_count++;



					if ($img_count == 1) break;

				}



			} else {

				$post_thumbnail_id = get_post_thumbnail_id( get_the_ID() );

				echo wp_get_attachment_image( $post_thumbnail_id, 'shop_catalog', 0, array('class' => "attachment-shop_catalog second-product-img") );

			}

		?>
		</a>
		<div class="product-hover">

			<div class="product-buttons">

				<?php woocommerce_template_loop_add_to_cart(); ?>

				<?php echo mts_wishlist_button(); ?>

				<a href="#" data-product-id="<?php echo esc_attr( $product->get_id() ); ?>" class="quick-look-link button"><i class="fa fa-search"></i><span><?php _e( 'Quick Look', MTS_THEME_TEXTDOMAIN );?></span></a>

				<a href="<?php echo esc_url( get_the_permalink() ); ?>" class="button"><i class="fa fa-eye"></i></a>

			</div>

		</div>

	</div>

	<div class="product-category">

	<?php

    $terms = wp_get_post_terms( $product->get_id(), 'product_cat' );

    $count = 0;

    foreach( $terms as $category) {

        if ( 0 !== $count ) echo ', ';

        echo '<span>' . $category->name . '</span>';

        $count++;

    }

    ?>

    </div>

	<div class="product-title"><a href="<?php echo esc_url( get_the_permalink() ); ?>"><?php echo esc_html( get_the_title() ); ?></a></div>

	<div class="product-data">

		<?php

			/**

			 * woocommerce_after_shop_loop_item_title hook

			 *

			 * @hooked woocommerce_template_loop_rating - 5

			 * @hooked woocommerce_template_loop_price - 10

			 */

			do_action( 'woocommerce_after_shop_loop_item_title' );

		?>

	</div>



</div>