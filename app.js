/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/
randomArray1 = [2,2,2,2,2,4]

function hasOddNumber(arr) {
    return arr.some(function(value){ //I keep forgetting to return this line of code
        return value % 2 !== 0;
    })
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/
randomNumber = 549389509898;

function hasAZero(num) {
    return num.toString().split('').some(function(number){ //Have to turn number into a string and make make string individual characters for the advance array method to work
        return number === '0';
    })
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

const anyOddNumbers = [1,3,5,7,9];

function hasOnlyOddNumbers(arr) {
    return arr.every(function(numbers){
        return numbers % 2 !== 0;
    })
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

const hasDuplicates = [1,2,3,1] //haaazaaa! it came back false. Sweet

function hasNoDuplicates(arr) {
    return arr.every(function(numbers){
        return arr.indexOf(numbers) === arr.lastIndexOf(numbers); //This takes the index and using .lastIndesOf searches this sting and returns the index of the last occurrence of the specified substring
    })                                                          //meaning it takes the index number and sees if it is present anywhere else. Neat!
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

const arrExample = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

function hasCertainKey(arr, key) {   //I can't seem to get this to accept the second value in the argument...
    return arr.every(function(value){ //BECAUSE I WASN'T PASSING IT AS A STRING DUH!!!
        return key in value //in operator checks if a value is in a collection of values
    })
}


/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(value){ //forgot to return this line again. I need to understand why I need it so I don't forget it
        return value[key] === searchValue; //also forgot to reload browser and couldn't figure out why it wouldn't work lol
    })
}

