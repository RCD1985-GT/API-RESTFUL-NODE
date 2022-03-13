'use strict';

module.exports = {
  //titulo,año,popularidad,createdAt,updatedAt
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {
        "titulo": "No Logo",
        "año": 2002,
        "popularidad": 3,
        "genero": "accion",
        "createdAt": "2021-06-25",
        "updatedAt": "2021-06-21"
      }, {
        "titulo": "Batch '81",
        "año": 2011,
        "popularidad": 10,
        "genero": "accion",
        "createdAt": "2021-07-22",
        "updatedAt": "2021-07-22"
      }, {
        "titulo": "Rambo (Rambo 4)",
        "año": 1996,
        "popularidad": 3,
        "genero": "accion",
        "createdAt": "2022-02-23",
        "updatedAt": "2021-07-18"
      }, {
        "titulo": "Destiny Turns on the Radio",
        "año": 2008,
        "popularidad": 2,
        "genero": "accion",
        "createdAt": "2021-10-30",
        "updatedAt": "2021-10-15"
      }, {
        "titulo": "Two Years at Sea",
        "año": 2009,
        "popularidad": 8,
        "genero": "accion",
        "createdAt": "2021-06-03",
        "updatedAt": "2022-02-23"
      }, {
        "titulo": "Our Paradise (Notre paradis)",
        "año": 1992,
        "popularidad": 6,
        "genero": "accion",
        "createdAt": "2021-10-21",
        "updatedAt": "2021-06-23"
      }, {
        "titulo": "Babe, The",
        "año": 2004,
        "popularidad": 1,
        "genero": "accion",
        "createdAt": "2021-10-19",
        "updatedAt": "2021-11-21"
      }, {
        "titulo": "Mean Creek",
        "año": 2010,
        "popularidad": 9,
        "genero": "accion",
        "createdAt": "2021-08-10",
        "updatedAt": "2021-07-09"
      }, {
        "titulo": "Lathe of Heaven, The",
        "año": 1997,
        "popularidad": 1,
        "genero": "accion",
        "createdAt": "2021-11-13",
        "updatedAt": "2021-08-06"
      }, {
        "titulo": "Rage in Harlem, A",
        "año": 2011,
        "popularidad": 5,
        "genero": "comedia",
        "createdAt": "2021-04-02",
        "updatedAt": "2022-02-02"
      }, {
        "titulo": "Merchant of Venice, The",
        "año": 1997,
        "popularidad": 1,
        "genero": "comedia",
        "createdAt": "2021-07-23",
        "updatedAt": "2021-08-19"
      }, {
        "titulo": "Music From Another Room",
        "año": 2006,
        "popularidad": 7,
        "genero": "comedia",
        "createdAt": "2021-09-15",
        "updatedAt": "2021-10-31"
      }, {
        "titulo": "¡Alambrista! (Illegal, The)",
        "año": 2005,
        "popularidad": 6,
        "genero": "comedia",
        "createdAt": "2021-11-12",
        "updatedAt": "2021-10-05"
      }, {
        "titulo": "Jenny",
        "año": 1999,
        "popularidad": 7,
        "genero": "comedia",
        "createdAt": "2021-12-30",
        "updatedAt": "2021-05-30"
      }, {
        "titulo": "Singer, The (Quand j'étais chanteur)",
        "año": 2012,
        "popularidad": 6,
        "genero": "comedia",
        "createdAt": "2021-08-31",
        "updatedAt": "2021-06-22"
      }, {
        "titulo": "Ah, Wilderness!",
        "año": 1992,
        "popularidad": 9,
        "genero": "comedia",
        "createdAt": "2021-08-12",
        "updatedAt": "2021-09-04"
      }, {
        "titulo": "Pandora's Box",
        "año": 2005,
        "popularidad": 4,
        "genero": "comedia",
        "createdAt": "2022-02-04",
        "updatedAt": "2021-10-23"
      }, {
        "titulo": "How Hitler Lost the War",
        "año": 1995,
        "popularidad": 1,
        "genero": "comedia",
        "createdAt": "2021-06-09",
        "updatedAt": "2022-02-21"
      }, {
        "titulo": "Spooner",
        "año": 1996,
        "popularidad": 4,
        "genero": "comedia",
        "createdAt": "2021-08-23",
        "updatedAt": "2021-07-07"
      }, {
        "titulo": "You May Not Kiss the Bride",
        "año": 1998,
        "popularidad": 1,
        "genero": "comedia",
        "createdAt": "2021-11-13",
        "updatedAt": "2021-05-09"
      }, {
        "titulo": "Barchester Chronicles, The",
        "año": 2009,
        "popularidad": 2,
        "genero": "comedia",
        "createdAt": "2021-05-08",
        "updatedAt": "2021-04-06"
      }, {
        "titulo": "Ethan Frome",
        "año": 2004,
        "popularidad": 10,
        "genero": "comedia",
        "createdAt": "2022-01-01",
        "updatedAt": "2021-09-08"
      }, {
        "titulo": "Yankee Doodle Dandy",
        "año": 1996,
        "popularidad": 4,
        "genero": "comedia",
        "createdAt": "2021-04-24",
        "updatedAt": "2021-08-21"
      }, {
        "titulo": "Club Dread",
        "año": 2001,
        "popularidad": 1,
        "genero": "comedia",
        "createdAt": "2021-06-04",
        "updatedAt": "2021-04-24"
      }, {
        "titulo": "Young People",
        "año": 1997,
        "popularidad": 2,
        "genero": "comedia",
        "createdAt": "2021-10-05",
        "updatedAt": "2021-03-18"
      }, {
        "titulo": "Gen 13 (a.k.a. Gen13: The Animated Movie)",
        "año": 1993,
        "popularidad": 10,
        "genero": "comedia",
        "createdAt": "2021-10-26",
        "updatedAt": "2022-01-26"
      }, {
        "titulo": "Entity, The",
        "año": 1998,
        "popularidad": 8,
        "genero": "comedia",
        "createdAt": "2021-05-07",
        "updatedAt": "2021-11-22"
      }, {
        "titulo": "Floating Skyscrapers",
        "año": 2010,
        "popularidad": 4,
        "genero": "comedia",
        "createdAt": "2021-03-22",
        "updatedAt": "2021-06-13"
      }, {
        "titulo": "Luster",
        "año": 2000,
        "popularidad": 6,
        "genero": "comedia",
        "createdAt": "2021-05-22",
        "updatedAt": "2022-02-19"
      }, {
        "titulo": "Los Flamencos",
        "año": 2010,
        "popularidad": 5,
        "genero": "comedia",
        "createdAt": "2021-07-13",
        "updatedAt": "2021-05-28"
      }, {
        "titulo": "Cleanskin",
        "año": 2003,
        "popularidad": 4,
        "genero": "comedia",
        "createdAt": "2022-01-04",
        "updatedAt": "2022-01-12"
      }, {
        "titulo": "Visit to a Small Planet",
        "año": 1992,
        "popularidad": 10,
        "genero": "comedia",
        "createdAt": "2021-08-18",
        "updatedAt": "2021-05-10"
      }, {
        "titulo": "Tyler Perry's Madea Goes to Jail",
        "año": 2002,
        "popularidad": 3,
        "genero": "comedia",
        "createdAt": "2021-12-03",
        "updatedAt": "2021-10-20"
      }, {
        "titulo": "Skyline",
        "año": 1992,
        "popularidad": 3,
        "genero": "comedia",
        "createdAt": "2021-07-06",
        "updatedAt": "2022-01-14"
      }, {
        "titulo": "Hunger",
        "año": 2010,
        "popularidad": 7,
        "genero": "comedia",
        "createdAt": "2021-09-30",
        "updatedAt": "2021-10-27"
      }, {
        "titulo": "Last Stand At Saber River",
        "año": 1996,
        "popularidad": 9,
        "genero": "comedia",
        "createdAt": "2021-09-10",
        "updatedAt": "2021-03-17"
      }, {
        "titulo": "Riviera",
        "año": 1993,
        "popularidad": 1,
        "genero": "comedia",
        "createdAt": "2021-03-31",
        "updatedAt": "2021-10-17"
      }, {
        "titulo": "Undocumented",
        "año": 1993,
        "popularidad": 7,
        "genero": "comedia",
        "createdAt": "2021-08-29",
        "updatedAt": "2021-12-13"
      }, {
        "titulo": "Bloodbath at the House of Death",
        "año": 2005,
        "popularidad": 5,
        "genero": "comedia",
        "createdAt": "2022-02-09",
        "updatedAt": "2021-10-18"
      }, {
        "titulo": "Round-Up, The (Szegénylegények)",
        "año": 1995,
        "popularidad": 4,
        "genero": "comedia",
        "createdAt": "2021-12-22",
        "updatedAt": "2021-03-05"
      }, {
        "titulo": "It Came from Hollywood",
        "año": 1989,
        "popularidad": 10,
        "genero": "comedia",
        "createdAt": "2021-06-09",
        "updatedAt": "2021-12-05"
      }, {
        "titulo": "Golden Thread, The (Subarnarekha)",
        "año": 1996,
        "popularidad": 9,
        "genero": "comedia",
        "createdAt": "2021-10-16",
        "updatedAt": "2021-04-05"
      }, {
        "titulo": "Shaft in Africa",
        "año": 2000,
        "popularidad": 4,
        "genero": "comedia",
        "createdAt": "2021-07-24",
        "updatedAt": "2021-12-16"
      }, {
        "titulo": "Beyond Bedlam",
        "año": 2003,
        "popularidad": 4,
        "genero": "accion",
        "createdAt": "2021-10-16",
        "updatedAt": "2022-02-23"
      }, {
        "titulo": "Sick Girl",
        "año": 2008,
        "popularidad": 1,
        "genero": "accion",
        "createdAt": "2021-11-20",
        "updatedAt": "2021-08-21"
      }, {
        "titulo": "Brightness (Yeelen)",
        "año": 1993,
        "popularidad": 4,
        "genero": "accion",
        "createdAt": "2021-06-19",
        "updatedAt": "2021-07-13"
      }, {
        "titulo": "Meet the Parents",
        "año": 1996,
        "popularidad": 3,
        "genero": "accion",
        "createdAt": "2021-05-22",
        "updatedAt": "2021-05-29"
      }, {
        "titulo": "Black and White in Color (Noirs et blancs en couleur)",
        "año": 2005,
        "popularidad": 8,
        "genero": "accion",
        "createdAt": "2021-06-14",
        "updatedAt": "2021-08-21"
      }, {
        "titulo": "Brutal Relax",
        "año": 2010,
        "popularidad": 6,
        "genero": "accion",
        "createdAt": "2021-04-26",
        "updatedAt": "2022-02-22"
      }, {
        "titulo": "I Am Love (Io sono l'amore)",
        "año": 1994,
        "popularidad": 8,
        "genero": "accion",
        "createdAt": "2022-01-14",
        "updatedAt": "2021-08-28"
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
