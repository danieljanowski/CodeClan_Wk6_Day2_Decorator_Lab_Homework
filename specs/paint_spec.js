const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function(){
    
    let paint;

    beforeEach(function(){
        paint = new Paint(4);
    })

    it('should have number of liters', function() {
        const actual = paint.volume;
        assert.strictEqual(actual, 4);
    })

    it('should be able to check if it is empty', function(){
        const actual = paint.isPaintEmpty();
        assert.strictEqual(actual, false);
    })

    it('should be able to empty itself', function(){
        paint.emptyPaint();
        const actual = paint.isPaintEmpty();
        assert.strictEqual(actual, true);
    })
    

})