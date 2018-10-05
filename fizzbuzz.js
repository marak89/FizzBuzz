
console.log('Wellcome to FizzBuzz!');


for(let i=1;i<=100;i++){
    
    modulo3 = i%3;
    modulo5 = i%5;
    if(modulo3===0 && modulo5===0){
        console.log('FizzBuzz');
    } else if(modulo3===0){
        console.log('Fizz');
    } else if(modulo5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

