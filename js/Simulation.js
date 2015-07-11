var Simulation = function(cols, rows, seedObj, view){
    this.cols = cols;
    this.rows = rows;
    this.view = view;

    this.grid = new Grid(cols, rows);

    //SEED

    var seed = seedObj.seed;
    var seedrows = seed.length;
    var seedcols = seed[0].length;

    var startcol = Math.round(cols / 2 - seedcols / 2);
    var startrow = Math.round(rows / 2 - seedrows / 2);

    for(var r in seed){
        var onerow = seed[r];
        for(var c in onerow){
            var col = startcol + parseInt(c);
            var row = startrow + parseInt(r);
            if(onerow[c] == 1)
                this.grid.cells[col][row] = true;
        }
    }
    //console.log(this.grid + '');

    document.getElementById('seedname').innerHTML = seedObj.name;
    this.updateView();
};

Simulation.prototype = {

    update: function(){
        var newGrid = new Grid(this.cols, this.rows);

        for(var c = 0; c < cols; c ++)
            for(var r = 0; r < rows; r ++)
                newGrid.cells[c][r] = this.grid.deadOrAlive(c, r);

        this.grid = newGrid;
        this.updateView();
    },

    updateView: function(){
        this.view.update(this.grid.cells);
    }

};
