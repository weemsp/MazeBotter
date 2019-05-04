var mazeWidth = 1;
var mazeHeight = 1;
var wallsRight = [[]];
var wallsDown = [[]];
var goalX;
var goalY;
var startX;
var startY;
var startD;
const MAZE_GRID_SIZE = 64;
var currentX;
var currentY;
var currentD;
var lastX;
var lastY;
/*
0=up
1=right
2=down
3=left
*/
function isWall(x, y, d) {
	//return true;
	switch (d) {
		/*up*/   case 0: return y<=0 || wallsDown[y-1][x]; break;
		/*right*/case 1: return x>=mazeWidth || wallsRight[y][x]; break;
		/*down*/ case 2: return y>=mazeHeight || wallsDown[y][x]; break;
		/*left*/ case 3: return x<=0 || wallsRight[y][x-1]; break;
	}
}

function drawMaze() {
	mazeCanvas.width = mazeWidth*MAZE_GRID_SIZE;
	mazeCanvas.height = mazeHeight*MAZE_GRID_SIZE;
	mazeCtx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);
	for (var i = 0; i < mazeHeight; i++) {
		for (var j = 0; j < mazeWidth; j++) {
			if (wallsRight[i][j]) {
				mazeCtx.lineWidth=4;
				mazeCtx.strokeStyle = "#FFFFFF";
			} else {
				mazeCtx.lineWidth=2;
				mazeCtx.strokeStyle = "#FFFFFF40";
			}
			mazeCtx.beginPath();
			mazeCtx.moveTo((j+1)*MAZE_GRID_SIZE, i*MAZE_GRID_SIZE);
			mazeCtx.lineTo((j+1)*MAZE_GRID_SIZE, (i+1)*MAZE_GRID_SIZE);
			mazeCtx.stroke();
			if (i < wallsDown.length && wallsDown[i][j]) {
				console.log(i, j, i < wallsDown.length, wallsDown[i][j])
				mazeCtx.lineWidth=4;
				mazeCtx.strokeStyle = "#FFFFFF";
			} else {
				mazeCtx.lineWidth=2;
				mazeCtx.strokeStyle = "#FFFFFF40";
			}
			mazeCtx.beginPath();
			mazeCtx.moveTo(j*MAZE_GRID_SIZE, (i+1)*MAZE_GRID_SIZE);
			mazeCtx.lineTo((j+1)*MAZE_GRID_SIZE, (i+1)*MAZE_GRID_SIZE);
			mazeCtx.stroke();
		}
	}
	mazeCtx.fillStyle = "#FF00FF";
	mazeCtx.fillRect((goalX+1/4)*MAZE_GRID_SIZE, (goalY+1/4)*MAZE_GRID_SIZE, MAZE_GRID_SIZE/2, MAZE_GRID_SIZE/2);
	drawPlayer(startX, startY, startD);
}

function drawPlayer() {
	if (lastX != null && lastY != null && (currentX != lastX || currentY != lastY)) {
		mazeCtx.fillStyle = "#000000";
		mazeCtx.beginPath();
		mazeCtx.arc((lastX+1/2)*MAZE_GRID_SIZE, (lastY+1/2)*MAZE_GRID_SIZE, MAZE_GRID_SIZE*2/5, 0, 2 * Math.PI);
		mazeCtx.fill();
		mazeCtx.fillStyle = "#00FF00";
		mazeCtx.beginPath();
		mazeCtx.arc((lastX+1/2)*MAZE_GRID_SIZE, (lastY+1/2)*MAZE_GRID_SIZE, MAZE_GRID_SIZE/8, 0, 2 * Math.PI);
		mazeCtx.fill();
	}
	lastX = currentX;
	lastY = currentY;
	mazeCtx.fillStyle = "#00FF00";
	mazeCtx.beginPath();
	mazeCtx.arc((currentX+1/2)*MAZE_GRID_SIZE, (currentY+1/2)*MAZE_GRID_SIZE, MAZE_GRID_SIZE/3, 0, 2 * Math.PI);
	mazeCtx.fill();
	mazeCtx.fillStyle = "#000000";
	mazeCtx.beginPath();
	mazeCtx.arc((currentX+1/2+ddx(currentD)/6)*MAZE_GRID_SIZE, (currentY+1/2+ddy(currentD)/6)*MAZE_GRID_SIZE, MAZE_GRID_SIZE/8, 0, 2 * Math.PI);
	mazeCtx.fill();
	/*mazeCtx.fillStyle = "#000000";
	mazeCtx.beginPath();
	mazeCtx.arc((x+1/2)*MAZE_GRID_SIZE, (y+1/2)*MAZE_GRID_SIZE, MAZE_GRID_SIZE/3, 0, 2 * Math.PI);
	mazeCtx.fill();*/
}

function ddx(d) {
	switch (d) {
		case 1 : return 1; break;
		case 3 : return -1; break;
		default: return 0; break;
	}
}

function ddy(d) {
	switch (d) {
		case 0 : return -1; break;
		case 2 : return 1; break;
		default: return 0; break;
	}
}