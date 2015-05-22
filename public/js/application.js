$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

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
  }

});
