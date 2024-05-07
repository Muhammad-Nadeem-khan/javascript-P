// const marks = [10,20,30,40,50]

// let result = marks.map((marks)=>{
//     return marks*2;
// })

// console.log(result)


// const marks = [10,20,30,40,50]

// const result = marks.filter((marks)=>{
//     return marks<40;

    
// })

// const marks = [10,20,30,40,50,60,70,80,90]

// const result = marks.reduce((firstvalue,nestvalue)=>{
//     return firstvalue+nestvalue;
// })

// console.log(result)


const marks = [10,20,30,40,50,60,70,80,90]

const result = marks
.map((marks)=>{
    return marks*2;
})
.filter
((marks)=>{
    return marks<50;
    
})
.reduce((firstvalue,Nextvalue)=>{
    return firstvalue+Nextvalue;
},0)

console.log(result)

