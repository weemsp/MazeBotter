const LEVELS = [
	{
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
	},
	{
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
	},
	{
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
	},
	{
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
	},
]

function loadLevel() {
	var data = LEVELS[levelIndex];
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
