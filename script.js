// Index 

$(function() {
  $('#pokedex_logo').hover(function() {
      $('#pokedex_logo').css('background-image', "url('img/pokedex_logo.png')");
      $('#body').css('background-image', "url('img/pokeball_paper.png')");
      $('#body').css('background-position', "center");
  }, function() {
    // on mouseout, reset the background colour
    $('#pokedex_logo').css('background-image', "url('img/pokedex_logo_bw.png')");
    $('#body').css('background-image', 'none');
  });
});


// Home

// open modal
$('#table tbody').on('click', 'tr', function () {
  $('#modal').css("display", "block");
});

// close modal
$('#modal div ').on('click', '.modal_close', function () {
  $('#modal').css("display", "none");
} );