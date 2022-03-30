'use strict';

module.exports = {
  //titulo,año,popularidad,caratula,createdAt,updatedAt
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {
        "titulo": "League of Ordinary Gentlemen, A",
        "año": 2009,
        "popularidad": 5,
        "genero": "Documentary",
        "poster": "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a",
        "sinopsis": "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
        "createdAt": "2021-10-07",
        "updatedAt": "2021-05-14"
      }, {
        "titulo": "My Friend Henry (Ystäväni Henry)",
        "año": 1996,
        "popularidad": 1,
        "genero": "Children|Drama",
        "poster": "metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
        "sinopsis": "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
        "createdAt": "2021-10-27",
        "updatedAt": "2021-09-08"
      }, {
        "titulo": "Matador, The",
        "año": 2010,
        "popularidad": 1,
        "genero": "Comedy|Drama|Thriller",
        "poster": "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer",
        "sinopsis": "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
        "createdAt": "2022-01-13",
        "updatedAt": "2021-11-25"
      }, {
        "titulo": "Fixed Bayonets!",
        "año": 1985,
        "popularidad": 2,
        "genero": "Drama|War",
        "poster": "nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
        "sinopsis": "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula",
        "createdAt": "2021-04-26",
        "updatedAt": "2021-03-10"
      }, {
        "titulo": "End of Suburbia: Oil Depletion and the Collapse of the American Dream",
        "año": 1992,
        "popularidad": 1,
        "genero": "Documentary",
        "poster": "nulla pede ullamcorper augue a suscipit nulla elit ac nulla",
        "sinopsis": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        "createdAt": "2021-06-29",
        "updatedAt": "2021-09-07"
      }, {
        "titulo": "When Jews Were Funny",
        "año": 2008,
        "popularidad": 8,
        "genero": "Documentary",
        "poster": "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam",
        "sinopsis": "erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea",
        "createdAt": "2021-10-12",
        "updatedAt": "2021-09-13"
      }, {
        "titulo": "Great Gatsby, The",
        "año": 2005,
        "popularidad": 3,
        "genero": "Drama",
        "poster": "ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in",
        "sinopsis": "dui vel nisl duis ac nibh fusce lacus purus aliquet",
        "createdAt": "2021-09-13",
        "updatedAt": "2021-11-26"
      }, {
        "titulo": "Return of Doctor X, The",
        "año": 1988,
        "popularidad": 3,
        "genero": "Horror|Mystery|Sci-Fi|Thriller",
        "poster": "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
        "sinopsis": "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
        "createdAt": "2021-08-12",
        "updatedAt": "2021-03-29"
      }, {
        "titulo": "Caiman, The (Il caimano)",
        "año": 2011,
        "popularidad": 1,
        "genero": "Comedy|Drama|Romance",
        "poster": "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
        "sinopsis": "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
        "createdAt": "2021-10-06",
        "updatedAt": "2021-12-07"
      }, {
        "titulo": "Xtro 3: Watch the Skies",
        "año": 2007,
        "popularidad": 9,
        "genero": "Horror|Sci-Fi",
        "poster": "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec",
        "sinopsis": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
        "createdAt": "2022-02-23",
        "updatedAt": "2021-03-08"
      }, {
        "titulo": "Fawlty Towers (1975-1979)",
        "año": 2008,
        "popularidad": 8,
        "genero": "Comedy",
        "poster": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
        "sinopsis": "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc",
        "createdAt": "2021-10-23",
        "updatedAt": "2021-10-21"
      }, {
        "titulo": "Sicilian Clan, The (Clan des Siciliens, Le)",
        "año": 2011,
        "popularidad": 10,
        "genero": "Crime|Drama",
        "poster": "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem",
        "sinopsis": "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor",
        "createdAt": "2021-04-15",
        "updatedAt": "2021-04-09"
      }, {
        "titulo": "Gazebo, The",
        "año": 2002,
        "popularidad": 6,
        "genero": "Comedy|Crime",
        "poster": "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
        "sinopsis": "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
        "createdAt": "2021-03-06",
        "updatedAt": "2021-06-18"
      }, {
        "titulo": "I Dreamed of Africa",
        "año": 1995,
        "popularidad": 4,
        "genero": "Drama",
        "poster": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus",
        "sinopsis": "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing",
        "createdAt": "2021-08-11",
        "updatedAt": "2021-09-03"
      }, {
        "titulo": "Pioneer (Pionér)",
        "año": 2000,
        "popularidad": 3,
        "genero": "Thriller",
        "poster": "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
        "sinopsis": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim",
        "createdAt": "2021-12-06",
        "updatedAt": "2021-05-10"
      }, {
        "titulo": "Disconnect",
        "año": 1989,
        "popularidad": 2,
        "genero": "Drama|Thriller",
        "poster": "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
        "sinopsis": "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan",
        "createdAt": "2021-08-06",
        "updatedAt": "2021-06-27"
      }, {
        "titulo": "Road to El Dorado, The",
        "año": 2001,
        "popularidad": 9,
        "genero": "Animation|Children",
        "poster": "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
        "sinopsis": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum",
        "createdAt": "2022-01-19",
        "updatedAt": "2022-01-14"
      }, {
        "titulo": "Devil and Daniel Webster, The (All That Money Can Buy)",
        "año": 2011,
        "popularidad": 7,
        "genero": "Drama|Fantasy",
        "poster": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id",
        "sinopsis": "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
        "createdAt": "2021-09-16",
        "updatedAt": "2021-04-04"
      }, {
        "titulo": "Crazy Horse",
        "año": 2008,
        "popularidad": 6,
        "genero": "Documentary",
        "poster": "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
        "sinopsis": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
        "createdAt": "2021-11-19",
        "updatedAt": "2021-11-14"
      }, {
        "titulo": "Heroes of Telemark, The ",
        "año": 2008,
        "popularidad": 2,
        "genero": "Action|Drama|War",
        "poster": "curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue",
        "sinopsis": "id massa id nisl venenatis lacinia aenean sit amet justo morbi",
        "createdAt": "2021-11-27",
        "updatedAt": "2022-02-24"
      }, {
        "titulo": "Amityville 3-D",
        "año": 2010,
        "popularidad": 8,
        "genero": "Horror",
        "poster": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
        "sinopsis": "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
        "createdAt": "2021-12-07",
        "updatedAt": "2021-04-25"
      }, {
        "titulo": "All the Real Girls",
        "año": 1994,
        "popularidad": 6,
        "genero": "Drama|Romance",
        "poster": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget",
        "sinopsis": "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
        "createdAt": "2021-03-26",
        "updatedAt": "2022-02-25"
      }, {
        "titulo": "Out of Bounds",
        "año": 1992,
        "popularidad": 8,
        "genero": "Drama",
        "poster": "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in",
        "sinopsis": "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
        "createdAt": "2021-12-23",
        "updatedAt": "2021-10-27"
      }, {
        "titulo": "Barfly",
        "año": 1999,
        "popularidad": 7,
        "genero": "Comedy|Drama|Romance",
        "poster": "ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
        "sinopsis": "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
        "createdAt": "2021-05-08",
        "updatedAt": "2022-01-01"
      }, {
        "titulo": "Atlas Shrugged: Part II",
        "año": 2001,
        "popularidad": 9,
        "genero": "Drama|Mystery|Sci-Fi",
        "poster": "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer",
        "sinopsis": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
        "createdAt": "2021-03-07",
        "updatedAt": "2021-10-31"
      }, {
        "titulo": "Ringers: Lord of the Fans",
        "año": 1991,
        "popularidad": 5,
        "genero": "Comedy|Documentary",
        "poster": "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam",
        "sinopsis": "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
        "createdAt": "2022-01-28",
        "updatedAt": "2021-12-22"
      }, {
        "titulo": "House of 1000 Corpses",
        "año": 2004,
        "popularidad": 7,
        "genero": "Horror",
        "poster": "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
        "sinopsis": "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
        "createdAt": "2022-01-15",
        "updatedAt": "2022-01-14"
      }, {
        "titulo": "The Auction",
        "año": 2003,
        "popularidad": 4,
        "genero": "Drama",
        "poster": "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit",
        "sinopsis": "consequat lectus in est risus auctor sed tristique in tempus",
        "createdAt": "2021-04-12",
        "updatedAt": "2021-12-07"
      }, {
        "titulo": "Che: Part Two",
        "año": 1993,
        "popularidad": 9,
        "genero": "Drama|War",
        "poster": "nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
        "sinopsis": "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
        "createdAt": "2021-06-16",
        "updatedAt": "2021-04-24"
      }, {
        "titulo": "Edge of the World, The",
        "año": 2012,
        "popularidad": 6,
        "genero": "Drama|Romance",
        "poster": "in est risus auctor sed tristique in tempus sit amet sem",
        "sinopsis": "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
        "createdAt": "2021-03-20",
        "updatedAt": "2021-05-07"
      }, {
        "titulo": "Almost Man, The (Mer eller mindre mann)",
        "año": 1986,
        "popularidad": 8,
        "genero": "Comedy|Drama",
        "poster": "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus",
        "sinopsis": "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
        "createdAt": "2021-11-17",
        "updatedAt": "2021-08-19"
      }, {
        "titulo": "Wind Will Carry Us, The (Bad ma ra khahad bord)",
        "año": 2009,
        "popularidad": 4,
        "genero": "Drama",
        "poster": "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
        "sinopsis": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis",
        "createdAt": "2022-01-12",
        "updatedAt": "2021-11-30"
      }, {
        "titulo": "Original Kings of Comedy, The",
        "año": 2011,
        "popularidad": 6,
        "genero": "Comedy|Documentary",
        "poster": "vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
        "sinopsis": "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc",
        "createdAt": "2022-02-07",
        "updatedAt": "2022-02-10"
      }, {
        "titulo": "Beachhead",
        "año": 2012,
        "popularidad": 10,
        "genero": "Drama|War",
        "poster": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
        "sinopsis": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
        "createdAt": "2021-11-02",
        "updatedAt": "2021-06-22"
      }, {
        "titulo": "About Alex",
        "año": 1992,
        "popularidad": 9,
        "genero": "Drama",
        "poster": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu",
        "sinopsis": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
        "createdAt": "2021-11-20",
        "updatedAt": "2021-09-05"
      }, {
        "titulo": "Chinese Box",
        "año": 2012,
        "popularidad": 6,
        "genero": "Drama|Romance",
        "poster": "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
        "sinopsis": "at velit eu est congue elementum in hac habitasse platea",
        "createdAt": "2021-04-01",
        "updatedAt": "2021-06-07"
      }, {
        "titulo": "Double Indemnity",
        "año": 2012,
        "popularidad": 7,
        "genero": "Crime|Drama|Film-Noir",
        "poster": "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
        "sinopsis": "quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
        "createdAt": "2021-05-06",
        "updatedAt": "2022-02-09"
      }, {
        "titulo": "Tainted",
        "año": 1996,
        "popularidad": 5,
        "genero": "Comedy|Thriller",
        "poster": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
        "sinopsis": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
        "createdAt": "2021-08-17",
        "updatedAt": "2021-04-03"
      }, {
        "titulo": "Madadayo (a.k.a. Not Yet)",
        "año": 1966,
        "popularidad": 9,
        "genero": "Drama",
        "poster": "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis",
        "sinopsis": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
        "createdAt": "2021-05-22",
        "updatedAt": "2021-04-07"
      }, {
        "titulo": "Bandolero!",
        "año": 2007,
        "popularidad": 8,
        "genero": "Western",
        "poster": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
        "sinopsis": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
        "createdAt": "2021-03-07",
        "updatedAt": "2022-01-21"
      }, {
        "titulo": "Curse of the Oily Man (Sumpah orang minyak) ",
        "año": 2008,
        "popularidad": 4,
        "genero": "Drama|Fantasy|Thriller",
        "poster": "pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
        "sinopsis": "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
        "createdAt": "2021-12-12",
        "updatedAt": "2021-07-14"
      }, {
        "titulo": "Keys of the Kingdom, The",
        "año": 1995,
        "popularidad": 9,
        "genero": "Drama",
        "poster": "eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
        "sinopsis": "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla",
        "createdAt": "2021-12-01",
        "updatedAt": "2021-11-11"
      }, {
        "titulo": "Psyhi vathia (a.k.a. Deep Soul)",
        "año": 2003,
        "popularidad": 7,
        "genero": "Drama|War",
        "poster": "mauris morbi non lectus aliquam sit amet diam in magna",
        "sinopsis": "facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at",
        "createdAt": "2021-03-08",
        "updatedAt": "2021-09-13"
      }, {
        "titulo": "Little Brother, Big Trouble: A Christmas Adventure (Niko 2: Lentäjäveljekset)",
        "año": 2004,
        "popularidad": 2,
        "genero": "Adventure|Animation|Children|Comedy",
        "poster": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor",
        "sinopsis": "venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut",
        "createdAt": "2021-05-04",
        "updatedAt": "2021-12-16"
      }, {
        "titulo": "She Hate Me",
        "año": 2006,
        "popularidad": 5,
        "genero": "Comedy|Drama",
        "poster": "ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
        "sinopsis": "vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
        "createdAt": "2021-03-09",
        "updatedAt": "2021-07-15"
      }, {
        "titulo": "Goldfish Memory",
        "año": 1966,
        "popularidad": 6,
        "genero": "Comedy|Drama",
        "poster": "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
        "sinopsis": "id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
        "createdAt": "2021-08-31",
        "updatedAt": "2021-10-17"
      }, {
        "titulo": "Senseless",
        "año": 1987,
        "popularidad": 3,
        "genero": "Comedy",
        "poster": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
        "sinopsis": "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
        "createdAt": "2022-01-16",
        "updatedAt": "2021-08-23"
      }, {
        "titulo": "Cosmic Journey",
        "año": 2000,
        "popularidad": 3,
        "genero": "Sci-Fi",
        "poster": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
        "sinopsis": "adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
        "createdAt": "2021-09-02",
        "updatedAt": "2022-02-26"
      }, {
        "titulo": "Bad Medicine",
        "año": 2006,
        "popularidad": 6,
        "genero": "Comedy",
        "poster": "egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
        "sinopsis": "semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis",
        "createdAt": "2021-10-13",
        "updatedAt": "2021-07-14"
      }, {
        "titulo": "6954 Kilometriä Kotiin",
        "año": 1985,
        "popularidad": 2,
        "genero": "Documentary",
        "poster": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat",
        "sinopsis": "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
        "createdAt": "2022-02-10",
        "updatedAt": "2021-04-22"
      }, {
        "titulo": "Mr. Moto in Danger Island",
        "año": 2009,
        "popularidad": 9,
        "genero": "Crime|Drama|Mystery|Thriller",
        "poster": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
        "sinopsis": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
        "createdAt": "2021-08-23",
        "updatedAt": "2021-04-20"
      }, {
        "titulo": "Capturing Mary",
        "año": 1997,
        "popularidad": 3,
        "genero": "(no genres listed)",
        "poster": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa",
        "sinopsis": "porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
        "createdAt": "2021-12-22",
        "updatedAt": "2021-04-14"
      }, {
        "titulo": "Eat Sleep Die (Äta sova dö)",
        "año": 2012,
        "popularidad": 9,
        "genero": "Drama",
        "poster": "leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas",
        "sinopsis": "vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
        "createdAt": "2021-08-22",
        "updatedAt": "2021-05-16"
      }, {
        "titulo": "Virginia",
        "año": 1998,
        "popularidad": 9,
        "genero": "Drama",
        "poster": "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
        "sinopsis": "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur",
        "createdAt": "2022-03-01",
        "updatedAt": "2021-10-31"
      }, {
        "titulo": "Werewolf of London",
        "año": 1992,
        "popularidad": 10,
        "genero": "Drama|Fantasy|Horror|Sci-Fi",
        "poster": "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
        "sinopsis": "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
        "createdAt": "2022-02-28",
        "updatedAt": "2021-05-01"
      }, {
        "titulo": "Bling Ring, The",
        "año": 2006,
        "popularidad": 3,
        "genero": "Crime|Drama",
        "poster": "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras",
        "sinopsis": "accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
        "createdAt": "2021-10-01",
        "updatedAt": "2021-12-21"
      }, {
        "titulo": "Addiction, The",
        "año": 2003,
        "popularidad": 5,
        "genero": "Drama|Horror",
        "poster": "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
        "sinopsis": "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
        "createdAt": "2021-09-13",
        "updatedAt": "2021-06-29"
      }, {
        "titulo": "Angie",
        "año": 2012,
        "popularidad": 9,
        "genero": "Comedy|Drama|Romance",
        "poster": "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
        "sinopsis": "ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit",
        "createdAt": "2021-12-31",
        "updatedAt": "2022-01-29"
      }, {
        "titulo": "Eros (Men and Women) (Noite Vazia)",
        "año": 1998,
        "popularidad": 7,
        "genero": "Drama",
        "poster": "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
        "sinopsis": "porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
        "createdAt": "2021-03-19",
        "updatedAt": "2022-02-16"
      }, {
        "titulo": "Lawless Heart, The",
        "año": 1995,
        "popularidad": 10,
        "genero": "Comedy|Drama",
        "poster": "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
        "sinopsis": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
        "createdAt": "2022-01-10",
        "updatedAt": "2021-06-04"
      }, {
        "titulo": "Song of the Exile (Ke tu qiu hen)",
        "año": 2006,
        "popularidad": 4,
        "genero": "Drama",
        "poster": "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
        "sinopsis": "erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
        "createdAt": "2021-03-28",
        "updatedAt": "2021-03-19"
      }, {
        "titulo": "Kuroneko (Black Cat from the Grove, The) (Yabu no naka no kuroneko)",
        "año": 1993,
        "popularidad": 4,
        "genero": "Drama|Fantasy|Horror|Romance",
        "poster": "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
        "sinopsis": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
        "createdAt": "2021-08-07",
        "updatedAt": "2021-10-20"
      }, {
        "titulo": "Desire",
        "año": 2000,
        "popularidad": 8,
        "genero": "Comedy|Crime|Romance",
        "poster": "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
        "sinopsis": "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
        "createdAt": "2021-06-12",
        "updatedAt": "2021-09-09"
      }, {
        "titulo": "Cremaster 3",
        "año": 1998,
        "popularidad": 1,
        "genero": "Drama",
        "poster": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
        "sinopsis": "ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
        "createdAt": "2021-04-15",
        "updatedAt": "2021-03-19"
      }, {
        "titulo": "Yellow Handkerchief, The",
        "año": 2010,
        "popularidad": 8,
        "genero": "Drama|Romance",
        "poster": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
        "sinopsis": "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a",
        "createdAt": "2021-12-18",
        "updatedAt": "2021-05-29"
      }, {
        "titulo": "Last Truck: Closing of a GM Plant, The",
        "año": 2005,
        "popularidad": 10,
        "genero": "Documentary",
        "poster": "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
        "sinopsis": "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
        "createdAt": "2022-01-12",
        "updatedAt": "2021-04-04"
      }, {
        "titulo": "Tickets",
        "año": 1992,
        "popularidad": 8,
        "genero": "Comedy|Drama",
        "poster": "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
        "sinopsis": "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        "createdAt": "2021-03-28",
        "updatedAt": "2021-12-11"
      }, {
        "titulo": "Angry Silence, The",
        "año": 1999,
        "popularidad": 3,
        "genero": "Drama",
        "poster": "nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
        "sinopsis": "platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
        "createdAt": "2021-10-17",
        "updatedAt": "2021-04-21"
      }, {
        "titulo": "High Spirits",
        "año": 2003,
        "popularidad": 10,
        "genero": "Comedy",
        "poster": "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar",
        "sinopsis": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
        "createdAt": "2021-05-23",
        "updatedAt": "2021-11-30"
      }, {
        "titulo": "Dunce Class on Vacation, The (Hababam sinifi tatilde)",
        "año": 1990,
        "popularidad": 7,
        "genero": "Comedy",
        "poster": "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non",
        "sinopsis": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",
        "createdAt": "2021-03-09",
        "updatedAt": "2021-12-14"
      }, {
        "titulo": "Cellar, The (Huset vid vägens ände)",
        "año": 2012,
        "popularidad": 1,
        "genero": "Horror|Thriller",
        "poster": "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
        "sinopsis": "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
        "createdAt": "2021-08-18",
        "updatedAt": "2021-03-31"
      }, {
        "titulo": "U.S. Marshals",
        "año": 2001,
        "popularidad": 6,
        "genero": "Action|Crime|Thriller",
        "poster": "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet",
        "sinopsis": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras",
        "createdAt": "2021-04-08",
        "updatedAt": "2022-02-23"
      }, {
        "titulo": "Fightville",
        "año": 2001,
        "popularidad": 7,
        "genero": "Documentary",
        "poster": "pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
        "sinopsis": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
        "createdAt": "2021-09-06",
        "updatedAt": "2021-05-29"
      }, {
        "titulo": "Dirigible",
        "año": 1996,
        "popularidad": 10,
        "genero": "Adventure",
        "poster": "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
        "sinopsis": "dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
        "createdAt": "2021-10-09",
        "updatedAt": "2021-06-12"
      }, {
        "titulo": "Wedding Trough (Vase de noces)",
        "año": 2009,
        "popularidad": 3,
        "genero": "Horror|Romance",
        "poster": "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id",
        "sinopsis": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam",
        "createdAt": "2021-12-22",
        "updatedAt": "2022-02-20"
      }, {
        "titulo": "The Fat Albert Halloween Special",
        "año": 1993,
        "popularidad": 2,
        "genero": "Animation",
        "poster": "est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium",
        "sinopsis": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
        "createdAt": "2021-10-28",
        "updatedAt": "2021-03-02"
      }, {
        "titulo": "Addams Family Values",
        "año": 2007,
        "popularidad": 10,
        "genero": "Children|Comedy|Fantasy",
        "poster": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
        "sinopsis": "libero quis orci nullam molestie nibh in lectus pellentesque at nulla",
        "createdAt": "2021-12-18",
        "updatedAt": "2021-12-13"
      }, {
        "titulo": "Enter the Ninja (a.k.a. Ninja I)",
        "año": 2003,
        "popularidad": 4,
        "genero": "Action|Drama",
        "poster": "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
        "sinopsis": "cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
        "createdAt": "2021-08-21",
        "updatedAt": "2021-06-08"
      }, {
        "titulo": "Onmyoji (Onmyoji: The Yin Yang Master)",
        "año": 2012,
        "popularidad": 9,
        "genero": "Action|Drama|Fantasy|Horror",
        "poster": "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper",
        "sinopsis": "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie",
        "createdAt": "2021-10-31",
        "updatedAt": "2022-01-12"
      }, {
        "titulo": "Georg",
        "año": 2008,
        "popularidad": 5,
        "genero": "Drama|Musical",
        "poster": "non mauris morbi non lectus aliquam sit amet diam in",
        "sinopsis": "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
        "createdAt": "2021-08-15",
        "updatedAt": "2021-12-14"
      }, {
        "titulo": "Suez",
        "año": 1995,
        "popularidad": 5,
        "genero": "Drama|Romance",
        "poster": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque",
        "sinopsis": "sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor",
        "createdAt": "2021-05-05",
        "updatedAt": "2021-07-07"
      }, {
        "titulo": "Larger Than Life",
        "año": 2012,
        "popularidad": 6,
        "genero": "Comedy",
        "poster": "placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",
        "sinopsis": "nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
        "createdAt": "2021-08-05",
        "updatedAt": "2021-10-05"
      }, {
        "titulo": "Cat Ballou",
        "año": 1999,
        "popularidad": 6,
        "genero": "Comedy|Western",
        "poster": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
        "sinopsis": "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis",
        "createdAt": "2021-05-28",
        "updatedAt": "2021-07-22"
      }, {
        "titulo": "Hori Smoku Sailor Jerry: The Life of Norman K. Collins ",
        "año": 1997,
        "popularidad": 5,
        "genero": "Documentary",
        "poster": "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
        "sinopsis": "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
        "createdAt": "2022-01-11",
        "updatedAt": "2021-05-29"
      }, {
        "titulo": "Duck Season (Temporada de patos)",
        "año": 2006,
        "popularidad": 10,
        "genero": "Comedy",
        "poster": "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
        "sinopsis": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",
        "createdAt": "2021-06-19",
        "updatedAt": "2021-07-09"
      }, {
        "titulo": "Mike's Murder",
        "año": 2001,
        "popularidad": 8,
        "genero": "Mystery",
        "poster": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
        "sinopsis": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
        "createdAt": "2021-05-07",
        "updatedAt": "2021-05-06"
      }, {
        "titulo": "Winning Streak",
        "año": 1992,
        "popularidad": 2,
        "genero": "Drama",
        "poster": "dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit",
        "sinopsis": "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
        "createdAt": "2021-08-10",
        "updatedAt": "2021-08-09"
      }, {
        "titulo": "As Far As My Feet Will Carry Me (So weit die Füße tragen)",
        "año": 1985,
        "popularidad": 4,
        "genero": "Drama|War",
        "poster": "sapien non mi integer ac neque duis bibendum morbi non quam nec",
        "sinopsis": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis",
        "createdAt": "2021-04-23",
        "updatedAt": "2021-12-11"
      }, {
        "titulo": "Day of the Animals",
        "año": 2001,
        "popularidad": 2,
        "genero": "Horror|Thriller",
        "poster": "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
        "sinopsis": "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
        "createdAt": "2021-11-17",
        "updatedAt": "2021-08-12"
      }, {
        "titulo": "Dead Silence",
        "año": 2006,
        "popularidad": 4,
        "genero": "Horror|Mystery|Thriller",
        "poster": "nunc vestibulum ante ipsum primis in faucibus orci luctus et",
        "sinopsis": "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis",
        "createdAt": "2022-02-06",
        "updatedAt": "2022-01-17"
      }, {
        "titulo": "How to Lose Friends & Alienate People",
        "año": 2002,
        "popularidad": 2,
        "genero": "Comedy",
        "poster": "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut",
        "sinopsis": "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue",
        "createdAt": "2021-10-12",
        "updatedAt": "2021-05-08"
      }, {
        "titulo": "Livid (Livide)",
        "año": 1985,
        "popularidad": 10,
        "genero": "Fantasy|Horror",
        "poster": "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
        "sinopsis": "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
        "createdAt": "2021-10-25",
        "updatedAt": "2021-04-27"
      }, {
        "titulo": "Grand Theft Auto",
        "año": 1991,
        "popularidad": 2,
        "genero": "Action|Comedy",
        "poster": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
        "sinopsis": "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper",
        "createdAt": "2021-08-03",
        "updatedAt": "2021-06-06"
      }, {
        "titulo": "Employees Leaving the Lumière Factory",
        "año": 2008,
        "popularidad": 2,
        "genero": "Documentary",
        "poster": "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",
        "sinopsis": "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus",
        "createdAt": "2021-11-05",
        "updatedAt": "2021-07-25"
      }, {
        "titulo": "12 Days of Terror",
        "año": 1992,
        "popularidad": 2,
        "genero": "Drama|Horror|Thriller",
        "poster": "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
        "sinopsis": "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        "createdAt": "2021-06-11",
        "updatedAt": "2021-03-30"
      }, {
        "titulo": "Keeping the Promise (Sign of the Beaver, The)",
        "año": 1999,
        "popularidad": 9,
        "genero": "Children|Drama",
        "poster": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque",
        "sinopsis": "pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non",
        "createdAt": "2021-10-29",
        "updatedAt": "2021-12-31"
      }, {
        "titulo": "Evil - In the Time of Heroes (To kako - Stin epohi ton iroon)",
        "año": 2007,
        "popularidad": 9,
        "genero": "Adventure|Comedy|Horror",
        "poster": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
        "sinopsis": "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
        "createdAt": "2021-04-02",
        "updatedAt": "2022-01-19"
      }, {
        "titulo": "Stop Train 349",
        "año": 2011,
        "popularidad": 10,
        "genero": "Drama",
        "poster": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
        "sinopsis": "nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
        "createdAt": "2022-02-21",
        "updatedAt": "2021-06-26"
      }, {
        "titulo": "American Carol, An",
        "año": 1996,
        "popularidad": 6,
        "genero": "Comedy|Fantasy",
        "poster": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit",
        "sinopsis": "eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
        "createdAt": "2021-08-07",
        "updatedAt": "2021-11-09"
      }, {
        "titulo": "Red Badge of Courage, The",
        "año": 1985,
        "popularidad": 4,
        "genero": "Drama|War",
        "poster": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis",
        "sinopsis": "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
        "createdAt": "2022-02-02",
        "updatedAt": "2021-05-13"
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
