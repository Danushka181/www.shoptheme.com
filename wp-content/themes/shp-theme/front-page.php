<?php  
	/* Make a home page for theme */
	get_header();
	
	get_template_part( 'home/section', 'welcome' );		
	get_template_part( 'home/section', 'product_cats' );		
	get_template_part( 'home/section', 'banner' );		
	get_template_part( 'home/section', 'offers' );		
	get_template_part( 'home/section', 'banner' );		
	get_template_part( 'home/section', 'product_grid' );		
	get_template_part( 'home/section', 'posts' );		

	get_footer();
?>