const Decorator = function(){
    this.stock = []
}

Decorator.prototype.addPaint = function(paint){
    this.stock.push(paint);
}

Decorator.prototype.checkTotalVolume = function(){
    let total = 0;
    for (var key of this.stock) {

        total += key.volume;
        return total;
    }
}

Decorator.prototype.haveEnoughPaint = function(room){
    totalPaint = this.checkTotalVolume()
    if (totalPaint == room.area){ 
        return true;
    } else {
        return false;
    }
}
Decorator.prototype.paintTheRoom = function(room) {
    let checkPaint = this.haveEnoughPaint(room)
    if(checkPaint = true) {
        room.painted = true;
        this.stock[0].volume -= room.area;
    }
}

module.exports = Decorator;