//*************************************High order Array Method*****************************//
// const marks = [20,39,33,13,40,50,60,70,80,90,100]

// const High = [];
// const BeLow = [];

// for(let i=0; i<marks.length; i++){
//     if(marks[i] < 50){
//         BeLow.push(marks[i]);
//     }else{
//         High.push(marks[i])
//     }
// }
// console.log(BeLow)
// console.log(High)


//***********************************Map Method***************************************//
// const marks = [33,44,55,66,88,22,55,99]

// const newmarks = marks.map((marks)=>{
//     return marks*2;
// })

// console.log(newmarks)

//********************************************Filter**************************************//
// const newmarks = marks.filter((marks)=>{
//     return(marks<50)
// })
// console.log(newmarks)




//*****************************************Reduce****************************************//

// const marks = [33,44,55,66,88,22,55,99]

// const newmarks = marks.reduce((a,b)=>{
//      return a+b;
// })

// console.log(newmarks)


// const marks = [20.30,40,50,60,70,80,90,543,2,79,0,1,6,0,4,444,777]

// marks
// .sort((a,b)=>a-b)
// .filter((marks)=>marks<70)
// .map((marks)=>marks*60)
// .reduce((a,b)=>a+b)
// console.log(marks)



// var x = 20;

// function foo(){
//     console.log(x)
//     var x = 10;  
// }
// foo()]



// const arr = [28,33,55,666,77,99,11]

// let newarr = arr.filter((arr)=>{
//     return arr<70;
// })

// console.log(newarr)

// const marks = [20,30,40,50,60,70,80,90,543,2,79,0,1,6,0,4,444,777]


// const sum = marks.reduce((firstvalue,lastvalue)=>{
//     return firstvalue+lastvalue;
// })
// console.log(sum)


// const list = [0,3,5,7,2,8,9,50,35]

// const list2 = list.sort((x,y)=>x-y);

// console.log(list2)

// const marks = [30,45,22,77,60,55,80,66,35,90]

// const newmarks = marks
// .sort((a, b)=> a-b)
// .filter((n)=> n>50)
// .map((n)=> n+10)
// .reduce((a,b)=> a+b)
// console.log(newmarks)

// and this called channing//


const students = ['ali' , 'aslam' , 'tariq' , 'Naveed']

for(let i=0; i<students.length; i++){
    function printarray(students){
        console.log(students[i])
    }
}
students.push('farooq')
printarray(students)



