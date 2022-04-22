const students = {
    "name": "Harry Potter",
    "alternate_names": [],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
        "wood": "holly",
        "core": "phoenix feather",
        "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alternate_actors": [],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
}



const hogwartsStudentsApiUrl = `http://hp-api.herokuapp.com/api/characters/students`

fetch(hogwartsStudentsApiUrl)
    .then(response => response.json())
    .then(allHogwartsStudents => {
        const studentsContainer = document.querySelector(".students-container");
        studentsContainer.innerHTML = ``;
        console.log(allHogwartsStudents)

        allHogwartsStudents.filter(studentsInfo => studentsInfo.image).forEach(studentsInfo => {
            const studentsEl = document.createElement("li");
            studentsEl.classList.add("students");

            const studentsName = document.createElement("h2")
            studentsName.classList.add("students-name");
            studentsName.textContent = studentsInfo.name;

            const studentsActor = document.createElement("p");
            studentsActor.classList.add("students-actor");
            studentsActor.textContent = studentsInfo.actor;

            const studentsImage = document.createElement("img");
            studentsImage.classList.add("students-image");
            studentsImage.src = studentsInfo.image;

            studentsEl.append(studentsName);
            studentsEl.append(studentsActor);
            studentsEl.append(studentsImage);
            studentsContainer.append(studentsEl);
        })
    })