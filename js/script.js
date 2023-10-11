/* 
<div class="row">
    <div class="col"></div>
</div>
 */

// const containerFizz = document.getElementById('fizz-buzz');
const divContainer= document.createElement('div');
divContainer.className= 'container';
console.log(divContainer);
// prepend container in body
//append row
//aggiungere append col nel ciclo al posto del console.log




for (let i = 1; i <= 100; i++) {
    if(i % 3=== 0 && i % 5===0){
        console.log('FizzBuzz')
    }else if ( i % 3 === 0){
        console.log('Fizz');
    }else if ( i % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
    
}