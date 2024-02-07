class Shape {
    constructor()
}

class Triangle {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.shapeColor = shapeColor,
        this.createShape() = function () {
            console.log(`I'm printing ${text} in ${textColor} on a ${shapeColor} ${shape}!`);
        };
    }


}

class Circle {
    constructor()
}

class Square {
    constructor()
}
