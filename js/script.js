/* 
<div class="row">
    <div class="col"></div>
</div>
 */

// const containerFizz = document.getElementById('fizz-buzz');
const body = document.querySelector('body'); 
const divContainer= document.createElement('div');
divContainer.className= 'container';
const divRow = document.createElement('div');
divRow.className= 'row';
divContainer.append(divRow);
// const divCol = document.createElement('div');

console.log(divContainer);
body.prepend(divContainer);
// prepend container in body
//append row
//aggiungere append col nel ciclo al posto del console.log

let text, bg;


for (let i = 1; i <= 100; i++) {
    const divCol = document.createElement('div');
    if(i % 3=== 0 && i % 5===0){
        console.log('FizzBuzz');
        bg= ' bg-success';
        text= 'FizzBuzz';
    }else if ( i % 3 === 0){
        console.log('Fizz');
        bg= ' bg-primary';
        text= 'Fizz';
    }else if ( i % 5 === 0){
        console.log('Buzz');
        bg= ' bg-danger';
        text= 'Buzz';
    }else{
        console.log(i);
        bg= ' bg-secondary';
        text= i;
    }
    //append
    divCol.classList='col'+ bg;
    console.log(divCol);
    divCol.innerText= text
    divRow.append(divCol);


}
