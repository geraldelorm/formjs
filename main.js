// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';

// ul.children[1].innerText = 'Gerald';
// ul.lastElementChild.innerHTML = '<h1> Hello world</h1>';



// const btn = document.querySelector('.btn');
// btn.style.background = 'red';



// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', function (e) { // (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';

//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello world</h1>';
// })


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


// myForm.addEventListener('submit', (e)=> {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value === '' ){
//         msg.classList.add('error')
//         msg.innerHTML = 'Please enter all fields'

//         setTimeout(() => msg.remove(), 3000);
//     }else{
//         console.log('done')
//     }
// }
// );


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' ){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clearing fields 
        nameInput.value = '';
        emailInput.value = '';
    }
}










































// // const name = 'Gerald';
// // const age = 30;

// // //concatenation
// // console.log ('My name is ' + name +' and I am ' +age);

// // const intro = `Intro: My name is ${name} and I am ${age}`;

// // console.log (intro);

// // const sl = 'hello, world, every';

// // console.log(sl.split(', ')) // toUpperCase etc

// const numbers = ['apple', true, 1, 5, false];
// numbers.push('hello')
// numbers.unshift('hello')
// // numbers.pop()
// // numbers[(numbers.length)] = 'okay'

// console.log(numbers)

// console.log(Array.isArray('numbers'))

// console.log(numbers.indexOf(5))

// const data = {
//     firstName: 'Gerald',
//     lastName: 'Gbagbe',
//     age: 21,
//     hobbies: ['coding', 'eating', 'basketBall'],
//     address: {
//         home: 'Adenta',
//         school: 'ATU'
//     }
// }

// console.log(data.firstName, data.address.school, data.hobbies[1])

// const {firstName, age, address: { home }} = data;
// console.log(age);
// console.log(home);

// data.email ='geraldelorm14@gmail.com';

// console.log(data.email)

// console.log(data)

// const todos = [
//     {
//         id: 1,
//         text: 'Go home',
//         isDone: true
//     },
//     {
//         id: 2,
//         text: 'Call Mom',
//         isDone: false
//     },
//     {
//         id: 3,
//         text: 'join Field service',
//         isDone: true
//     }
// ];

// // console.log(todos[1].isDone)

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON)

// for loop
// for(let i = 0; i <= 10; i++){
//     console.log(`For loop number ${i}`)
// }

// // while loop 

// let i = 0;

// while(i <= 10 ){
//     console.log(`While loop number ${i}`);
//     i++;
// }

// looping throught an array
//  for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text)
//  }

// best way

// for(todo of todos){
//     console.log(todo.text)
// }

// higher level
// todos.forEach(function(todo){
//     console.log(todo.id)
// });

// const todoId = todos.map(function(todo){
//     return todo.id;
// });

// console.log(todoId)

// const todoIsDone = todos.filter(function(todo){
//     return todo.isDone === true ;
// }).map(function(todo){
//     return todo.text;
// })
// ;

// console.log(todoIsDone)


// const a = 20;
// const b = 30;

// if(a === 10  ||  b === 20){
//     console.log('a is = 10 or b = 30 ');
// }else if(a === 20 && b === 30){
//     console.log('a is = 20 and b = 30')
// }else{
//     console.log('a is != 10')
// }

// // ternary operator
// const x = 2;

// const color = x > 3 ? 'blue' : 'red'; // ? = then : else

// console.log(color)

// // switch statements

// const x = 10 ;
// const color = x > 10 ? 'red' : 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red')
//         break;
//     case 'blue': 
//         console.log('color is blue')
//         break;
//     default:
//         console.log('color i unknown')
// }

// function addNums(num1, num2) {
//     // console.log(num1 + num2);
//     return num1 + num2;
// }
// console.log(addNums(2, 5));

// const addNums = (num1, num2) => num1 + num2;
//     //return num1 + num2;
// console.log(addNums(5, 5));

// const addNums = num1 => num1 + 20;
// console.log(addNums(50));


// object oriented programming 
// constructor 
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);

// }
// Person.prototype.getFullYear =  function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName =  function() {
//     return `${this.firstName} ${this.lastName}`;
// }


// class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);    
//     }

//     getFullYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;

//     }
// }

// // Instanciate 
// const person1 = new Person('John', 'Mack', '4-3-2000');
// const person2 = new Person('Gerald', 'Nick', '5-30-2010 10:10:55');

// console.log(person1.getFullYear());
// // console.log(person1.getFullName());
// console.log(person1);
// // console.log(person2.dob.getFullYear());