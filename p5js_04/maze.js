class Maze {

     /**
     * The constructor to instantiate new maze
     * @param {*} x 
     * @param {*} y 
     * @param {*} cellsX 
     * @param {*} cellsY 
     * @param {*} cellSize 
     */

      constructor(x, y, cellsX, cellsY, cellSize) {
        // Store corner and count as objects, easier to read and manage.
        this.corner = {
            x: x,
            y: y
        };
        this.count = {
            x: cellsX,
            y: cellsY
        }
        this.cellSize = cellSize;

        //Array with all the cell objects in the array
        this.cells = [];

        //Generate the cells with all the properties
        this.generateCells();
    }


    //Defining the function to generate cells
    generateCells(){
        let id = 0;

        // Use a double nested for loop to create a grid of Cells,
        for (let row = 0; row < this.count.y; row++) {
            let y = this.corner.y + this.cellSize * row;

            for (let col = 0; col < this.count.x; col++) {
                let x = this.corner.x + this.cellSize * col;

                // Create cell in computed coordinates and store it.
                let cell = new Cell(id, x, y, this.cellSize);
                this.cells.push(cell);
                
                id++;
            }
        }

            //Neighbouring cell calculation
            this.linkNeighbor();

    }

    render(){
    this.renderWalls();
    this.renderId();
    }

     /**
     * Iterates over all the cells and renders available walls
     */
      renderWalls() {
        push();
        stroke(0);
        strokeWeight(1);
        for (let cell of this.cells) {
            cell.renderWalls();
        }
        pop();
    }

         /**
     * Draws the ids of the cells
     */
    renderIds() {
        push();
        fill(127);
        for (let cell of this.cells) {
            cell.renderId();
        }
        pop();
    }

}