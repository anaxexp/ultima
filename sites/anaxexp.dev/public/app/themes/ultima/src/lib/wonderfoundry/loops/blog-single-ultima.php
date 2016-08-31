<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="post-content">
 	   <?php
       
   if ( is_singular() ) {
	the_content();

		if ( is_singular() && 'open' == get_option( 'default_ping_status' ) && post_type_supports( $post->post_type, 'trackbacks' ) ) {
			echo '<!--';
			trackback_rdf();
			echo '-->' . "\n";
		}
		if ( is_page() && apply_filters( 'ultimatum_edit_post_link', true ) )
			edit_post_link( __( '(Edit)', 'ultimatum' ), '', '' );

		wp_link_pages( array( 'before' => '<p class="pages">' . __( 'Pages:', 'ultimatum' ), 'after' => '</p>' ) );
	} else {
		?>
        
	<div class="row">
      <div class="span1">
          <div class="ultimaMonthDate">
              <div class="ultimaMont">
	              <?php the_time('M','' ,''); ?>
              </div>
              <div class="ultimaDate">
    	          <?php the_time('j','' ,''); ?>
              </div>
          </div>
            <div class="ultimaPostFormat">
				<?php          
					if( has_post_format(‘image’)){
						echo "<i class='icon-picture icon-2x'></i>";
					} elseif( has_post_format(‘gallery’)){
						echo "<i class='icon-picture icon-2x'></i>";
					} elseif( has_post_format(‘link’)){
						echo "<i class='icon-link icon-2x'></i>";
					} elseif( has_post_format(‘quote’)){
						echo "<i class='icon-quote-left icon-2x'></i>";
					} elseif( has_post_format(‘status’)){
						echo "<i class='icon-ellipsis-horizontal icon-2x'></i>";
					} elseif( has_post_format(‘video’)){
						echo "<i class='icon-film icon-2x'></i>";
					} elseif( has_post_format(‘audio’)){
						echo "<i class='icon-volume-up icon-2x'></i>";
					} elseif( has_post_format(‘chat’)){
						echo "<i class='icon-comments icon-2x'></i>";
					} elseif( has_post_format(‘aside’)){
						echo "<i class='icon-file-text icon-2x'></i>";
					} else {
						echo "<i class='icon-pushpin icon-rotate-90 icon-2x'></i>";
					}				
                ?>
            </div>
          
      </div>
      <div class="span8">
	  <?php
		ultimatum_content_item_image($args,$instance,790,$rel=null,$align=null,$gallery=null);
		post_gallery($width,$height,$instance);
		ultimatum_do_post_title($args,$instance);
		//ultimatum_post_tax();
		ultimatum_post_meta($args,$instance);
		?>
        <div class="ultimaExcerpt">
        <?php
		echo ult_excerpt($instance['excerptlength']);
		?>
        </div>
      </div>
    </div>
    <hr>
    
    
    		
		<?php
		
	}
       
    ?>   
       
       
    </div>
<?php endwhile; 
ultimatum_posts_nav($instance);
else: ?>
    <div class="no-content">
        <p>Sorry, nothing to display here.</p>
    </div>
<?php endif; ?>