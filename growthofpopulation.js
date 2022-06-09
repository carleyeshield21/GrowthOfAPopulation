// This is the link to this JavaScrip Coding Challenge
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    year = 0
    yearlypop = p0
    while(yearlypop <= p){
        yearlypop = Math.round(yearlypop + ((percent/100)*yearlypop) + aug)
        // console.log(yearlypop, year)
        year++
    }
    console.log(`The number of years it takes to surpass the current population of ${p0} is ${year} years with a population of ${yearlypop}`)
    
}
nbYear(1500, 5, 100, 5000)
console.log('=====')
nbYear(1000, 2, 50, 1200)
console.log('=====')
nbYear(1500000, 2.5, 10000, 2000000)

// We can output first manually on every iteration so we can see clearly how we can set up our conditional statements
    // yearlypop = (p0 + ((percent/100)*p0)) + aug
    // console.log(yearlypop)
    // yearlypop = yearlypop + ((percent/100)*yearlypop) + aug
    // console.log(yearlypop)
    // yearlypop = yearlypop + ((percent/100)*yearlypop) + aug
    // console.log(yearlypop)