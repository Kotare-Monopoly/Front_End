Game.prototype.drawChanceCard = function(callback) {
    return {
      url: '/api/v0.1/chance-card',
      method: 'GET',

      success: function(data){
        callback(data.parsedResponse)
      },
      error: function(data){
        alert('Card error')
      }
    };
  };

$("#chance").click(function (e) {
    game.drawChanceCard(updateCardView);
  });

  function updateCardView(data) {
    $(#card_display).append(data.description)
  };