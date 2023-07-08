$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filler');
    if(value == 'all'){
      $('.itemBox').show('1000');
    }
    else{
      $('.itemBox').not('.' +value).hide('1000');
      $('.itemBox').filler('.' +value).show('1000');

    }
  })
  $('.list').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  })
  
})
