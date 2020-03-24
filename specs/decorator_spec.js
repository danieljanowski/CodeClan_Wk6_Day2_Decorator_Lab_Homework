const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../room');

describe('decorator', function(){

    let decorator;
    let paint1;
    let room1;



    beforeEach(function() {
        decorator = new Decorator();
        paint1 = new Paint(4);
        room1 = new Room(4);
        room2 = new Room(6);
    })

describe('decorator', function(){
    it('check for empty stock at start', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })
    it('check to add paint to stock', function(){
        decorator.addPaint(paint1)
        const actual = decorator.stock.length;
        assert.deepStrictEqual(actual, 1);
    })
    it('check total stock', function(){
        decorator.addPaint(paint1)
        const actual = decorator.checkTotalVolume();
        assert.deepStrictEqual(actual, 4);
    })

    it('check if we have enough paint', function(){
        decorator.addPaint(paint1)
        const actual = decorator.haveEnoughPaint(room1);
        assert.deepStrictEqual(actual, true);
    })
    it('check if we dont have enough paint', function(){
        decorator.addPaint(paint1)
        const actual = decorator.haveEnoughPaint(room2);
        assert.deepStrictEqual(actual, false);
    })
    it('check if we have painted the room', function(){
        decorator.addPaint(paint1);
        decorator.paintTheRoom(room1);
        const actual = room1.painted;
        assert.deepStrictEqual(actual, true);
    })
    it('check if we cant paint the room', function(){
        decorator.addPaint(paint1);
        decorator.paintTheRoom(room2);
        const actual = room1.painted;
        assert.deepStrictEqual(actual, false);
    })
    it('should be able to decrease amount of paint when painting the room', function(){
        decorator.addPaint(paint1);
        decorator.paintTheRoom(room1);
        const actual = decorator.checkTotalVolume();
        assert.deepStrictEqual(actual, 0);
    })
})
})