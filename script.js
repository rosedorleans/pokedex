$(function() {
    $('#pokedex-logo').hover(function() {
        $('#pokedex-logo').css('background-image', "url('img/pokedex-logo.png')");
        $('#body').css('background-image', "url('img/pokeball-paper.png')");
        $('#body').css('background-position', "center");
    }, function() {
      // on mouseout, reset the background colour
      $('#pokedex-logo').css('background-image', "url('img/pokedex-logo-bw.png')");
      $('#body').css('background-image', 'none');
    });
  });
