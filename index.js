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
        const staffContainer = document.querySelector(".staff-container");
        staffContainer.innerHTML = ``;
        console.log(allHogwartsStaff)

        allHogwartsStaff.filter(staffInfo => staffInfo.image).forEach(staffInfo => {
            const staffEl = document.createElement("li");
            staffEl.classList.add("staff");

            const staffName = document.createElement("h2")
            staffName.classList.add("staff-name");
            staffName.textContent = staffInfo.name;

            const staffActor = document.createElement("p");
            staffActor.classList.add("staff-actor");
            staffActor.textContent = staffInfo.actor;

            const staffImage = document.createElement("img");
            staffImage.classList.add("staff-image");
            staffImage.src = staffInfo.image;

            staffEl.append(staffName);
            staffEl.append(staffActor);
            staffEl.append(staffImage);
            staffContainer.append(staffEl);
        })
    })