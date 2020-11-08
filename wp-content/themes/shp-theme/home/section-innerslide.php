<div class="slider-div-main clear">
	<?php  
		$hide_header 	=	get_field( 'hide_header', $post->ID );
		if ( $hide_header != true ) :
			$header_image 	=	get_field( 'header_image', $post->ID );
			// get default header image if page header image not updated
			$header_image 	=	( $header_image ) ? $header_image : get_field( 'header_image', get_option('page_on_front') );
			?>
			<!-- Inner banner image -->
			<div class="inner-banner" style="background-image: url(<?php echo $header_image['url']; ?>);">
				<?php  
					if ( get_post_type( $post) == 'product' ) {
						?>
						<h1><?php echo woocommerce_page_title( $post->ID ); ?></h1>
						<?php
					}else{
						?>
						<h1><?php echo get_the_title( $post->ID ); ?></h1>
						<?php 
					}
				?>
			</div>
			<?php 
		endif;
	?>		
	</div>
</div>