

const doesFit = (squarePerimeter, circleDiameter) => {
    squareParalel = squarePerimeter / 4

    //By pitagore theorema we can find the square diagonal c2 = a2 + b2 which in this case c2 = a2 + a2
    const SquareDiameterInPow = Math.pow(squareParalel,2) * 2
    const SquareDiameter = Math.sqrt(SquareDiameterInPow)
    return circleDiameter <= SquareDiameter
}
const squarePerimeter = 300
const circleDiameter = 100
const doesFitResult = doesFit(squarePerimeter,circleDiameter)
console.log("Circle with diameter "+circleDiameter +" can fit in square with perimeter "+squarePerimeter +": ",doesFitResult);


