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

const select = document.querySelector("#name")
const form = document.forms.input

const hogwartsStudentsApiUrl = `http://hp-api.herokuapp.com/api/characters/students`

fetch(hogwartsStudentsApiUrl)
    .then(response => response.json())
    .then(allHogwartsStudents => {
        allHogwartsStudents.map(student => {
            const option = document.createElement("option")
            option.textContent = `${student.name}`
            option.value = `${student.name}`
            option.name = `${student.name}`
            return option
        }).forEach(option => {
            select.append(option)
        })
    })

    function handleSubmit(event) {
        event.preventDefault()
    
        const formData = new FormData(event.target)
        const asString = new URLSearchParams(formData).toString()
        window.location.href = `students.html?${asString}`
    }
    
    form.addEventListener("submit", handleSubmit)