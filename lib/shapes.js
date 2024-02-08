class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    }

    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape} ${this.text}</svg>`
    }

    createText(logoText, textColor) {
        this.text = `<text x="150" y="125" font-size="60" fill="${textColor}">${logoText}</text>`
    }

    createShape(shape) {
        this.shape = shape.render();
    }
}

class Shape {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }
    render() {
        return `<polygon points="200,10 250,190 150,190" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"/>`
    }
}

module.exports = {
    SVG,
    Shape,
    Triangle,
    Circle,
    Square
}
