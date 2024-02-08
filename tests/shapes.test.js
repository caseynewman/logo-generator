const {SVG, Triangle, Circle, Square} = require('../lib/shapes');

// this is the testing suite
describe('Shapes', () => {
  describe('render Triangle', () => {
    it('should return a triangle', () => {
        const shape = new Triangle('cnn', 'pink', 'blue');
        expect(shape.render()).toEqual('<polygon points="200,10 250,190 150,190" fill="blue"/>');
    })
  })
})