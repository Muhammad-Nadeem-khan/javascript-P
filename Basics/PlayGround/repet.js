// const students = [
//   {
//     marks: 80,
//     name: 'Ali',
//     Gpa: 3.7,
//     ispass: true,
//     friends: ['asad', 'aslam', 'akram', 'tariq'],
//     adress: {
//       city: 'Lahore',
//       country: 'Pakistan',
//       Thesil: 'joharabad'
//     }
//   },
//   {
//     marks: 40,
//     name: 'akram',
//     Gpa: 2.2,
//     ispass: true,
//     friends: ['asad1', 'aslam2', 'akram3', 'tariq4'],
//     adress: {
//       city: 'kpk',
//       country: 'Pakistan',
//       Thesil: 'bajawar'
//     }
//   },
//   {
//     marks: 70,
//     name: 'sami',
//     Gpa: 3.9,
//     ispass: true,
//     friends: ['asad5', 'aslam6', 'akram7', 'tariq8'],
//     adress: {
//       city: 'Lahore',
//       country: 'Pakistan',
//       Thesil: 'bajwar'
//     }
//   }
// ];


// let newstudents = students.map((students)=>{
//   return {
//     marks:students.marks*2
//   }.filter((students)=>{
//     return { marks:students < 100
//     }
//   })
// })
// console.log(newstudents)



// let newStudents = students.map((student) => {
//   return {
//     ...student,
//     marks: student.marks * 10
//   };
// });

// console.log(newStudents);



// for (let i = 0; i < students.length; i++) {
//   if (students[i].name == 'sami' && students[i].adress.city == 'Lahore') {
//     console.log('you are pass');
//   }
// }



// const students = [
//   {
//     marks: 80,
//     name: 'Ali',
//     Gpa: 3.7,
//     ispass: true,
//     friends: ['asad', 'aslam', 'akram', 'tariq'],
//     adress: {
//       city: 'Lahore',
//       country: 'Pakistan',
//       Thesil: 'joharabad'
//     }
//   },
//   {
//     marks: 40,
//     name: 'akram',
//     Gpa: 2.2,
//     ispass: true,
//     friends: ['asad1', 'aslam2', 'akram3', 'tariq4'],
//     adress: {
//       city: 'kpk',
//       country: 'Pakistan',
//       Thesil: 'bajawar'
//     }
//   },
//   {
//     marks: 70,
//     name: 'sami',
//     Gpa: 3.9,
//     ispass: true,
//     friends: ['asad5', 'aslam6', 'akram7', 'tariq8'],
//     adress: {
//       city: 'Lahore',
//       country: 'Pakistan',
//       Thesil: 'bajwar'
//     }
//   }
// ];

// let markadd = students.map((student)=>{
//    return student.marks* 2;
// })
// console.log(markadd);


// function add(a,b){
//     return a+b;
// }
// console.log(add(20,30))

// let names = ['ali','sajad','ahmad','khan']

// function deletearrray(names){
//     console.log(names)
// }
// names.pop()
// deletearrray(names)

// const arr = [3,4,2,5,7,9,1,55,88]
// arr.sort((x,y)(x-y))
// console.log(arr)




// const friends = ['asad1', 'aslam2', 'akram3', 'tariq4']

// function printarray(friends){
//     for(let i=0; i<friends.length; i++){
//         console.log(friends[i])
//         friends.delete([0])
//     }

//     printarray(friends)
// }


// const friends = ['asad1', 'aslam2', 'akram3', 'tariq4']
// friends.unshift('fahad')

// console.log(friends)

// const G1 = ['ali','akram','aslam']

// const G2 = G1.concat('fahad')
// console.log(G2)



// const G1 = ['ali','akram','aslam','khan','zafran']
 
//  const G2 = G1.slice(1,3)
//  console.log(G2)


// const G1 = ['ali','akram','aslam']

// G1.splice(2,2,'asim')
// console.log(G1)


let a = 10;
let b = 10;
let c = 10;

if(a == b == c){
    console.log("ture")
}else{
    console.log("False")
}