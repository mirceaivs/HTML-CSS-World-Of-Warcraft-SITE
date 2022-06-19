
var url = "http://localhost:3000/users";

function sign_up() {
    let email = document.getElementById('email-r').value;
    let username = document.getElementById('username-r').value;
    let password = document.getElementById('password-r').value;
    let id = Math.floor(Math.random() * 100);


    let user =
    {
        id: id,
        username: username,
        password: password,
        email: email,
    };
    putData(user);
    location.reload();
}




async function log_in() {
    sessionStorage.clear();
    let email = document.getElementById("email-l").value;
    let password = document.getElementById("password-l").value;

    

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status === 200) {
            let obj = JSON.parse(xhr.response);
            let found = 0;
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].email == email && obj[i].password == password) {
                    found = 1;
                    sessionStorage.setItem('auth', '1');
                    sessionStorage.setItem('ID', obj[i].id);
                    sessionStorage.setItem('username', obj[i].username);
                    location.reload();
                    break;
                }
            }

            if (found == 0) {
                alert("Parola introdusa incorect");
                location.reload();
            }



        } else {
            console.warn('request_error');
        }
    };
    console.log("succes");

    xhr.send();
}


function redirect_dashboard() {
    if (sessionStorage.getItem('auth') == 1) {
        location.href="/dashboard.html";
    }

}





function togglePopup() {
    let email = document.getElementById("email-l");
    let password = document.getElementById("password-l");
    email.value = '';
    password.value = '';
    document.getElementById("popup-1")
        .classList.toggle("active");
}

function togglePopup2() {
    let email = document.getElementById("email-r");
    let password = document.getElementById("password-r");
    let username = document.getElementById("username-r");
    email.value = '';
    username.value = '';
    password.value = '';

    document.getElementById("popup-2").classList.toggle("active");
}

function log_out()
{
    sessionStorage.clear();
    location.href="/index.html";
}

function welcome()
{
    let div=document.getElementById("welcome-txt");
    let user=sessionStorage.getItem('username');
    user.style.fontStyle="italic;";
    div.innerHTML="Logged in as:   "+ user;
    
}
