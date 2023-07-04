const {Circle, Triangle, Rectangle} = require('./Shape')

describe('Test The Circle Class', ()=> {
    test('does this return the xml for a circle svg with the given criteria', ()=> {
        const shape =  new Circle('a', 'b', 'green')
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="b">a</text></svg>')
    })
})

describe('Test the Triangle Class', ()=> {
    test('does this return the xml for a triangle svg with the given criteria', ()=> {
        const triangle = new Triangle('SVG', 'orange', 'black')
        expect(triangle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 180,180, 20,180" fill="black" /><text x="100" y="140" font-size="40" text-anchor="middle" fill="orange">SVG</text></svg>')
    })
})

describe('Test the Rectangle Class', ()=> {
    test('does this return the xml for a rectangle svg with the given criteria', ()=> {
        const rectangle = new Rectangle('RTB', 'white', 'blue')
        expect(rectangle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x ="50" y="50" width = "100" height = "100" fill="blue" /><text x="100" y="110" font-size="50" text-anchor="middle" fill="white">RTB</text></svg>')
    })
})