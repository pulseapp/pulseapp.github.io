// --------------------
//    #PRODUCTION
// --------------------

// ON PAGE LOAD
   $(function() {
      if($('body').hasClass('fb_mod')) {
         $('.nav_sb-social > i').not('.icon-fb').removeClass().addClass('icon-fb');
         $('.nav_sb-social_link > .icon-fb').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("Facebook");
      }
      if($('body').hasClass('tw_mod')) {
         $('.nav_sb-social > i').not('.icon-tw').removeClass().addClass('icon-tw');
         $('.nav_sb-social_link > .icon-tw').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("Twitter");
      }
      if($('body').hasClass('yt_mod')) {
         $('.nav_sb-social > i').not('.icon-yt').removeClass().addClass('icon-yt');
         $('.nav_sb-social_link > .icon-yt').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("YouTube");
      }
      if($('body').hasClass('pt_mod')) {
         $('.nav_sb-social > i').not('.icon-pt').removeClass().addClass('icon-pt');
         $('.nav_sb-social_link > .icon-pt').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("Pinterest");
      }
      if($('body').hasClass('in_mod')) {
         $('.nav_sb-social > i').not('.icon-in').removeClass().addClass('icon-in');
         $('.nav_sb-social_link > .icon-in').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("LinkedIn");
      }
      if($('body').hasClass('ig_mod')) {
         $('.nav_sb-social > i').not('.icon-ig').removeClass().addClass('icon-ig');
         $('.nav_sb-social_link > .icon-ig').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("Instagram");
      }
      if($('body').hasClass('st_mod')) {
         $('.nav_sb-social > i').not('.icon-settings').removeClass().addClass('icon-settings');
         $('.nav_sb-social_link > .icon-settings').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("Settings");
      }
      if($('body').hasClass('sg_mod')) {
         $('.nav_sb-social > i').not('.icon-board').removeClass().addClass('icon-board');
         $('.nav_sb-social_link > .icon-board').parent().addClass('is_hidden');
         $('.nav_sb-social > span').text("Patterns");
      }
      
  
      
// Fix the background page thus avoid scroll behind the overlay when it is opened
      
//      if($('body > div').hasClass('is_visible')) {
  //       $('body').addClass('fix-it');
    //  }
      
     
   });


   $(function() {
// Sidebar Menu Item active when subitem is active
      $('.nav_sb-sec_list li.current').parent().prev().addClass('current');
      if ($(window).width() >= 1200) {
         $('.nav_sb-sec_list li.current').parent().prev().addClass('is_open');
      }
   });
   
   

// Center aligning Hanging Alert having dynmaic width      
   $('.ui-share_url').click(function() {
      var alertWidth = $('.hanging_alert').css('width');
      var alertWidthHalf = parseInt(alertWidth) / 2;
      var alertMarginLeft = ("-"+alertWidthHalf);
      $('.hanging_alert').css('margin-left', alertMarginLeft);
   });
   
   
// Changing caret icon on click 
   $('.stats_item-link').click(function() {
      $(this).find('i').toggleClass('icon-caret icon-caret-up');   
   });



// Open Sidebar Sub Menus
	$('.nav_sb-link').click(function() {
	   var width = $(window).width();
      if (width <= 1200) { // Close dropdowns on > 1200 screens
         $('.nav_sb-link').not(this).removeClass('is_open');
      }
		$(this).toggleClass('is_open');
	});
	
	
// Expand open the child menu if there is one
	$('.has_child').click(function() {
		$(this).toggleClass('is_open');
	});
	
	
	
// Content Sidebar Navigation
	$('.nav_sub-list a').click(function() {
		$('.nav_sub-list a').not(this).removeClass('is_active');
		$(this).addClass('is_active');
	});
	
// Company Overview toggle
   $('.company-overview-link').click(function() {
		$('.company-overview').toggleClass('is_hidden');
	});

// -----------------------------------------------------------
// HIGHLIGHTERS ----------------------------------------------
	
// HIGHLIGHTER callout open
   $('.highlighter').click(function() {
		$(this).parent().addClass('is_open');
		$(this).addClass('is_hidden');
	});
	
	
	
// HIGHLIGHTER callout close
	$('.callout-head .icon-close').click(function() {
		$(this).parent().parent().addClass('is_hidden');
	});
	
	
	
// Highlighters
   $('.hl_more a').click(function () {	
		$('.nav_sb-more').addClass('is_visible');
	});
	$('.hl_social a').click(function () {	
		$('.nav_sb-social_list').addClass('is_visible');
	});
   $('.hl_cs a').click(function () {	
		$('.nav_pri-sector .dd_list').addClass('is_visible');
	});
	$('.hl_timezone a').click(function () {	
		$('.dd_list-timezone').addClass('is_visible');
	});
	
	
	
// Login form shake on error 
	$('.btn-login').click(function(){
		$('.login_form-wrap').addClass('has_error');
	});
	
	
	
// Show/hide login/forgot form
	$('.forgot_link').click(function () {	
		$('#login_mod').addClass('is_hidden');
		$('#forgot_mod').removeClass('is_hidden');
	});
	
	$('#forgot_mod button').click(function () {	
		$('#forgot_mod').addClass('is_hidden');
		$('#sent_mod').removeClass('is_hidden');
	});	
	$('.backto_signin_link').click(function () {	
		$('#forgot_mod').addClass('is_hidden');
		$('#login_mod').removeClass('is_hidden');
	});	

	
// Close box 
	$('.close').click(function() {
		$(this).parent().addClass('is_hidden');
	});


	
// Showing trash icon for first visit without hover 
	$('.user_brand').mouseout(function() {
		$('.user_brand').removeClass('is_new');
	});


	
// Showing social nw icons for first visit without hover in add-brand-overlay
	$('.nav_main-item').mouseout(function() {
		$('.nav_main-item').removeClass('is_new');
	});	



// Brand removal alert Home
	$('.user_brand .icon-trash').click(function() {
		$(this).parent().addClass('has_remove');
	});
	$('.user_brand-action_cancel').click(function() {
		$('.user_brand').removeClass('has_remove');
	});
	
	$('.user_brand-row .icon-trash').click(function() {
		$(this).parent().parent().parent().addClass('has_remove');
	});
	$('.user_brand-action_cancel').click(function() {
		$('.user_brand-row').removeClass('has_remove');
	});
	

// -----------------------------------------------------------
// SETTINGS --------------------------------------------------

// Add class on clicking sector/group title under Settings
	$(".user_sector-heading").on("click", function () {
		$(this).select();
		$(this).addClass('is_focused');
		$(this).next().addClass('is_visible');
	});
	
// Cancel form edit on clicking Cancel link	
	$('.user_sector-form_action .cancel-link').on('click', function () {
		$(this).parent().removeClass('is_visible');
		$(this).parent().prev().removeClass('is_focused');
	});
	
// Brand removal alert Settings > Groups/CS
	$('.user_sector-brands_list_item .icon-trash').click(function() {
		$(this).parent().addClass('has_alert');
	});
	$('.user_brand-action_cancel').click(function() {
		$('.user_sector-brands_list_item').removeClass('has_alert');
	});
	
// Settings Remove All link
	$('.user_sector-action_confirm').on('click', function () {
		$(this).parent().addClass('is_active');
		$(this).text("Remove All Facebook Pages?");
	});
	
// Settings Remove all confirmation
	$('.user_sector-action_cancel').on('click', function () {
		$(this).parent().removeClass('is_active');
		$('.user_sector-action_confirm').text("Remove All");
	});
	
// Show add-email form
	$('.add_email-link').click(function(){
		$('.add_email-form').addClass('is_visible');
		$('.add_email-link').addClass('is_hidden');
	});
	
// Remove is_new class in Multi-level Graph
	$('.help_tip-btn').click(function(){
		$('.graph_label').removeClass('is_new');
	});

// Dropdown Menus
	$(document).click(function(event) {
		var target = $(event.target);
		if ($(event.target).parent().hasClass('dd_btn')) {
			target = $(event.target).parent();
		} else if ($(event.target).parent().hasClass('nav_sb-more_link')) {
			target = $(event.target).parent();
		}
		
		if (target.hasClass('dd_btn')) {
			event.preventDefault();
			event.stopPropagation();
			$('.dd_list').not(target.next()).removeClass('is_open');
			$('.dd_list-wrap').not(target.next()).removeClass('is_open');
			$('.dd_btn').not(target).removeClass('is_active');
			target.next().toggleClass('is_open');
			target.toggleClass('is_active');
		} else if (target.hasClass('dd_list-link')) {
			target.parent().parent().find('.dd_list-link').removeClass('is_active');
			target.addClass('is_active');
			target.parent().parent().removeClass('is_open');
		} else if (target.hasClass('nav_sb-more_link')) {
			event.preventDefault();
			event.stopPropagation();
			target.parent().toggleClass('is_visible');
		} else {
			if (target.hasClass('date_picker-input') || target.hasClass('date_picker-selection') || target.hasClass('datePickerMonthSelector') || target.hasClass('datePickerMonth') || target.hasClass('date_picker-cal') ||  target.hasClass('cal-tog-arw1') || target.hasClass('cal-tog-arw') || target.hasClass('datePickerDay') || target.hasClass('datePickerPreviousButton') || target.hasClass('datePickerNextButton')) {
				//do nothing
			}else{
				$('.dd_list').removeClass('is_open');
				$('.dd_btn').removeClass('is_active');
			}
			$('.dd_list-wrap').removeClass('is_open');
			$('.nav_sb-more').removeClass('is_visible');
		} 		
	});                                                                        

	
// -----------------------------------------------------------
// OVERLAYS --------------------------------------------------

// FEEDBACK overlay
	$('.feedback_ov-link').click(function () {	
		$('#feedback_ov').removeClass('is_hidden').addClass('is_visible');
	});
	$('#feedback_ov .btn-pri').click(function () {	
	   $('.module_alert-success').removeClass('is_hidden');
		$('.overlay_header').addClass('is_hidden');
		$('.overlay_content').addClass('is_hidden');
		$('.overlay_footer').addClass('is_hidden');
		$('#feedback_ov').delay(3000).queue(function(){
        $(this).addClass('is_hidden').clearQueue();
      });
	});   
	
// BLOG overlay
	$('.blog_ov-link').click(function () {	
		$('#blog_ov').removeClass('is_hidden').addClass('is_visible');
		$('body').addClass('fix-it'); // Position=fixed to stop backgroud of page to scroll
	});	
	
// ADD-BRAND overlay
	$('.add_brand_ov-link').click(function () {	
		$('#add_brand_ov').removeClass('is_hidden').addClass('is_visible');
		$('body').addClass('fix-it'); // Position=fixed to stop backgroud of page to scroll
	});

// ADD-BRAND overlay Interactions
   $('.overlay_wrap .btn-l-sec').click(function () {	
      $(this).addClass('is_hidden');
		$('.overlay_menu-wrap').addClass('is_hidden');
		$('#overlay-brands_list').addClass('is_hidden');
	});
// Showing up profile filters in add-brand overlay
	$('.overlay_menu-profile .dd_btn').click(function() {
		$('.overlay_menu-profile_ext').toggleClass('is_open');
	});
	
// TERMS overlay
	$('.terms_ov-link').click(function () {	
		$('#terms_ov').removeClass('is_hidden').addClass('is_visible');
		$('body').addClass('fix-it'); // Position=fixed to stop backgroud of page to scroll
	});	
	
// HELP overlay
	$('.help_ov-link').click(function () {	
		$('#help_ov').removeClass('is_hidden');
	});
	
// Show Overlay in Patterns
	$('#full_size_ov-link').click(function () {	
		$('#full_size_ov').removeClass('is_hidden').addClass('is_visible');
		$('body').addClass('fix-it'); // Position=fixed to stop backgroud of page to scroll
	});
	$('#medium_size_ov-link').click(function () {	
		$('#medium_size_ov').removeClass('is_hidden').addClass('is_visible');
		$('body').addClass('fix-it'); // Position=fixed to stop backgroud of page to scroll
	});
	$('#small_size_ov-link').click(function () {	
		$('#small_size_ov').removeClass('is_hidden').addClass('is_visible');
		$('body').addClass('fix-it'); // Position=fixed to stop backgroud of page to scroll
	});
	$('.overlay_wrap .icon-close').click(function () {	
		$('.overlay_wrap').addClass('is_hidden').removeClass('is_visible');
	});
	$('.overlay_wrap').click(function() {
      $(this).not('.is_hidden').addClass('is_hidden').removeClass('is_visible');
   });
   $('.overlay_body').click(function(event){
      event.stopPropagation();
   });
   $('.overlay-add').click(function(event){
      event.stopPropagation();
   });


// Include Tipsy Tooltip

   $(function() {
      $('.nav_sb-more > a [title]').tipsy({fade: true, gravity: 'w'});
   	$('.nav_pri-brands [title]').tipsy({fade: true, gravity: 'n'});
   	$('.header [title]').tipsy({fade: true, gravity: 'n'});
   	$('.overlay_wrap .icon-close[title]').tipsy({fade: true, gravity: 'n'});
   	$('.overlay_wrap .module_header [title]').tipsy({fade: true, gravity: 'n'});
   	$('.nav_pri [title]').tipsy({fade: true, gravity: 'n'});
   	
   	$('.date_picker-date[title]').tipsy({fade: true, gravity: 's'});
   	$('[title]').tipsy({fade: true, gravity: 's'});
   });