const signup = document.querySelector('#signup')
signup.addEventListener('submit',(e)=>{
    e.preventDefault()
  

const username = document.querySelector('#username').value
const email = document.querySelector('#email').value
const mobile = document.querySelector('#mobile').value
const city = document.querySelector('#city').value


const address = document.querySelector('#address').value

const gender = document.querySelector('input[name="gender"]:checked')
const hobbies = document.querySelectorAll('#hobbies:checked')




//all error tages
const username_error = document.querySelector('#username_error')
const email_error = document.querySelector('#email_error')
const mobile_error = document.querySelector('#mobile_error')
const city_error = document.querySelector('#city_error')
const gender_error = document.querySelector('#gender_error')
const hobbies_error = document.querySelector('#hobbies_error')
const address_error = document.querySelector('#address_error')


let arr = []
hobbies.forEach((hobby)=>{
    arr.push(hobby.value)
});


if (!username.trim()){
    username_error.innerHTML ="please enter Your Name"
}else{
    username_error.innerHTML = ""
}


if(!email.trim()){
    email_error.innerHTML = "please enter Your email!"
}else{
    email_error.innerHTML = ""
}


if(!mobile.trim()){
    mobile_error.innerHTML = "please enter Your Number!"
}else{
    mobile_error.innerHTML = ""
}

if(!city.trim()){
    city_error.innerHTML = "please enter Your city Name!"
}else{
    city_error.innerHTML = ""
}

if(!gender){
    gender_error.innerHTML = "please enter Your gender!"
}else{
    gender_error.innerHTML = ""
}

if(hobbies.length>0){
    hobbies_error.innerHTML = ""
}else{
   
     hobbies_error.innerHTML = "please enter Your hobbies!"
}


if(!address.trim()){
    address_error.innerHTML = "please enter Your address!"
}else{
    address_error.innerHTML = ""
}

})
