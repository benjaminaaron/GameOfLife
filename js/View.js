
var View = function(cols, rows, viewContainer){
    this.cols = cols;
    this.rows = rows;
    this.cellPx = 20;

    var canvas = document.createElement('canvas');
    canvas.width = this.cols * this.cellPx;
    canvas.height = this.rows * this.cellPx;
    viewContainer.appendChild(canvas);
    this.ctx = canvas.getContext('2d');
    
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.drawGrid();
};

View.prototype = {

    drawGrid: function(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        //GRID
        this.ctx.strokeStyle = 'silver';
        this.ctx.lineWidth = 1;
        //vertical
        for(var c = this.cellPx; c < this.cols * this.cellPx; c += this.cellPx){
            this.ctx.beginPath();
            this.ctx.moveTo(c, 0);
            this.ctx.lineTo(c, this.height);
            this.ctx.stroke();
        }
        //horizontal
        for(var r = this.cellPx; r < this.rows * this.cellPx; r += this.cellPx){
            this.ctx.beginPath();
            this.ctx.moveTo(0, r);
            this.ctx.lineTo(this.width, r);
            this.ctx.stroke();
        }
        //FRAME
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = 'gray';
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.stroke();
    },

    update: function(cells){
        this.drawGrid();

        var d = 2;
        this.ctx.fillStyle = 'black';

        for(var c = 0; c < this.cols; c ++)
            for(var r = 0; r < this.rows; r ++)
                if(cells[c][r])
                    this.ctx.fillRect(c * this.cellPx + d, r * this.cellPx + d, this.cellPx - 2 * d, this.cellPx - 2 * d);
    }

};
