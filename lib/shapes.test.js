const { Circle, Square, Triangle,  } = require('./shapes');

test('We need to make sure the triangle is blue and has text', () => {
    const triangleInstenace = new Triangle('blue', 'ABC', 'red');
    expect(triangleInstenace.shapeColor).toEqual('blue');
    expect(triangleInstenace.text).toEqual('ABC');
    expect(triangleInstenace.textColor).toEqual('red');
    expect(triangleInstenace.render()).toEqual('<svg width="300" height="200"><polygon points="150,18 244,182 56,182" fill="blue" /><text x="150" y="100" fill="red" text-anchor="middle">ABC</text></svg>');
});

test('We need to make sure the square is red and has text', () => {
    const squareInstenace = new Square('red', 'ABC', 'black');
    expect(squareInstenace.shapeColor).toEqual('red');
    expect(squareInstenace.text).toEqual('ABC');
    expect(squareInstenace.textColor).toEqual('black');
    expect(squareInstenace.render()).toEqual('<svg width="300" height="200"><rect x="56" y="56" width="150" height="150" fill="red" /><text x="150" y="100" fill="black" text-anchor="middle">ABC</text></svg>');
});

test('We need to make sure the circle is green and has text', () => {
    const circleInstenace = new Circle('green', 'ABC', 'black');
    expect(circleInstenace.shapeColor).toEqual('green');
    expect(circleInstenace.text).toEqual('ABC');
    expect(circleInstenace.textColor).toEqual('black');
    expect(circleInstenace.render()).toEqual('<svg width="300" height="200"><circle cx="150" cy="150" r="100" fill="green" /><text x="150" y="100" fill="black" text-anchor="middle">ABC</text></svg>');
});
