$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready
  var game;

  $('#roll-dice-button').prop('disabled', true);

  $("#new-game-button").click(function (e) {
    //game = new Game(updateView);
    game = new Game();
    game.initialize(updateView);
    $('#roll-dice-button').prop('disabled', false);
  });

  $("#roll-dice-button").click(function (e) {
    game.takeTurn(updateView);
  });

  function updateView(players) {
    console.log(players);
    for (var i = 0; i < players.length; i++) {
      updateMoney(players[i]);
      movePlayer(players[i]);
    }
  }

  function updateMoney(player) {
    $("#money-player-" + player.id).html(player.amount);
  }

  function movePlayer(player)  {
    if ($(".piece-player-" + player.id).length) {
      $(".piece-player-" + player.id).removeClass(".piece-player-" + player.id);
    }
    $("#square-" + player.location).addClass(".piece-player-" + player.id);
    if (player.id === 1) {
      $("#square-" + player.location).append('<div class="piece-holder"><img src="../image/kotare.jpg"></div>');
    } else {
      $("#square-" + player.location).append('<div class="piece-holder"><img src="../image/hihi.jpg"></div>');
      }
  }

});
