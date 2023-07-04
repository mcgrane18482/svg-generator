const {Circle} = require('./Shape')


describe('Test The Circle Class', ()=> {
    test('does this return the circle xml for the svg', ()=> {
        const shape =  new Circle('a', 'b', 'green')
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="b">a</text></svg>')
    })
})