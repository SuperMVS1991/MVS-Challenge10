const Shape = require('./shape');
//class Shape {
  //  //constructor(Shape, shapeColor, text, textColor) {
        //this.Shape = Shape;
    //    this.shapeColor = shapeColor;
       // this.text = text;
       // this.textColor = textColor;
    //}
//}
// Function to render a shape based on its type
function renderShape(shape) { 
//console.log(shape.Shape, "checking data access");
    if (shape.Shape === 'triangle') {
        console.log('Triangle drawn');
        var TriangleInstance = new Triangle(shape.shapeColor, shape.text, shape.textColor);
        return  TriangleInstance.render();

    } else if (shape.Shape === 'square') {
        console.log('Square drawn');
        var SquareInstance = new Square(shape.shapeColor, shape.text, shape.textColor);
        console.log(shape.shapeColor, shape.text, shape.textColor, "checking props")
        return SquareInstance.render();

    } else if (shape.Shape === 'circle') {
        console.log('Circle drawn'); 
        var CircleInstance = new Circle(shape.shapeColor, shape.text, shape.textColor); 
        console.log(shape.shapeColor, shape.text, shape.textColor, "checking props")
         return CircleInstance.render(); 
        
    } else {
        console.log('Unknown shape');
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
       super('triangle', shapeColor, text, textColor);
    }

    render() {
        return `<svg width="300" height="200"><polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" /><text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
    }
}

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super('square', shapeColor, text, textColor);
    }                  
    render() {
        return `<svg width="300" height="200"><rect x="56" y="56" width="150" height="150" fill="${this.shapeColor}" /><text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
      super('circle', shapeColor, text, textColor);
    }
     
    render() {
        return `<svg width="300" height="200"><circle cx="150" cy="150" r="100" fill="${this.shapeColor}" /><text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
    } 

  //  console.log(this.shape.ShapeColor, this.shape.Text, this.shape.TextColor, "checking props")
}

// Example usage:


module.exports = { Triangle, Square, Circle, renderShape };