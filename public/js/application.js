$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready
  game = new Game();

  $("#new-game-button").click(function (e) {
    game.new(updateView);
  });

  $("#roll-dice-button").click(function (e) {
    game.dice.roll(updateView); //callback ?
  });

  function updateView(player, location, amount) {
    updateMoney(player, amount);
    movePlayer(location, player);
  }

  function updateMoney(player, amount) {
    $("#money-player-" + player).html(amount);
  }

  function movePlayer(location, player)  {
    $(".piece-player-" + player).removeClass(".piece-player-" + player);
    $("#square-" + location).addClass(".piece-player-" + player);
  }

});
