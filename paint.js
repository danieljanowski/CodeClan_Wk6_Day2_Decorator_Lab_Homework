const Paint = function(volume){
    this.volume = volume;
}
Paint.prototype.isPaintEmpty = function(){
    if (this.volume == 0) {return true;}
    else {
        return false};
} 

Paint.prototype.emptyPaint = function(){
    this.volume = 0;
}

module.exports = Paint;