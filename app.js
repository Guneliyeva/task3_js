//? 1. Obyekt yaradin.

// let object = {
//   name: "Luca",
//   age: 5,
//   student: "True",
//   game: ["play game", "write code", "listen music"],
// };
// console.log(object);

//? 2. Array icinde coxlu obyektler yaradin

// let workers = [
//   {
//     name: "Zaman",
//     profession: "Designer",
//     experience: 2,
//     salary: 700,
//   },
//   {
//     name: "Zaman",
//     profession: "Backend developer",
//     experience: 2,
//     salary: 1200,
//   },
//   {
//     name: "Zaman",
//     profession: "Tester",
//     experience: 2,
//     salary: 500,
//   },
// ];

//? 3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
// let telebeler = [
//   {
//     id: 1,
//     name: "Çiçək",
//     surname: "Rustemova",
//     hobby: "read book",
//     profession: "IT",
//   },
//   {
//     id: 2,
//     name: "Leyla",
//     surname: "Nagiyeva",
//     html: 100,
//     hobby: "write code",
//     profession: "Economy",
//   },
//   {
//     id: 3,
//     name: "Ekber",
//     surname: "Eliyev",
//     html: 80,
//     hobby: ["listen music", "watch film", "walking"],
//     profession: "Tester",
//   },
//   {
//     id: 4,
//     name: "Ceyran",
//     surname: "Selimova",
//     html: 80,
//     hobby: ["watch film", "walking"],
//     profession: "Frontend developer",
//   },
//   {
//     id: 5,
//     name: "Nicat",
//     surname: "Bayramov",
//     html: 90,
//     hobby: "puzzle",
//     profession: "business",
//   },
// ];

//? 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)
// let telebeler = [
//   {
//     id: 1,
//     name: "Çiçək",
//     surname: "Rustemova",
//     html: 100,
//   },
//   {
//     id: 2,
//     name: "Leyla",
//     surname: "Nagiyeva",
//     html: 70,
//   },
//   {
//     id: 3,
//     name: "Ekber",
//     surname: "Eliyev",
//     html: 80,
//   },
//   {
//     id: 4,
//     name: "Ceyran",
//     surname: "Selimova",
//     html: 85,
//   },
//   {
//     id: 5,
//     name: "Nicat",
//     surname: "Bayramov",
//     html: 90,
//   },
// ];

// let sum = 0;
// for (let i = 0; i < telebeler.length; i++) {
//   sum += telebeler[i].html;
// }
// let eo = sum / telebeler.length;
// console.log(`telebelerin umumi orta bali: ${eo}`)

//? 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.
// let students = [
//   {
//     id: 1,
//     name: "Çiçək",
//     surname: "Rustemova",
//     html: 100,
//     css: 95,
//     Javascript: 95,
//   },
//   {
//     id: 2,
//     name: "Leyla",
//     surname: "Nagiyeva",
//     html: 100,
//     css: 75,
//     Javascript: 65,
//   },
//   {
//     id: 3,
//     name: "Ekber",
//     surname: "Eliyev",
//     html: 80,
//     css: 75,
//     Javascript: 95,
//   },
//   {
//     id: 4,
//     name: "Ceyran",
//     surname: "Selimova",
//     html: 80,
//     css: 65,
//     Javascript: 95,
//   },
//   {
//     id: 5,
//     name: "Nicat",
//     surname: "Bayramov",
//     html: 90,
//     css: 75,
//     Javascript: 75,
//   },
// ];
// for (let i = 0; i < students.length; i++) {
//   let student_eo = (students[i].html + students[i].css + students[i].Javascript) / 3;
//   if (student_eo < 90) {
//     console.log(
//       `${students[i].name} ${students[i].surname} ortalama baliniz 90dan asagidir bir az daha calismalisiniz`
//     );
//   } else {
//     console.log(`${students[i].name} ${students[i].surname} ortalama baliniz: ${student_eo}`);
//   }
// }
