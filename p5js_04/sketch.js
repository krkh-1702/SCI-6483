
//compiling everything together here

let maze;

function setup(){

    createCanvas(windowWidth, windowHeight);

    // Calling a maze
    maze = new Maze(50, 50, 15, 10, 50);   

    //Calculating cell connections
    maze.connectPrim();

    // Calculate different solutions to the maze
    // maze.solveStart(0);
    // maze.solveStartEnd(0, 14);
    maze.solveLongest();

}

function draw() {
    background(255);

    // Render the current state of the maze.
    maze.render();
}