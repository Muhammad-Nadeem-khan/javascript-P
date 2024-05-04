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



const students = [
  {
    marks: 80,
    name: 'Ali',
    Gpa: 3.7,
    ispass: true,
    friends: ['asad', 'aslam', 'akram', 'tariq'],
    adress: {
      city: 'Lahore',
      country: 'Pakistan',
      Thesil: 'joharabad'
    }
  },
  {
    marks: 40,
    name: 'akram',
    Gpa: 2.2,
    ispass: true,
    friends: ['asad1', 'aslam2', 'akram3', 'tariq4'],
    adress: {
      city: 'kpk',
      country: 'Pakistan',
      Thesil: 'bajawar'
    }
  },
  {
    marks: 70,
    name: 'sami',
    Gpa: 3.9,
    ispass: true,
    friends: ['asad5', 'aslam6', 'akram7', 'tariq8'],
    adress: {
      city: 'Lahore',
      country: 'Pakistan',
      Thesil: 'bajwar'
    }
  }
];

let markadd = students.map((student)=>{
   return student.marks* 2;
})
console.log(markadd);
