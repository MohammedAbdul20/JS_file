//for loop fizzbuzz prob
for(let i = 1; i < 21; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} is FizzBuzz i.e no is divisible by 3 and 5`);
    }
    else if (i % 3 == 0){
        console.log(`${i} is Fizz`);
    }
    else if(i % 5 == 0){
        console.log(`${i} is Buzz`);
    }
    else{
        console.log(i);
    }
}