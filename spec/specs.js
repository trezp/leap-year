describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    expect(leapYear(1999)).to.equal(false);
  });

  it("is true for most years divisible by 4", function(){
  	expect(leapYear(2012)).to.equal(true);
  });

  it("is false for most years divisible by 100", function(){
  	expect(leapYear(1900)).to.equal(false);
  });

  it("is true for most years divisible by 400", function(){
  	expect(leapYear(1600)).to.equal(true);
  });
});

describe('triangle', function(){
	it("is an equilateral triangle when all input values are equal", function(){
		expect(triangle(2,2,2)).to.equal("equilateral");
	});

	it("is an isosceles triangle if 2 sides are equal", function(){
		expect(triangle(2,2,1)).to.equal("isosceles");
	});
	
	it("is NOT a triangle if one side is the same or larger than the sum of the other two", function(){
		expect(triangle(3,8,1)).to.equal("notATriangle");
	});

	it("is NOT a valid entry if one side is not a number", function(){
		expect(triangle("sdfsdfsdfs","sdfsdfsdf", 3)).to.equal("notValidNumbers");
	});

}); 

describe('something', function() {
  it("this means that this thing is working", function() {
    expect(something()).to.equal(true);
	});
});
 
