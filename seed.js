const { db, Students, CampusesModel } = require("./server/db/models");

const seed = async () => {
  await db.sync({ force: true });
  const halloweentown = await CampusesModel.create({
    name: "Halloweentown University",
    imageUrl:
      "https://i.etsystatic.com/27844344/r/il/1c4fc4/3410057599/il_fullxfull.3410057599_fhzn.jpg",
    address: "Salem, Massachusetts",
    description: "The best schools for young witches and Wizards!!!",
  });
  const witchesUniversity = await CampusesModel.create({
    name: "Witch University",
    imageUrl:
      "https://www.hekatesfinishingschool.com/wp-content/uploads/2020/01/HFS-logo-1mb.png",
    address: "Sleepy Hollow, New York",
    description:
      "The best school devoted solely to young witches. All of the best spells and potions come out of this university!",
  });
  const hermione = await Students.create({
    firstName: "Hermione",
    lastName: "Granger",
    email: "hermione.granger@hogsmeade.com",
    imageUrl:
      "https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest/scale-to-width-down/1200?cb=20141230074301",
    gpa: 4.0,
    campusId: witchesUniversity.id,
  });
  const ron = await Students.create({
    firstName: "Ron",
    lastName: "Weasley",
    email: "ron.weasley@hogsmeade.com",
    gpa: 2.6,
    campusId: halloweentown.id,
  });
  const luna = await Students.create({
    firstName: "Luna",
    lastName: "Lovegood",
    email: "luna.lovegood@hogsmeade.com",
    imageUrl: "https://i.insider.com/636c220bf5877200181c32c7?width=700",
    gpa: 3.7,
    campusId: witchesUniversity.id,
  });
  db.close();
  console.log(`

    Seeding successful!

  `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});

// const campuses = [
//   {
//     name: "Halloweentown University",
//     imageUrl:
//       "https://i.etsystatic.com/27844344/r/il/1c4fc4/3410057599/il_fullxfull.3410057599_fhzn.jpg",
//     address: "Salem, Massachusetts",
//     description: "The best schools for young witches and Wizards!!!",
//   },
//   {
//     name: "Witch University",
//     imageUrl:
//       "https://www.hekatesfinishingschool.com/wp-content/uploads/2020/01/HFS-logo-1mb.png",
//     address: "Sleepy Hollow, New York",
//     description:
//       "The best school devoted solely to young witches. All of the best spells and potions come out of this university!",
//   },
// ];
// // const [halloweentown, witchesUniversity] = campuses;
// const students = [
//   {
//     firstName: "Hermione",
//     lastName: "Granger",
//     email: "hermione.granger@hogsmeade.com",
//     imageUrl:
//       "https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest/scale-to-width-down/1200?cb=20141230074301",
//     gpa: 4.0,
//     campusesId: ,
//   },
//   {
//     firstName: "Ron",
//     lastName: "Weasley",
//     email: "ron.weasley@hogsmeade.com",
//     gpa: 2.6,
//   },
//   {
//     firstName: "Luna",
//     lastName: "Lovegood",
//     email: "luna.lovegood@hogsmeade.com",
//     imageUrl: "https://i.insider.com/636c220bf5877200181c32c7?width=700",
//     gpa: 3.7,
//   },
// ];

// // return students.reduce((allStudents, students) => {
// //   allStudents[student.firstName] = student;
// //   return allStudents;
// // }, {});

// const seed = async () => {
//   try {
//     await db.sync({ force: true });

//     await Promise.all(
//       students.map((student) => {
//         return Students.create(student);
//       })
//     );
//     await Promise.all(
//       campuses.map((campus) => {
//         return Campuses.create(campus);
//       })
//     );
//     const [halloweentown, witchesUniversity] = campuses;
//     const [hermione, ron, luna] = students;
//     console.log(Object.keys(Campuses.prototype));
//     console.log(Object.keys(Students.prototype));

//     await witchesUniversity.setPupil(hermione);
//     await halloweentown.setPupil(ron);
//     await witchesUniversity.setPupil(luna);

//     console.log("Seeding success!");
//     db.close();
//   } catch (err) {
//     console.error("Oh noes! Something went wrong!");
//     console.error(err);
//     db.close();
//   }
// };

// seed();
