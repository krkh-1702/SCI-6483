class Cell{

 /**
     * The constructor to instantiate new cell
     * @param {*} id 
     * @param {*} x 
     * @param {*} y 
     * @param {*} s 
     */

 //Constructing the base
    constructor (id, x, y,s){
        this.id = id;
        this.s = s;
        this.corner = {
            x: x,
            y:y
        }

        this.center = {
            x: x + 0.5 * s,
            y: y + 0.5 * s
    };

    // [0] = top, [1] = right, [2] = bottom, [3] = left
    this.neighbors = [];

    //Array that defines if the cells are connected
    this.connected = [false, false, false, false];
}


//Rendering everything to the canvas
renderWalls(){
    for (let i = 0; i < 4; i++) {
        if (this.connected[i] == false) {
            switch(i) {
                // top
                case 0:
                    line(this.corner.x, this.corner.y, this.corner.x + this.size, this.corner.y);
                    break;
                
                // right
                case 1:
                    line(this.corner.x + this.size, this.corner.y, this.corner.x + this.size, this.corner.y + this.size);
                    break;
                
                // bottom
                case 2:
                    line(this.corner.x + this.size, this.corner.y + this.size, this.corner.x, this.corner.y + this.size);
                    break;
                
                // left
                case 3:
                    line(this.corner.x, this.corner.y + this.size, this.corner.x, this.corner.y);
                    break;

            }

        }
    }
}

//Draw the id of the cell

renderId(){
    text(this.id, this.center.x, this.center.y);
}
}