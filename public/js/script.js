$(function(){
  console.log("script is working")

  // fullpage.js
  $('#fullpage').fullpage({
    // anchors:['sohoDuck', 'sprinkle', 'mooD', 'puppyRace']
  });

  // semantic

  // hover image pop-up
  $('.pop').popup();

  $('#moveup').on('click', function(){
    console.log('clicked')
    $.fn.fullpage.moveSectionUp();
  })

  $('#movedown').on('click', function(){
    $.fn.fullpage.moveSectionDown();
  })

  $('#world').on('click', function(){
    console.log("clicked")
    $('.ui.modal.world').modal('show')

  })

})
