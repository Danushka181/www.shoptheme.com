<?php
$mts_options = get_option(SHOP_THEME);
?>
<form method="get" id="searchform" class="search-form" action="<?php echo esc_attr( home_url() ); ?>" _lpchecked="1">
	<fieldset>
		<input type="hidden" name="post_type" value="post" class="post-type-input" />
		<input type="text" name="s" id="s" value="<?php the_search_query(); ?>" placeholder="<?php _e('Search Products...', MTS_THEME_TEXTDOMAIN ); ?>" <?php if (!empty($mts_options['mts_ajax_search'])) echo ' autocomplete="off"'; ?> />
		<button id="search-image" class="sbutton" type="submit" value="">
	    		<i class="fa fa-search"></i>
	    	</button>
	</fieldset>
</form>