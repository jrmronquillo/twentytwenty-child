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
	
	<div id="custom-area"> 
		<div id="the-title"><?php the_title();?></div>

		<?php

			if ( have_posts() ) {

			while ( have_posts() ) {	

				the_post();
				
		?>
		<div id="the-subtext"> <?php the_content(); ?></div>
		<?php	 }
			}
		?>
	</div>
</main><!-- #site-content -->

