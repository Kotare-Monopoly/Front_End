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
    if ($(".piece-player-" + player.Id).length) {
      $(".piece-player-" + player.Id).removeClass(".piece-player-" + player.Id);
    }
    $("#square-" + player.CurrentPositionId).addClass(".piece-player-" + player.Id);
    console.log(player.Id);
    if (player.Id === 1) {
      $("#square-" + player.CurrentPositionId).append('<div class="piece-holder"><img src="../Front-End/public/image/kotare.jpg"></div>');
    } else {
      $("#square-" + player.CurrentPositionId).append('<div class="piece-holder"><img src="../Front-End/public/image/hihi.jpg"></div>');
      }
  }

});
