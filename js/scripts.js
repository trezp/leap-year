var triangle = function(side1, side2, side3){

	if ( (isNaN(side1) === true) || (isNaN(side2) === true) || (isNaN(side3) === true) ){
		return "notValidNumbers";
	} else if ((side1 >= side2 + side3 ) || (side2 >= side1 + side3) || (side3 >= side1 + side2 ) ){
		return "notATriangle";
	} else if ((side1 === side2) && (side1 === side3) && (side2 === side3)) {
		return "equilateral";
	} else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
		return "isosceles";
	} else {
		return "scalene";
	}
}



var leapYear = function(year){
	if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
		return true; 
	} else{
		return false;
	}
};

function something(){
	return true;
}

$(document).ready(function(){
	$("form#leap-year").submit(function(event){
		var year = parseInt($("input#year").val());
		var result = leapYear(year);

		$(".year").text(year);
		if(!result){
			$(".not").text("not"); 
		} else {
			$(".not").text("");
		}

		$("#result").show();
		event.preventDefault();	

	});
});


$(document).ready(function(){
	$("form#triangle").submit(function(event){
		var side1 = parseInt($("input#side1").val());
		var side2 = parseInt($("input#side2").val());
		var side3 = parseInt($("input#side3").val());
		
		var result = triangle(side1, side2, side3);
		
		if(result === "notATriangle"){
			$("#triangleType").text("Oops! This is not a triangle. Generally speaking, a triangle cannot have one side that is the same or larger than the sum of it's other sides. Please try again!"); 
		} else if (result === "equilateral") {
			$("#triangleType").text("Congratulations! This is an equilateral triangle.");
		} else if (result === "isosceles") {
			$("#triangleType").text("This is an isoceles triangle. How exciting!");
		} else if (result === "scalene" ){
			$("#triangleType").text("This is a scalene triangle, yippeee!");
		} else if (result === "notValidNumbers" ) {
			$("#triangleType").text("Nice try, but you didn't enter numbers.");
		} else {
			$("#triangleType").text("");
		}

		$("#triangleDiv").show();
		event.preventDefault();	

	});
});