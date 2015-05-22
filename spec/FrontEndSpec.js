describe("FrontEnd", function () {
	var die = new Die();
	console.log(die);
	it("DieReturnsBetweenOneAndSixWhenRolled", function () {
		var roll = die.RollDie();
		expect(roll >= 1 && roll <=6).toBeTruthy();

	});
});