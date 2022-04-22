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
const main = document.querySelector("main")
const queryString = new URLSearchParams(window.location.search).get("name")
const wrapper = document.querySelector(".wrapper")


const hogwartsStudentsApiUrl = `http://hp-api.herokuapp.com/api/characters/students`



fetch(hogwartsStudentsApiUrl)
    .then(response => response.json())
    .then(allHogwartsStudents => {
        console.log(queryString)
        const student = allHogwartsStudents.find(student => {
            return student.name.includes(`${queryString}`)    
        })
        console.log(student)

        const studentName = document.createElement("h2")
        studentName.classList.add("students-name");
        studentName.textContent = student.name;

        const studentActor = document.createElement("p");
        studentActor.classList.add("students-actor");
        studentActor.textContent = student.actor;

        const studentHouse = document.createElement("p");
        studentHouse.textContent = student.house;

        const studentAncestry = document.createElement("p");
        studentAncestry.textContent = student.ancestry;

        const studentImage = document.createElement("img");
        studentImage.classList.add("students-image");
        studentImage.src = student.image;
        
        
        main.append(studentName);
        main.append(studentActor);
        main.append(studentHouse);
        main.append(studentAncestry)
        wrapper.append(studentImage);
       
        
    })
    