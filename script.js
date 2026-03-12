const theme = document.getElementById("themeColor")

theme.addEventListener("input",()=>{

document.documentElement.style.setProperty(
"--main",
theme.value
)

})


function login(){

const email = document.getElementById("email").value
const videos = document.getElementById("videos")

const clients = {

"client@gmail.com":[
"video1.mp4",
"video2.mp4"
],

"test@gmail.com":[
"video3.mp4"
]

}

videos.innerHTML=""

if(clients[email]){

clients[email].forEach(v=>{

videos.innerHTML+=`

<video controls src="${v}"></video>

`

})

}

else{

videos.innerHTML="No folder found."

}

}
