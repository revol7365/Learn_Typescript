 const apples: number = 5;
 let speed: string = 'fast';
 let hasName : boolean = true;


 let nothingMuch: null = null;
 let nothing: undefined = undefined;


 //built in objects
 let now: Date = new Date();

 //Array

 let colors: string[] = ['red','green','blue'];
 let myNumbees: number[] = [1,2,3];
 let truths: boolean[] = [true,true,false];

 //Classes
 class Car{

 }
 let car: Car = new Car();

 //Object literal
 let point: {x:number; y:number} = {
   x:10,
   y:10
 };

 //Function

 const logNumber: (i: number) => void = (i:number) => {
   console.log(i);
 }


 //when to use annotations
 //1) Function that return the 'any' type 

 const json = '{"x":  10,"y":20}';
 const coordinates = JSON.parse(json);
 console.log(coordinates); // {x;:10, y:20}


// 2) when we declear a variable on one line and initalizte it later

let words = ['red','green','blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}

// 3) Variable whost type cannot be inferred correctly 
// numbers에 0이상의 값이 있으면 그 값을 없으면 false를 넣으려고 한다.
let numbers = [-10,-1,-12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0 ){
    numberAboveZero = numbers[i];
  }
}
