let links = document.getElementById("links")
let userData = document.getElementById("user_info")
let user = document.getElementById("user")

if(localStorage.getItem("username")){ 
    links.remove()
    userData.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
    user.style.textTransform = "capitalize"; 
    
}



let logOut = document.getElementById('logout').onclick = () =>{
     localStorage.clear()

    window.location = "register.html"

}   
 