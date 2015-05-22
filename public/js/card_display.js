$(document).ready(function(){
  function ChanceCardController () {};

  ChanceCardController.prototype.drawChanceCard = function(callback) {
    $.ajax({
      url: "https://chance-comchest.herokuapp.com/api/v0.1/chance-card",
      method: 'GET',

      success: function(data){
        callback(data);

      },
      error: function(data){
        alert('Card error')
      }
    });
  };

  $("#chance").click(function () {
    newCont = new ChanceCardController();
    newCont.drawChanceCard(UpdateCardView);
  });

  function UpdateCardView(data) {

     alert(data);
  };

  function CommunityCardController () {};

  CommunityCardController.prototype.drawCommunityCard = function(callback) {
    $.ajax({
      url: "https://chance-comchest.herokuapp.com/api/v0.1/community-card",
      method: 'GET',

      success: function(data){
        callback(data);

      },
      error: function(data){
        alert('Card error')
      }
    });
  };

  $("#community").click(function () {
    newCont = new CommunityCardController();
    newCont.drawCommunityCard(UpdateCardView);
  });

  function UpdateCardView(data) {

     alert(data);
  };

});
