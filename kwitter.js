username = document.getElementById("user_name").value;

function login(){
    localStorage.setItem("user_name" , username);
    console.log(username);
    window.location = "kwitter.html";
}