//Date object
//Create a Date object and display the current date and time in the console.
let today=new Date();
console.log(today);
//Create a Date object and print only the current year.
let current_year=new Date();
console.log(current_year.getFullYear());
//Create a Date object and print the current month as a number from 1 to 12.
let month=new Date();
console.log(month.getMonth()+1);
//Write code to print today's date number, from 1 to 31.
let date=new Date();
console.log(date.getDate());
//Now write code to print the current hour using the getHours() method.
let hour=new Date();
console.log(hour.getHours());
//Write code to print the current minutes using getMinutes().
let min=new Date();
console.log(min.getMinutes());
  
/*  
   1. ARRAY TO STRING METHODS
  */

// 1. join()
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join(" - "));
 

// 2. toString()
console.log(fruits.toString());
 


/*  
   2. HIGHER-ORDER ARRAY METHODS
  */

// 3. sort()
let numbers = [30, 10, 20];
console.log(numbers.sort((a, b) => a - b));
// [10, 20, 30]

// 4. some()
console.log(numbers.some(num => num > 25));
// true

// 5. every()
console.log(numbers.every(num => num > 5));
 


/*  
   3. HOF ARRAY METHODS
  */

// 6. forEach()
fruits.forEach(fruit => console.log(fruit));
 
// 7. map()
console.log([1, 2, 3].map(num => num * 2));
 

// 8. filter()
console.log([10, 15, 20, 25].filter(num => num > 15));
 
// 9. find()
console.log([10, 20, 30, 40].find(num => num > 20));
 

// 10. reduce()
console.log([10, 20, 30].reduce((sum, num) => sum + num, 0));
 


/*  
   4. STRING METHODS
  */

let name = "Sudha";

// 11. charAt()
console.log(name.charAt(2));
 

// 12. charCodeAt()
console.log(name.charCodeAt(0));
 

// 13. length
console.log(name.length);
 

// 14. slice()
console.log("JavaScript".slice(0, 4));
 

// 15. toUpperCase()
console.log(name.toUpperCase());
 

// 16. toLowerCase()
console.log("SUDHA".toLowerCase());
 

// 17. trim()
console.log("  Sudha  ".trim());
 

// 18. includes()
console.log("Welcome to JavaScript".includes("JavaScript"));
 

// 19. split()
console.log("Apple,Banana,Mango".split(","));
 

// 20. indexOf()
console.log(name.indexOf("h"));
// 3

// 21. replace()
console.log("I like Java".replace("Java", "JavaScript"));
 

// 22. startsWith()
console.log("Hello Sudha".startsWith("Hello"));
 
// 23. endsWith()
console.log("photo.jpg".endsWith(".jpg"));
 


