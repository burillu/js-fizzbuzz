/* 
<div class="row">
    <div class="col"></div>
</div>
 */

// const containerFizz = document.getElementById('fizz-buzz');
const body = document.querySelector('body'); 
const divContainer= document.createElement('div');
divContainer.className= 'container mt-5';
const divRow = document.createElement('div');
divRow.className= 'row row-cols-10';
divContainer.append(divRow);
// const divCol = document.createElement('div');

// prepend container in body
//append row
//aggiungere append col nel ciclo al posto del console.log

let text, bg;


for (let i = 1; i <= 100; i++) {
    const divCol = document.createElement('div');
    const divCont = document.createElement('div');
    if(i % 3=== 0 && i % 5===0){
        bg= ' bg-success';
        text= 'FizzBuzz';
    }else if ( i % 3 === 0){
        bg= ' bg-primary';
        text= 'Fizz';
    }else if ( i % 5 === 0){
        bg= ' bg-danger';
        text= 'Buzz';
    }else{
        bg= ' bg-secondary';
        text= i;
    }
    divCol.classList='col'
    divCont.classList = 'box' + bg;
    divCont.innerText= text
    divCol.append(divCont);

    
    //append
    divRow.append(divCol);


}
body.prepend(divContainer);