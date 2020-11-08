<?php $mts_options = get_option(SHOP_THEME); ?>
<div class="offers-banners mts-ad-widgets home-section sidebar clearfix">
	<div class="container mts-ads-container">
    	<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar( 'homepage-banners' ) ) : ?><?php endif; ?>
    </div>
</div>