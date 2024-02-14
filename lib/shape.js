class shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    getShape() {
        return this.shape;
    }
    getShapeColor() {
        return this.shapeColor;
    }
    getText() {
        // if (this.text.length < 3) {
        //     throw new Error('`text` must contain at least 3 characters.');
        // }
        return this.text;
    }
    getTextColor() {
        return this.textColor;
    }
}

module.exports = shape;
