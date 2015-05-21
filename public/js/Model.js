function Die () {};

Die.prototype.RollDie = function() {

	return Math.floor((Math.Random() * 6) +1);  //return number between 1 and 6

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
	$.ajax(getGameState)
}

Game.prototype.takeTurn = function(callback){
	var dieResult = this.die[0].RollDie() + this.die[1].RollDie();
	$.ajax(postDieResult)
}

var postDieResult ={
	url: '/api/GameState/DiceRoll',
	method: 'POST',
	data: {"dieResult" : dieResult, "currentPlayer" : currentPlayer},

	success: function(data){
		$.ajax(getGameState)
	},
	error: function(data){
		alert('Grumpy Cat says No!')
	}
}

var getGameState = {

	url: '/api/GameState/GameInfo',
	method: 'GET',

	success: function(data){
	//this.Board = data.board;
		this.Players[0] = data.Player1;
		this.Players[1] = data.Player2;

		if (this.currentPlayer === 1) 
		{
			this.currentPlayer = 2; //set current player to 2 
		}
		else {
			this.currentPlayer = 1; // otherwise it's set to 1!
		}

		callback(this.Players)
	},
	error: function(data){
		alert('Grumpy Cat says No!')
	}

}


// function Board () {
// var GameBoard = [];
// };



