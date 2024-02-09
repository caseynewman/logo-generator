const {SVG, Triangle, Circle, Square} = require('../lib/shapes');

// this is the testing suite
describe('Shapes', () => {
  describe('render Triangle', () => {
    it('should return a triangle', () => {
        const shape = new Triangle('cnn', 'pink', 'blue');
        expect(shape.render()).toEqual('<polygon points="185 5, 270 135, 100 135" fill="blue"/>');
    })
  })

  describe('render Circle', () => {
    it('should return a circle', () => {
        const shape = new Circle('cnn', 'pink', 'orange');
        expect(shape.render()).toEqual('<circle cx="185" cy="45%" r="85" fill="orange"/>');
    })
  })

  describe('render Square', () => {
    it('should return a square', () => {
        const shape = new Square('cnn', 'pink', 'green');
        expect(shape.render()).toEqual('<rect x="110" y="10" width="150" height="150" fill="green"/>');
    })
  })
})