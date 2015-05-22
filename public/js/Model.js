function Die () {};

Die.prototype.RollDie = function() {

	return Math.floor((Math.random() * 6) +1);  //return number between 1 and 6

};

function Player () {

	this.id; 
	this.hours;
	this.newLocation;
	this.locationDetails;

};

function Game () {

	//this.Board = new Board();
	this.Players = [new Player(), new Player()];
	this.Die = [new Die() ,new Die()];
	this.currentPlayer = 1;
}

Game.prototype.initialize = function(callback){
	$.ajax(this.getNewGame(this, callback));
}

Game.prototype.takeTurn = function(callback){
  var dieResult = this.Die[0].RollDie() + this.Die[1].RollDie();
  console.log(dieResult)
  $.ajax(postDieResult(this, callback, dieResult, this.currentPlayer));
};

function postDieResult(context, callback, dieResult, currentPlayer) {
  return {
    url: 'http://edacentralhub.azurewebsites.net/api/v1/gamestate',
    method: 'POST',
    // contentType: "application/json",
    data: {
      "dieResult" : dieResult, 
      "currentPlayer" : currentPlayer
    },

    success: function(data){
      $.ajax(context.getGameState(context, callback));
    },
    error: function(data){
      alert('Grumpy Cat says No!');
    }
  };
};

Game.prototype.getGameState = function(context, callback) {
  return {
    url: 'http://edacentralhub.azurewebsites.net/api/v1/gamestate',
    method: 'GET',
    // contentType: "application/json",

    success: function(data){
      context.Players[0] = data[0];
      context.Players[1] = data[1];

      if (context.currentPlayer === 1) {
        context.currentPlayer = 2; //set current player to 2 
      }
      else {
        context.currentPlayer = 1; // otherwise it's set to 1!
      }

      callback(context.Players)
    },
    error: function(data){
      alert('Grumpy Cat says No!')
    }
  };
};

Game.prototype.getNewGame = function(context, callback) {
  return {
    url: 'http://edacentralhub.azurewebsites.net/api/v1/newgame',
    method: 'GET',
    // contentType: "application/json",

    success: function(data){
      context.Players[0] = data[0];
      context.Players[1] = data[1];

      if (context.currentPlayer === 1) {
        context.currentPlayer = 2; //set current player to 2 
      }
      else {
        context.currentPlayer = 1; // otherwise it's set to 1!
      }

      callback(context.Players)
    },
    error: function(data){
      alert('Grumpy Cat says No!')
    }
  };
};


// function Board () {
// var GameBoard = [];
// };



