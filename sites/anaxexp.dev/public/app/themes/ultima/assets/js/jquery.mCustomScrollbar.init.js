jQuery(window).load(function(){
  jQuery("div.esgbox-inner").mCustomScrollbar({
    advanced:{
      updateOnContentResize: true
    },
    scrollButtons:{
      enable:true
    },
    theme:"dark-thin",
    autoHideScrollbar: true,
    scrollInertia: 450
  });
});