 //!----------Basic----------//

//? EX1.1 - Yes or No //

const YesNo = (Boolean) => {
    const string = Boolean === true? 'Yes' : 'No'
    return Boolean;
    }
    return console.log(YesNo("Yes"));


//!----------Simple Math----------//

//? EX2.1 - Sum of lowest numbers //

const arr = [19, 5, 42, 2, 77, 2356]
function sumOf2Lowest(num) {  
    let lowest = Math.min(num[0], num[1]), 
        secondLowest = Math.max(num[0], num[1])
    for(let i = 0; i < num.length; i++){
      if(num[i] < lowest){
        secondLowest = lowest
        lowest = num[i]
      }else if(num[i] < secondLowest)
        secondLowest = num[i]
      else continue
    }
    return lowest + secondLowest
  }
  console.log(sumOf2Lowest(arr));
 
 
  //? EX2.2 - One and Zero - Binary //

  const arr = [1, 0, 1, 0, 1, 0];
  function toDecimal(arr) {
    let count = 0;
    for (num of arr) {
      count = 2 * count + num;
    }
    return count;
  }
  console.log(toDecimal(arr));
 

   //? EX2.3 - Find the Next Perfect Square //

  const number = 114;
  function nxtSqr(sq) {  
 
    if (Number.isInteger(Math.sqrt(sq))){ 
      return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1); 
    }
    else 
  
      return -1; 
  
  } console.log(nxtSqr(number));
 

   //? EX2.4 - Unique //

  const arr = [1, 1, 1, 5, 1, 1];

  function findUnique(arr) {
    let first = arr.shift();
    let dif = arr.find((dif) => dif != first);
    return dif ? dif : first;
  }
  console.log(findUnique(arr));
 
   //? EX2.5 - Summation //

  function Summation(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      count += i;
    }
    return count;
  }
   console.log(Summation(8));
 

    //? EX2.6 - Years & Centuries // 

   function yearsAndCent(year) {
    var x = Math.ceil(year/100);
    return x; 
}
console.log(yearsAndCent(1705));

 
 //?EX2.7 - Basic Math //

function bMath(operation, value1, value2) {
    switch (operation) {
        case '*':
        return value1 * value2;
    
        case '+':
        return value1 + value2;
      
        case '/':
        return value1 / value2; 
      
        case '-':
        return value1 - value2;
    }
  } console.log(bMath('/', 49, 7));
 

//!----------Math in Story----------//

 //? EX3.1 - Growth Of Population //

function nb_year(p0, percent, aug,p){
    let count = 0 ;
    let pop = p0 ;
    while(pop<=p){
       pop +=((pop * percent/100)+aug);
       count++;
    };
    return `In Order to get it's population to ${p} or greater, it will need at least ${count} entire years`;
 };
 console.log(nb_year(1000, 2, 50, 1200));
 

 //? EX3.2 - People on the Bus //

  const arr = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]; 
  function busStops(num){
    let count = 0;
    
    for(let i = 0; i< num.length; i++){
        let current = num[i];
        let getOn = current[0];
        let getOff = current[1];

        count += getOn;
        count -= getOff;
    }
    return count;
 }
 console.log(busStops(arr));
 
 //!----------Advanced Math----------//

 //?EX4.1 - Fibonacci //
 
 function Fibonacci(n){
    if(n<3) return 1;

    let prev = 1;
    let curr = 1;
    for(let i=2; i<n; i++){
        const nxt = prev + curr;
        curr = nxt;
    }
    return curr;
 } 

 //Fibonacci with Recursion //
  function Fibonacci(n){
    if (n < 3) return 1;
    return Fibonacci(n-1) + Fibonacci(n-2);
 }console.log(Fibonacci(6));

 

 //? EX4.2 - Tribonacci //

 function tribonacci(n, memo={}) {
    if(n in memo) return memo[n];

    if (n ===0 || (n === 1)) return 0;

    if(n === 2) return 1;

    memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo);
    return memo[n];
 }console.log(tribonacci(8));
 

 //!----------Basic Iteration Logic----------//

 //? EX5.1 - Trimming String //


function trimming (string){
    return string.slice(1, -1);
    
} 
    console.log(trimming ('/hello/')); 
 

 //? EX5.2 - String Repeat //

function repeatStr (num, string){
    return string.repeat(num)

} console.log(repeatStr(3, 'YES! ')); 


//? EX5.3 - To Camel Case //

