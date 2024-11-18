// let BtnClicked=(a,b)=>{
//     console.log("function called");
// }
// BtnClicked(20,30)

// template litteral
// name = "Zeeshan";
// age = 10;
// console.log(`My name is ${name} and My age is ${age}`);

// if (age < 18) {
//   console.log("age is less than 18");
// } else {
//   console.log("age is greater thn 18");
// }

// age<18?console.log("age is less than 18"):
// age>18?console.log("age is greater than 18"):
// console.log("age is equal to 18")

// console.log(age<18?"age is less than 18":"age is greater than 18");


// let backendData=["Zeeshan","Data",20,30,40,50]


// console.log(...backendData)


// let Student = (name,data, ...marks) => {
//   console.log(marks);
// };


// Student(...backendData);




// call function==> ...(spread operator)
// argument get-> function==> ...(rest operator)


// array destructuring
// let arr=[10,20,30,40]

// let [var1, var2, var3, var4]=arr

// console.log(var3);



// object destructuring
// let obj={
//     name:"Zeeshan", 
//     age:"23"
// }

// let display=({name, age})=>{
//     console.log(name); 
// }

// display(obj)
 Sum()

// promises

// resolve, reject


// try{

// }
// catch{

// }


let data=fetch('https://jsonplaceholder.typicode.com/posts/').then(
    resp=>resp.json()
).then(data=>console.log(data))



// async await


// synchronus language (handle one thing at a time)
// let Sum= async ()=>{
// await 
// }


