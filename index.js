const staff = {
    "name": "Minerva McGonagall",
    "alternate_names": [],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "04-10-1925",
    "yearOfBirth": 1925,
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
        "wood": "",
        "core": "",
        "length": ""
    },
    "patronus": "tabby cat",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Dame Maggie Smith",
    "alternate_actors": [],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
}

const hogwartsStaffApiUrl = `http://hp-api.herokuapp.com/api/characters/staff`

fetch(hogwartsStaffApiUrl)
    .then(response => response.json())
    .then(allHogwartsStaff => {
        const staffContainer = document.querySelector("")
    })