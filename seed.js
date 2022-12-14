const { db, Students, CampusesModel } = require("./server/db/models");

const seed = async () => {
  await db.sync({ force: true });
  const halloweentown = await CampusesModel.create({
    name: "Halloweentown University",
    imageUrl:
      "https://i.etsystatic.com/27844344/r/il/1c4fc4/3410057599/il_fullxfull.3410057599_fhzn.jpg",
    address: "St. Helens, Oregon",
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
  const hocusPocus = await CampusesModel.create({
    name: "Hocus Pocus Unviersity",
    imageUrl:
      "http://oladino.com/wp-content/uploads/2022/08/MR-oladinocom-svg030822t049-582022103125-1.jpeg",
    address: "Salem, Massachusetts",
    description:
      "The best school devoted to teaching the origin spells mastered here in Salem!",
  });
  const hermione = await Students.create({
    firstName: "Hermione",
    lastName: "Granger",
    email: "hermione.granger@hogsmeade.com",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/eRAw0VxQjQddtw7Bg8P_YbGpO0g=/0x0:1024x768/1400x1400/filters:focal(408x210:570x372):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51000507/harry-potter-top-10-hermione-granger-moments-hermione-granger-358045.0.jpg",
    gpa: 4.0,
    campusId: witchesUniversity.id,
  });
  const ron = await Students.create({
    firstName: "Ron",
    lastName: "Weasley",
    email: "ron.weasley@hogsmeade.com",
    imageUrl:
      "https://s2.r29static.com/bin/entry/40a/0,46,460,460/1200x1200,80/1462467/image.jpg",
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
  const aggie = await Students.create({
    firstName: "Aggie",
    lastName: "Cromwell",
    email: "aggie.cromwell@halloweentown.com",
    gpa: 3.2,
    campusId: halloweentown.id,
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
