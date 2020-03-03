<?php
/**
 * Template Name: Stream Frame Template
 * Template Post Type: post, page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since 1.0
 */

get_header();
?>

<main id="stream-frame" role="main">
	<span> test text content</span>
	
	<div id="custom-area"> 
		<?php
			the_title();

			if ( have_posts() ) {

			while ( have_posts() ) {
				the_post();
				the_content();
				
			 }
			}
		?>
	</div>
</main><!-- #site-content -->

