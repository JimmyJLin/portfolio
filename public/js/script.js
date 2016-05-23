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

  // topic modals
  $('#world').on('click', function(){
    $('.ui.modal.world').modal('show')
  })

  $('#foodie').on('click', function(){
    $('.ui.modal.foodie').modal('show')
  })

  $('#warrior').on('click', function(){
    $('.ui.modal.warrior').modal('show')
  })

  $('#entrepreneur').on('click', function(){
    $('.ui.modal.entrepreneur').modal('show')
  })

  $('#consultant').on('click', function(){
    $('.ui.modal.consultant').modal('show')
  })

  // companies modal
  $('#microsoft').on('click', function(){
    $('.ui.modal.microsoft').modal('show')
  })

  $('#sade').on('click', function(){
    $('.ui.modal.sade').modal('show')
  })

  $('#nyse').on('click', function(){
    $('.ui.modal.nyse').modal('show')
  })

  $('#pepsico').on('click', function(){
    $('.ui.modal.pepsico').modal('show')
  })

  $('#brooklyn').on('click', function(){
    $('.ui.modal.brooklyn').modal('show')
  })

  $('#milbon').on('click', function(){
    $('.ui.modal.milbon').modal('show')
  })

  // company tabs
  $('.menu .item').tab()
})
