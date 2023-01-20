const mainScreen = document.getElementById('main-screen');
const clearButton = document.getElementById('clear-button');
let mainScreenResult;
let actionButtonIsClicked = false;
let resultExist = false;
let actionId;


// function getButtonValue(num){
// 	console.log("NUMBER TYPED: ", num);
// 	if(actionButtonIsClicked === false){
// 		console.log("THIS IS THE VALUE OF THE MAIN SCREEN BEFORE", mainScreen.value);
// 		mainScreen.value += num;
// 		console.log("THIS IS THE VALUE OF THE MAIN SCREEN AFTER", mainScreen.value);
// 		clearButton.innerHTML = "C";
// 		if(resultExist === false){
// 			mainScreenResult = num;
// 		}

// 	} else {

// 		mainScreen.value = num;
// 		actionButtonIsClicked = false;
// 		calculator(num);
// 		resetAll();
// 	}
// }

// function calculator(num){
// 	resultExist = true;
// 	if(actionId === "addition-symbol"){
// 		mainScreenResult += parseInt(num);

// 	} else if(actionId === "division-symbol"){
// 		mainScreenResult /= parseInt(num);

// 	} else if (actionId === "percentage-symbol") {
// 		mainScreenResult %= parseInt(num);

// 	} else if (actionId === "") {

// 	}  else if (actionId === "") {

// 	}

// }

// function clearMainScreen() {
// 	let clearButtonText = clearButton.innerHTML;
// 	if(clearButtonText === "C") {
// 		mainScreen.value = null;
// 		mainScreen.placeholder = "0";
// 		clearButton.innerHTML = "AC";
// 	}
// }

// function performAction(id){
// 	actionId = id;
// 	actionButtonIsClicked = true;
// 	if(resultExist === true){
// 		console.log("RESULT: ", mainScreenResult);
// 		mainScreen.value = mainScreenResult;
// 	} 
// 		changeColor(id);
// }

// function calculatePercentage(){
// 	if(mainScreenResult !== undefined){
// 		mainScreenResult = mainScreenResult / 100;
// 		mainScreen.value = mainScreenResult;
// 	}
// }

// function changeColor(id) {
// 	resetAll();
// 	if(id !== "equal-symbol"){
// 		actionButtonOnClick(id);
// 	} else{
// 		equalsTo();
// 	}
// }

// function equalsTo(){
// 	if(resultExist === true){
// 		console.log("RESULT: ", mainScreenResult);
// 		mainScreen.value = mainScreenResult;
// 	} 
// }

// function resetAll(){
// 	const yellowButtons = document.getElementsByClassName('yellow');
// 	for(yellowButton of yellowButtons){
// 		actionButtonReset(yellowButton.id);
// 	}
// }


// function actionButtonOnClick(id) { 	
// 	document.getElementById(id).style.color = "#FF9500";
// 	document.getElementById(id).style.backgroundColor = "white";
// }

// function actionButtonReset(id) { 
// 	document.getElementById(id).style.color = "white";
// 	document.getElementById(id).style.backgroundColor = "#FF9500";
// }

// // switch case statement
// // conditionals
// // float
// // double


//  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";


// // Return grade based on the score
// // 80 - 100 = A
// // 60 - 79 = B
// // 50 - 59 = C
// // 40 - 49 = D
// // 0 - 39 = F

// // function aGrade(score){
// // if (score <= 100 && score >= 80){
// // 	return "A";
// // } else if (score <= 79 && score >= 60){
// // 	return "B";
// // } else if (score <= 59 && score >= 50){
// // 	return "C";
// // } else if (score <= 49 && score >= 40){
// // 	return "D";
// // } else if (score <=39 ){
// // 	return "F";
// // } else {
// // 	return "SCORE IS AN ERROR"
// // }
// // }




// switch(num){
// 	case 80:
// 	case 90:
// 	case 100:
// 	grade = "A";
// 	break;
// 	case 80:
// 	case 70:
// 	case 60:
// 	grade = "B";
// 	break;
// 	case 60:
// 	case 50:
// 	case 40:
// 	grade = "C";
// 	break;
// 	case 40:
// 	case 30:
// 	case 20:
// 	case 10:
// 	case 0:
// 	grade ="F";
// 	break;
// }