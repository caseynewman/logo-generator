class Shape {
    constructor(logoText, textColor, shape, shapeColor) {
        this.text = logoText;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }


}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
        render() {
            return `<polygon points="200,10 250,190 150,190" fill="${shapeColor}"/>`
        }
    }

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
        render() {
            return `<circle cx="25" cy="75" r="20" fill="${shapeColor}"/>`
        }
    }

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
        render() {
            return `<rect x="50" y="20" width="150" height="150" fill="${shapeColor}"/>`
        }
    }

module.exports = Shape, Triangle, Circle, Square;
