function ChanceCardController () {};

ChanceCardController.prototype.drawChanceCard = function(callback) {
    return {
      url: '/api/v0.1/chance-card',
      method: 'get',

      success: function(data){
        $.ajax.callback(data.parsedresponse)
      },
      error: function(data){
        alert('card error')
      }
    };
  };

$("#chance").click(function (e) {
    game.drawchancecard(updatecardview);
  });

  function updatecardview(data) {
    alert('data.description')
  };

console.log("test");

$.ajax({
  url: "https://chance-comchest.herokuapp.com/api/v0.1/community-card",
  method: 'GET',
  success:function(data){
      console.log(data)
  }
});