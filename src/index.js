document.addEventListener('DOMContentLoaded',() => {


//Challenge 1
// Show the random dogs on DOM
const imgDiv = document.getElementById("dog-image-container")
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(resp => resp.json())
.then(data =>{
    (data.message).forEach(dog => {
const img = document.createElement('img')

img.src = dog
img.width = 300
img.height = 300
img.style.marginRight = '10px'
img.style.border= 'thick solid black'
imgDiv.appendChild(img)
    })
})


//Challenge 2
//Show list of Dog breeds
const ulBreed = document.getElementById('dog-breeds')

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(data => {

   let dogBreeds =  Object.keys(data.message)

   dogBreeds.forEach(dogBreed => {
    const li = document.createElement('li')
    li.innerText = dogBreed
    li.style.cursor = 'pointer'
    li.style.margin = '10px'


//Challenge 3
//clicking dog li changes color
li.addEventListener('click',() => {
    li.style.color = 'red'

})

    ulBreed.appendChild(li)
   })


//Challenge 4
//Filter according to first character
   const select = document.querySelector('select')

    const lis = document.querySelectorAll('li')


    select.addEventListener('change', filterDogs)

//Filters dogs shown in DOM using first letter
    function filterDogs (){
    
        lis.forEach(li => {
let liFirstChar = (li.innerText).substring(0,1)
li.style.display = ''
        if(select.value !== liFirstChar){
            li.style.display = "none"
        }
        })
    }

})

})