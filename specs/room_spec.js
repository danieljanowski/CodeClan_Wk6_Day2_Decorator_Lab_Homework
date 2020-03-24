const assert = require('assert');
const Room = require('../room');

describe('Room', function(){

    let room;

    beforeEach(function(){
        room = new Room(20);
    })

    it('should have area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 20);
    })

    it('should start not painted', function() {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })

    it('should be able to painted', function() {
        room.paintTheRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    })

})