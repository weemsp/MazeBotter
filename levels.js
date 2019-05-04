const LEVELS = [
	{
		title : "One Small Step",
		instructions : "For this first maze, all you need to do is move forward directly into the goal. Just type \"move\" into the text entry and then click \"Run\".",
		width : 1,
		height : 2,
		wallsRight:[[],
					[]],
		wallsDown :[[0]],
		startX : 0,
		startY : 1,
		startD : 0,
		goalX : 0,
		goalY : 0,
		solution : "move",
	},
	{
		title : "Two Small Steps",
		instructions : "To move multiple times, just input \"move\" on each line.",
		width : 1,
		height : 3,
		wallsRight:[[],
					[],
					[]],
		wallsDown :[[0],
					[0]],
		startX : 0,
		startY : 2,
		startD : 0,
		goalX : 0,
		goalY : 0,
		solution : "move\nmove",
	},
	{
		title : "Turnabout",
		instructions : "Type \"turnright\" in order to turn 90 degrees to the right.",
		width : 2,
		height : 2,
		wallsRight:[[0],
					[1]],
		wallsDown :[[0,1]],
		startX : 0,
		startY : 1,
		startD : 0,
		goalX : 1,
		goalY : 0,
		solution : "move\nturnright\nmove",
	},
	{
		title : "Other Way",
		instructions : "You can also type \"turnleft\". You probably don't need me to tell you what that does.",
		width : 2,
		height : 2,
		wallsRight:[[0],
					[0]],
		wallsDown :[[1,0]],
		startX : 0,
		startY : 1,
		startD : 0,
		goalX : 0,
		goalY : 0,
		solution : "turnright\nmove\nturnleft\nmove\nturnleft\nmove",
	},
	{
		title : "Keep Going",
		instructions : "You don't have enough space to type out all of those \"move\" commands. Fortunately, the pointer isn't only limited to going down one line at a time - it can move around. There are two ways to do this - \"goto\" and \"jump\".<br> \
				\"goto\" moves the pointer to the specified line. Note that lines are zero-indexed, so \"goto 0\" returns to the top of the program, \"goto 1\" goes to the second line, \"goto 2\" goes to the third line, and so on.<br> \
				\"jump\" moves the pointer by a relative amount. So \"jump 3\" moves three lines forward, while \"jump -1\" moves one line back. \"jump 1\" is completely useless, while \"jump 0\" gets the program stuck in an infinite loop.",
		width : 1,
		height : 10,
		wallsRight:[[],
					[],
					[],
					[],
					[],
					[],
					[],
					[],
					[],
					[]],
		wallsDown :[[0],
					[0],
					[0],
					[0],
					[0],
					[0],
					[0],
					[0],
					[0]],
		startX : 0,
		startY : 9,
		startD : 0,
		goalX : 0,
		goalY : 0,
		maxLines : 2,
		solution : "move\ngoto 0",
	},
	{
		title : "Staircase",
		instructions : "Same as before.",
		width : 7,
		height : 8,
		wallsRight:[[0,0,0,0,0,1],
					[0,0,0,0,1,0],
					[0,0,0,1,0,1],
					[0,0,1,0,1,0],
					[0,1,0,1,0,0],
					[1,0,1,0,0,0],
					[0,1,0,0,0,0],
					[1,0,0,0,0,0]],
		wallsDown :[[0,0,0,0,0,1,0],
					[0,0,0,0,1,0,1],
					[0,0,0,1,0,1,0],
					[0,0,1,0,1,0,0],
					[0,1,0,1,0,0,0],
					[1,0,1,0,0,0,0],
					[0,1,0,0,0,0,0],
					[0,0,0,0,0,0,0]],
		startX : 0,
		startY : 7,
		startD : 0,
		goalX : 6,
		goalY : 0,
		maxLines : 7,
		solution : "move\nturnright\nmove\nturnleft\ngoto 0",
	},
	{
		title : "Spiral",
		instructions : "Now introducing: Conditions. \
				\"if-wall\" executes the following line if and only if there's a wall immediately in front of you. \
				\"if-clear\" executes the following line if and only if there's NOT a wall immediately in front of you.",
		width : 4,
		height : 4,
		wallsRight:[[0,0,0],
					[1,0,1],
					[1,1,1],
					[1,0,0]],
		wallsDown :[[0,1,1,0],
					[0,0,0,0],
					[0,0,1,0]],
		startX : 0,
		startY : 3,
		startD : 0,
		goalX : 2,
		goalY : 2,
		maxLines : 5,
		solution : "move\nif-wall\nturnright\ngoto 0",
	},
	{
		title : "Shifting",
		instructions : "If statements, together with goto or jump, can be very useful. Instead of using an if statement to execute one line of code, you can use it with a jump or goto in order to skip over multiple lines of code.",
		width : 5,
		height : 10,
		wallsRight:[[1,0,0,0],
					[0,1,0,0],
					[1,1,0,0],
					[1,0,1,0],
					[0,1,1,0],
					[0,1,1,0],
					[0,1,0,1],
					[0,0,1,0],
					[0,0,0,1],
					[0,0,0,1]],
		wallsDown :[[0,1,0,0,0],
					[1,0,0,0,0],
					[0,0,1,0,0],
					[0,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,1,0],
					[0,0,1,0,1],
					[0,0,0,1,0],
					[0,0,0,0,0]],
		startX : 4,
		startY : 9,
		startD : 0,
		goalX : 0,
		goalY : 0,
		maxLines : 8,
		solution : "move\nif-clear\ngoto 0\nturnleft\nmove\nturnright\ngoto 0",
	},
	//pipe with some kinks
	//turny pipe
	//real maze
	{
		title : "Be Amazed",
		instructions : "This is it, the algorithm this entire game has been building up to. Hit: Don't try to be quick, just be thorough.",
		width : 10,
		height : 10,
		wallsRight:[[0,0,0,1,0,0,1,0,0],
					[1,0,1,0,0,1,0,0,0],
					[0,0,1,1,0,0,0,0,1],
					[0,1,0,1,1,0,0,1,1],
					[1,0,0,0,1,1,1,0,0],
					[1,0,0,0,0,1,0,0,1],
					[1,0,1,0,0,1,1,0,1],
					[0,1,0,0,1,0,1,0,0],
					[1,0,0,1,1,0,1,1,0],
					[0,0,1,0,0,1,0,0,0]],
		wallsDown :[[0,0,1,1,1,1,0,1,0,1],
					[0,1,1,0,1,0,1,1,1,0],
					[1,1,0,0,0,1,1,1,0,0],
					[0,0,1,1,0,0,1,0,1,0],
					[0,1,1,1,1,0,0,1,1,1],
					[0,0,1,1,1,0,0,1,0,0],
					[0,1,0,1,1,0,0,0,1,0],
					[0,1,1,1,0,1,1,1,0,1],
					[0,0,1,0,0,1,0,0,1,0]],
		startX : 4,
		startY : 9,
		startD : 0,
		goalX : 4,
		goalY : 0,
		maxLines : 10,
	}
	/*
move
turnright
if-clear
goto 0
turnleft
goto 2
	*/
]

function loadLevel() {
	var data = LEVELS[levelIndex];
	titleHere.innerHTML = "Level "+levelIndex+": "+data.title;
	instructionsHere.innerHTML = data.instructions;
	mazeWidth = data.width;
	mazeHeight = data.height;
	wallsRight = data.wallsRight;
	wallsDown = data.wallsDown;
	startX = data.startX;
	startY = data.startY;
	startD = data.startD;
	goalX = data.goalX;
	goalY = data.goalY;
	runDelay = Math.ceil(1500/(levelIndex+2))
	solution = data.solution;
	maxLines = data.maxLines || Infinity;
	//console.log(data, data.wallsDown, wallsDown)
	reset();
}

function win() {
	runTimeout = setTimeout(nextLevel, runDelay);
}

function nextLevel() {
	levelIndex++;
	loadLevel(levelIndex);
}

function lose() {
	runTimeout = setTimeout(reset, runDelay);
}

function reset() {
	currentX = startX;
	currentY = startY;
	currentD = startD;
	lastX = null;
	lastY = null;
	drawMaze();
}

function quickStartLastStage() {
	levelIndex = LEVELS.length - 1;
	loadLevel();
}
