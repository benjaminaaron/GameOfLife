var Grid = function(cols, rows){
    this.cols = cols;
    this.rows = rows;
    this.cells = [];
    for(var c = 0; c < cols; c ++){
        var col = [];
        for(var r = 0; r < rows; r ++)
            col.push(false); // false means dead, true means alive
        this.cells.push(col);
    }
};

Grid.prototype = {

    deadOrAlive: function(col, row){
        var aliveNeighbours = this.countAliveNeighbours(col, row);

        // apply rules
        var currentlyAlive = this.cells[col][row];

        if(aliveNeighbours < 2)
            return false;
        if(aliveNeighbours > 3)
            return false;
        if(aliveNeighbours == 3)
            return true;

        return currentlyAlive;
    },

    countAliveNeighbours: function(col, row) {
		var aliveNeighbours = 0;
		for(var i in NeighbourDirections){
            var dir = NeighbourDirections[i];
            var ncol = col + dir[0];
			var nrow = row + dir[1];
			if(ncol >= 0 && ncol < this.cols && nrow >= 0 && nrow < this.rows)
                if(this.cells[ncol][nrow])
                    aliveNeighbours ++;
		}
		return aliveNeighbours;
	},

/*
    toString: function(){
        var str = '';
        for(var r = 0; r < this.rows; r ++){
            for(var c = 0; c < this.cols; c ++)
                str += '[' + (this.cells[c][r] ? 'T' : 'F') + ']';
            str += '\n';
        }
        return str;
    }
*/
};

var NeighbourDirections = [
    [  0 , -1 ], // north
    [  1 , -1 ], // northeast
    [  1 ,  0 ], // east
    [  1 ,  1 ], // southeast
    [  0 ,  1 ], // south
    [ -1 ,  1 ], // southwest
    [ -1 ,  0 ], // west
    [ -1 , -1 ] // northwest
];
