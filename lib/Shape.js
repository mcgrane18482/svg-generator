// create a constructor that takes the answer criteria from inquirer prompt and returns an svg XML 
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    

}

class Circle extends Shape {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
   
}

class Triangle extends Shape {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 180,180, 20,180" fill="${this.shapeColor}" /><text x="100" y="140" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Rectangle extends Shape {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x ="50" y="50" width = "100" height = "100" fill="${this.shapeColor}" /><text x="100" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
module.exports = {Circle, Triangle, Rectangle}