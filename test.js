// import the function sum from the app.js file
const { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar should be 134.2 yen", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(4.9)

    // if 1 dollar are 134,2 yen, then 4.9 dollars should be (4.9 * 134.2)
    const expected = 4.9 * 134.2; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(4.9)).toBe(657.58); //1 dollar are 134.2 yen, then 4.9 dollars should be = (4.9 * 134.2)
})

test("One yen should be 0.006 pounds", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(1922)

    // 1 yen is 0.006 pounds, then 1922 yen should be = (1922 * 0.006)
    const expected = 1922 * 0.006; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1922)).toBe(11.532); //1 yen is 0.006 pounds, then 1922 yen should be = (1922 * 0.006)
})