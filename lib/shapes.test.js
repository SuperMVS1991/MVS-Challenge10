const { Circle, Square, Triangle } = require('./shapes');

test('We need to make sure the triangle is blue and has text', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    triangle.setText("ABC");
    triangle.setTextColor("red");
    expect(triangle.render()).toEqual('<svg width="300" height="200"><polygon points="150,18 244,182 56,182" fill="blue" /><text x="150" y="100" fill="red" text-anchor="middle">ABC</text></svg>');
});

test('We need to make sure the square is red and has text', () => {
    const square = new Square();
    square.setColor("red");
    square.setText("ABC");
    square.setTextColor("black");
    expect(square.render()).toEqual('<svg width="300" height="200"><rect x="56" y="56" width="150" height="150" fill="red" /><text x="150" y="100" fill="black" text-anchor="middle">ABC</text></svg>');
});

test('We need to make sure the circle is green and has text', () => {
    const circle = new Circle();
    circle.setText("ABC");
    circle.setTextColor("black");
    circle.setColor("green");
    expect(circle.render()).toEqual('<svg width="300" height="200"><circle cx="150" cy="150" r="100" fill="green" /><text x="150" y="100" fill="black" text-anchor="middle">ABC</text></svg>');
});
