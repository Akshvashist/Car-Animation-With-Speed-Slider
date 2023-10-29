jQuery(window).load(function() {
  jQuery(window).scroll(function() {
    var wintop = jQuery(window).scrollTop(),
      docheight = jQuery("body").height(),
      winheight = jQuery(window).height();
    console.log(wintop);
    var totalScroll = wintop / (docheight - winheight) * 100;
    console.log("total scroll" + totalScroll);
    jQuery(".KW_progressBar").css("width", totalScroll + "%");
  });
});
