const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err)
    return;
  }

  const db = client.db('data');


  db.collection('words').drop();
  db.collection('maths').drop();
  db.collection('flags').drop();


  db.collection('words').insert([
    //foods
    {
      word: "apple",
      category: "food",
      image: "/images/food/apple.svg"
    },
    {
      word: "banana",
      category: "food",
      image: "/images/food/banana.svg"
    },
    {
      word: "bread",
      category: "food",
      image: "/images/food/bread.svg"
    },
    {
      word: "burger",
      category: "food",
      image: "/images/food/burger.svg"
    },
    {
      word: "carrot",
      category: "food",
      image: "/images/food/carrot.svg"
    },
    {
      word: "cheese",
      category: "food",
      image: "/images/food/cheese.svg"
    },
    {
      word: "egg",
      category: "food",
      image: "/images/food/egg.svg"
    },
    {
      word: "lemon",
      category: "food",
      image: "/images/food/lemon.svg"
    },
    {
      word: "orange",
      category: "food",
      image: "/images/food/orange.svg"
    },
    {
      word: "pizza",
      category: "food",
      image: "/images/food/pizza.svg"
    },
    {
      word: "strawberry",
      category: "food",
      image: "/images/food/strawberry.svg"
    },
    {
      word: "tomato",
      category: "food",
      image: "/images/food/tomato.svg"
    },
    //colours
    {
      word: "yellow",
      category: "colour",
      image: "/images/colours/yellow.svg"
    },
    {
      word: "red",
      category: "colour",
      image: "/images/colours/red.svg"
    },
    {
      word: "green",
      category: "colour",
      image: "/images/colours/green.svg"
    },
    {
      word: "blue",
      category: "colour",
      image: "/images/colours/blue.svg"
    },
    {
      word: "pink",
      category: "colour",
      image: "/images/colours/pink.svg"
    },
    {
      word: "orange",
      category: "colour",
      image: "/images/colours/orange.svg"
    },
    {
      word: "white",
      category: "colour",
      image: "/images/colours/white.svg"
    },
    {
      word: "purple",
      category: "colour",
      image: "/images/colours/purple.svg"
    },
    {
      word: "black",
      category: "colour",
      image: "/images/colours/black.svg"
    },
    {
      word: "brown",
      category: "colour",
      image: "/images/colours/brown.svg"
    },

    //animals
    {
      word: "cat",
      category: "animal",
      image: "/images/animals/cat.svg"
    },
    {
      word: "dog",
      category: "animal",
      image: "/images/animals/dog.svg"
    },

    {
      word: "elephant",
      category: "animal",
      image: "/images/animals/elephant.svg"
    },

    {
      word: "fish",
      category: "animal",
      image: "/images/animals/fish.svg"
    },

    {
      word: "hedgehog",
      category: "animal",
      image: "/images/animals/hedgehog.svg"
    },

    {
      word: "horse",
      category: "animal",
      image: "/images/animals/horse.svg"
    },

    {
      word: "parrot",
      category: "animal",
      image: "/images/animals/parrot.svg"
    },

    {
      word: "pig",
      category: "animal",
      image: "/images/animals/pig.svg"
    },

    {
      word: "rabbit",
      category: "animal",
      image: "/images/animals/rabbit.svg"
    },

    {
      word: "sheep",
      category: "animal",
      image: "/images/animals/sheep.svg"
    },

    //clothing

    {
      word: "coat",
      category: "clothing",
      image: "/images/clothing/coat.svg"
    },
    {
      word: "gloves",
      category: "clothing",
      image: "/images/clothing/gloves.svg"
    },
    {
      word: "hat",
      category: "clothing",
      image: "/images/clothing/hat.svg"
    },
    {
      word: "scarf",
      category: "clothing",
      image: "/images/clothing/scarf.svg"
    },
    {
      word: "shirt",
      category: "clothing",
      image: "/images/clothing/shirt.svg"
    },
    {
      word: "shoe",
      category: "clothing",
      image: "/images/clothing/shoe.svg"
    },
    {
      word: "skirt",
      category: "clothing",
      image: "/images/clothing/skirt.svg"
    },
    {
      word: "socks",
      category: "clothing",
      image: "/images/clothing/socks.svg"
    },
    {
      word: "tie",
      category: "clothing",
      image: "/images/clothing/tie.svg"
    },
    {
      word: "trousers",
      category: "clothing",
      image: "/images/clothing/trousers.svg"
    },

    //test file
    {
      word: "test",
      category: "test",
      image: "/images/test/test.svg"
    }
  ]
)
db.collection('maths').insert([
  {
    problem: "1 plus 1",
    solution: "2",
    category: "add",
    image1: "/images/maths/one.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/one.svg",
    image4: "/images/maths/two.svg"
  },
  {
    problem: "2 plus 2",
    solution: "4",
    category: "add",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/four.svg"
  },
  {
    problem: "5 plus 4",
    solution: "9",
    category: "add",
    image1: "/images/maths/five.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/nine.svg"
  },
  {
    problem: "6 divided by 2",
    solution: "3",
    category: "divide",
    image1: "/images/maths/six.svg",
    image2: "/images/maths/divide.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/three.svg"
  },
  {
    problem: "10 minus 1",
    solution: "9",
    category: "minus",
    image1: "/images/maths/ten.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/one.svg",
    image4: "/images/maths/nine.svg"
  },
  {
    problem: "8 minus 4",
    solution: "4",
    category: "minus",
    image1: "/images/maths/eight.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/four.svg"
  },
  {
    problem: "2 times 2",
    solution: "4",
    category: "times",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/times.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/four.svg"
  },
  {
    problem: "7 plus 2",
    solution: "9",
    category: "add",
    image1: "/images/maths/seven.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/nine.svg"
  },
  {
    problem: "5 minus 4",
    solution: "1",
    category: "minus",
    image1: "/images/maths/five.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/one.svg"
  },{
    problem: "10 divided by 5",
    solution: "2",
    category: "divide",
    image1: "/images/maths/ten.svg",
    image2: "/images/maths/divide.svg",
    image3: "/images/maths/five.svg",
    image4: "/images/maths/two.svg"
  },{
    problem: "4 divided by 2",
    solution: "2",
    category: "divide",
    image1: "/images/maths/four.svg",
    image2: "/images/maths/divide.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/two.svg"
  },{
    problem: "1 plus 3",
    solution: "4",
    category: "add",
    image1: "/images/maths/one.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/three.svg",
    image4: "/images/maths/four.svg"
  },{
    problem: "2 times 3",
    solution: "6",
    category: "times",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/times.svg",
    image3: "/images/maths/three.svg",
    image4: "/images/maths/six.svg"
  },{
    problem: "9 divided by 3",
    solution: "3",
    category: "divide",
    image1: "/images/maths/nine.svg",
    image2: "/images/maths/divide.svg",
    image3: "/images/maths/three.svg",
    image4: "/images/maths/three.svg"
  },{
    problem: "2 times 4",
    solution: "8",
    category: "times",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/times.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/eight.svg"
  },
  {
    problem: "3 plus 3",
    solution: "6",
    category: "add",
    image1: "/images/maths/three.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/three.svg",
    image4: "/images/maths/six.svg"
  },
  {
    problem: "3 plus 4",
    solution: "7",
    category: "add",
    image1: "/images/maths/three.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/four.svg",
    image4: "/images/maths/seven.svg"
  },
  {
    problem: "10 minus 9",
    solution: "1",
    category: "minus",
    image1: "/images/maths/ten.svg",
    image2: "/images/maths/minus.svg",
    image3: "/images/maths/nine.svg",
    image4: "/images/maths/one.svg"
  },
  {
    problem: "2 plus 2 is 4. Minus 1 that's 3, quick maths",
    category: "bigshaq",
    solution: "3",
    image1: "/images/maths/two.svg",
    image2: "/images/maths/add.svg",
    image3: "/images/maths/two.svg",
    image4: "/images/maths/minus.svg",
    image5: "/images/maths/one.svg",
    image6: "/images/maths/three.svg"
  },

  //test file
  {
    word: "test",
    category: "test",
    image: "/images/test/test.svg"
  }])
  db.collection('flags').insert([
    {
      name:'argentina',
      coords: { lat: -38.416069, lng: -63.616672 },
      zoom: 3,
      image: "/images/flags/argentina.svg"
    },
    {
      name:'australia',
      coords: { lat: -25.274398, lng: 133.775136 },
      zoom: 3,
      image: "/images/flags/australia.svg"
    },
    {
      name:'belgium',
      coords: { lat: 50.503883, lng: 4.469936 },
      zoom: 6,
      image: "/images/flags/belgium.svg"
    },
    {
      name:'brazil',
      coords: { lat: -14.235004, lng: -51.925280 },
      zoom: 3,
      image: "/images/flags/brazil.svg"
    },
    {
      name:'canada',
      coords: { lat: 63.130366, lng: -106.346771 },
      zoom: 2,
      image: "/images/flags/canada.svg"
    },
    {
      name:'china',
      coords: { lat: 35.861660, lng: 104.195397 },
      zoom: 3,
      image: "/images/flags/china.svg"
    },
    {
      name:'england',
      coords: { lat: 52.355518, lng: -1.174320 },
      zoom: 6,
      image: "/images/flags/england.svg"
    },
    {
      name:'france',
      coords: { lat: 46.277638, lng: 2.213749 },
      zoom: 4,
      image: "/images/flags/france.svg"
    },
    {
      name:'germany',
      coords: { lat: 51.165691, lng: 10.451526 },
      zoom: 4,
      image: "/images/flags/germany.svg"
    },
    {
      name:'greece',
      coords: { lat: 39.074208, lng: 21.824312 },
      zoom: 5,
      image: "/images/flags/greece.svg"
    },
    {
      name:'hungary',
      coords: { lat: 47.162494, lng: 19.503304  },
      zoom: 5,
      image: "/images/flags/hungary.svg"
    },
    {
      name:'india',
      coords: { lat: 20.593684, lng: 78.962880 },
      zoom: 3,
      image: "/images/flags/india.svg"
    },
    {
      name:'ireland',
      coords: { lat: 53.142367, lng: -7.692064 },
      zoom: 5,
      image: "/images/flags/ireland.svg"
    },
    {
      name:'italy',
      coords: { lat: 41.871940, lng: 12.567380 },
      zoom: 4,
      image: "/images/flags/italy.svg"
    },
    {
      name:'japan',
      coords: { lat: 36.204824, lng: 138.252924 },
      zoom: 4,
      image: "/images/flags/japan.svg"
    },
    {
      name:'netherlands',
      coords: { lat: 52.132633, lng: 5.291266 },
      zoom: 4,
      image: "/images/flags/netherlands.svg"
    },
    {
      name:'nigeria',
      coords: { lat: 9.081999, lng: 8.675277 },
      zoom: 4,
      image: "/images/flags/nigeria.svg"
    },
    {
      name:'poland',
      coords: { lat: 51.919438, lng: 19.145136 },
      zoom: 4,
      image: "/images/flags/poland.svg"
    },
    {
      name:'portugal',
      coords: { lat: 39.399872, lng: -8.224454 },
      zoom: 5,
      image: "/images/flags/portugal.svg"
    },
    {
      name:'romania',
      coords: { lat: 45.943161, lng: 24.966760 },
      zoom: 3,
      image: "/images/flags/romania.svg"
    },
    {
      name:'scotland',
      coords: { lat: 56.890671, lng: -4.202646 },
      zoom: 5,
      image: "/images/flags/scotland.svg"
    },
    {
      name:'slovakia',
      coords: { lat: 48.069026, lng: 19.699024 },
      zoom: 5,
      image: "/images/flags/slovakia.svg"
    },
    {
      name:'usa',
      coords: { lat: 38.090240, lng: -99.712891 },
      zoom: 3,
      image: "/images/flags/usa.svg"
    },
    {
      name:'wales',
      coords: { lat: 52.380661, lng: -3.783712 },
      zoom: 6,
      image: "/images/flags/wales.svg"
    }
  ])
});
