var runTimeout;
var inProgress;
var lines = [];
var lastLine;
var nextLine;
var runDelay = 500;
/*
move : moves one space forward
turn-left : turns 90 degrees to the left
turn-right : turns 90 degrees to the right
if-wall # : executes the next line only if there is a wall ahead
if-no-wall : executes the next line only if there is not a wall ahead
jump-relative : jumps a specified number of lines
jump-absolute : jumps to a specific line
*/

const LINE_GETS = {
	"" : function() {
		return function() {
			
		}
	},
	"move" : function() {
		return function() {
			if (isWall(currentX, currentY, currentD)) {
				die();
			} else {
				currentX += ddx(currentD);
				currentY += ddy(currentD);
			}
		}
	},
	"turnright" : function() {
		return function() {
			currentD ++;
			if (currentD >= 4)
				currentD -= 4;
		}
	},
	"turnleft" : function() {
		return function() {
			currentD --;
			if (currentD < 0)
				currentD += 4;
		}
	},
}

function interpret(input) {
	var textlines = input.split("\n");
	lines = [];
	textlines.forEach(function(line, dex) {
		var words = line.split(" ");
		if (LINE_GETS[words[0]])
			lines[dex] = LINE_GETS[words[0]](words.slice(1));
		else
			throw "Error at line "+dex+": \""+line+"\" is not a valid command.";
	});
}

function redrawCodeCanvas() {
	var height = codeInput.clientHeight;
	codeCanvas.height = height;
	codeCanvas.style.height = height+"px";
	//code.style.height = height+"px";
}

function runCode() {
	if (inProgress)
		return;
	try {
		interpret(codeInput.value);
		errorHere.hidden = true;
	} catch (e) {
		errorHere.innerHTML = e;
		errorHere.hidden = false;
		return;
	}
	console.log(lines);
	nextLine = 0;
	failed = false;
	reset();
	runTimeout = setTimeout(runNext, runDelay);
}

function runNext() {
	lastLine = nextLine;
	nextLine = null;
	console.log(lines[lastLine]);
	lines[lastLine]();
	if (nextLine == null) {
		nextLine = lastLine + 1;
	}
	//console.log(nextLine, failed);
	drawPlayer();
	if (failed) {
		inProgress = false;
		lose();
	} else if (currentX == goalX && currentY == goalY) {
		inProgress = false
		win();
	} else if (nextLine < 0 || nextLine >= lines.length) {
		inProgress = false;
		console.log("Out of input");
	} else {
		inProgress = true;
		//console.log("bup")
		runTimeout = setTimeout(runNext, runDelay);
	}
}

function haltExecution() {
	inProgress = false;
	clearTimeout(runTimeout);
}

function die() {
	failed = true;
}

