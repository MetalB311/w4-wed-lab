let getResidents = document.querySelector('button')
let charContainer = document.querySelector('h2')

function getResBut() {
    event.preventDefault()
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {
        // console.log(response.data.results[0].residents)
        for (let i=0; i < response.data.results[0].residents.length; i++) {
            // console.log(response.data.results)
            axios.get(response.data.results[0].residents[i])
            .then((response) => {
                console.log(response.data.name)
                // .then((response) =>{
                    createName(response.data)
            // })
                
            })
        }
    })
}
function createName (char){
let charCard = document.createElement('h2')
 charCard.innerHTML = `<h5>hello ${char.name}</h5>`
 charContainer.appendChild(charCard)
}
getResidents.addEventListener('click', getResBut)
