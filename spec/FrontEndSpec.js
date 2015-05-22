describe("FrontEnd", function() {
	var die = new Die();
	console.log(die);
	it("Die Returns Between One And Six When Rolled", function() {
		var roll = die.RollDie();
		expect(roll >= 1 && roll <=6).toBeTruthy();

	});


});

describe("Game", function() {
	describe("TakeTurn()", function() {
		it('Makes Ajax Call & Returns 200 Status', function() {
  
		})
	})
})