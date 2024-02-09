class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    }

    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape} ${this.text}</svg>`
    }

    createText(logoText, textColor) {
        this.text = `<text x="43%" y="50%" font-size="77" font-family="garamond" letter-spacing="1px" fill="${textColor}">${logoText}</text>`
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
        return `<polygon points="185 5, 270 135, 100 135" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }
    render() {
        return `<circle cx="185" cy="45%" r="85" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }
    render() {
        return `<rect x="110" y="10" width="150" height="150" fill="${this.shapeColor}"/>`
    }
}

module.exports = {
    SVG,
    Shape,
    Triangle,
    Circle,
    Square
}
