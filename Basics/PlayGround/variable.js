// Variables let var const//

//var is a function scoped

// let and const is a es6 topic

//*************************Very simple Programe Sum of two Number********************************************/

// let a = 10;

// let b = 20;

// let c = a+b;

// console.log(c)

//*****************************************/ if else and switch *********************************************//

// const marks = 22;

// if(marks < 30){
//     console.log("you are fail")
// }
// else{
//    console.log("you are pass")


// const time = 14;

// if(time < 11 && time > 1){
//     console.log("Good Morning")
// }
// else if(time > 11 && time < 15){
//     console.log("Good after Noon")
// }
// else if(time > 15 && time < 18){
//     console.log("Good Evening")
// }else{
//   console.log("Good Nights")
// }

// const temp = 46;

// if(temp > 45){
//     console.log("its too hot out side");
// }
// else if(temp < 35){
//     console.log("it is pretty nice outside")
// }


//************************************************Ternary Operater****************************************************/

// const marks = 33;
// (marks > 40 ? console.log("you are fail"): console.log("you are pass"))


//****************************************** Switch *****************************************************************/


// const number = 20;

// switch(number){
//     case 10:
//         console.log("Yes it is 10")
//         break;
//     case 20:
//         console.log("No it is Not 10")
//         break;

// }

// const number = 10;

// switch(number < 0){
//     case true:
//         console.log("Positive")
//         break;

//         default:
//             console.log("Negative")
// }


// const month = 13;

// switch(month){
//     case 1:
//         console.log("January")
//         break;
        
//         case 2:
//             console.log("February")
//             break;
            
//             case 3:
//                  console.log("March")
//                  break;

//                  case 4:
//                     console.log("April")
//                     break;

//                     case 5:
//                         console.log(May)
//                         break;

//                         case 6:
//                             console.log("June")
//                             break;

//                             case 7:
//                                 console.log("July")
//                                 break;

//                                 case 8:
//                                     console.log("August")
//                                     break;

//                                     case 9:

//                                     console.log("September")
//                                     break;

//                                     case 10:
//                                         console.log("Octuber")
//                                         break;

//                                         case 11:
//                                             console.log("November")
//                                             break;

//                                             case 12:
//                                                 console.log(December)
//                                                 break;

//                                                 default:
//                                                     console.log("Please Enter Vaild Month Name")
            
// }

//**************************************************Template Literal**************************************************/

//  const FirstName = 'Nadeem';
//  const LastName = 'khan'

//  console.log("Hello" + FirstName + "" + LastName)

// console.log(`Hello ${FirstName} ${LastName}`)


//**************************************************Loops*********************************************/

//For loop , while loop , Do While Loop.

//For Loop

//const list = [10,21,66,23,29,88,49]
// for(let i=0; i<list.length; i++){
//     console.log(list)
// }


//While Loop;
// const list = [10,21,66,23,29,88,49]

// let i=0;

// while(i<list.length){
//     console.log(list)
//     i++
// }



//Do While Loop

// const list = [22,65,44,15,99,51,0,77]

// let i=0;

// do{
//     console.log(list)
//     i++
// }while(i<list.length)


//**************************************************Object**********************************************************/


// const data = [
//   {  
//   marks : 60,
//   name : 'Ali',
//   Gpa : 3.7,
//   ispass : true,
//   friends : ['asad, aslam, akram, tariq '],
//   adress :{
//       city : 'Lahore',
//       country : 'Pakistan',
//       Thesil : 'joharabad'

// }
// },
//   {
//     marks:30,
//     name:'sajad',
//     Gpa:2.1,
//     ispass:'Fail',
//     adress: {
//       city:'naurang',
//       country:'Pakistan',
//       Thesil:'lakki marwat'

//     }
//   },
//   {
//     marks:90,
//     name:'haris',
//     Gpa:3.9,
//     ispass:'Ture',
//     adress:{
//       city:'Abatabad',
//       country:'Pakistan',
//       Thesil:'G1'
//     }
//   },
// ]

// for(let i=0; i<data.length; i++){
//   if(data[i].ispass == true){
//     console.log(data[i].addrees.city)
//   }
// }

// for(let i=0; i<data.length; i++){
//   if(data[i].name == 'Ali' && data[i].Gpa == 3.7){
//     console.log('you have A Grade')
//   }
// }



// const data = {
//     products : [
//        {
//          name:'laptop',
//          price: 10000,
//          isAvailble:'isTrue'
//        },
//        {
//         name:'Mobile',
//         price:2000,
//         isAvailble:false,
   
//        },
//        {
//          name:'TV',
//          price:3000,
//          isAvailble:false,
   
//        },
//        {
//          name:'Fridge',
//          price:70000,
//          isAvailble:'true',
//        }
   
//      ]
//    }



   
   
   
//   const result = data.products;

//   let totalprice =  products.reduce((firstprice , lastprice)=>{
//     return firstprice+lastprice
//   },0)
//   console.log(totalprice)

//  const newProduct = products.map((products)=>{
//    return products.price*2;
//  })

//  console.log(newProduct)



// const newProduct = products.filter((products)=>{
//   return products.price<4000;
// })
// console.log(newProduct)


// const newProduct = products.price.reduce((a,b)=>{
//   return a+b;
// })

// console.log(newProduct)





// let totalprice = products.reduce((firsrprice,lastprice)=>{
//   return firsrprice+lastprice;
// },0)
// console.log(totalprice)




//  const marks = [10,20,33,44,52,66,77,88,99,100,57]

//  let upmarks = marks.reduce((a,b)=>{
//   return a+b;
//  })
//  console.log(upmarks)

// let totalprice = products.reduce((a,b)=>{
//   return a+b;
// },0)
// console.log(totalprice)



const data = {
  products : [
     {
       name:'laptop',
       price: 10000,
       isAvailble:'isTrue'
     },
     {
      name:'Mobile',
      price:2000,
      isAvailble:false,
     },
     {
       name:'TV',
       price:3000,
       isAvailble:false,
     },
     {
       name:'Fridge',
       price:70000,
       isAvailble:'true',
     }
   ]
 }
 const result = data.products.reduce((previousValue, nextValue) => {
   return previousValue + nextValue.price
 }, 0)
 console.log(result)
   