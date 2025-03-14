const fizzBuzz = (number) => {
    const isDivisableBy3 = (number % 3) === 0
    const isDivisableBy5 = (number % 5) === 0 
    
    if (isDivisableBy3 && isDivisableBy5) {
        return 'fizzBuzz'
    }

    if (isDivisableBy3) {
        return 'fizz'
    }

    if (isDivisableBy5) {
        return 'buzz'
    }

    return number
}





module.exports = fizzBuzz;



