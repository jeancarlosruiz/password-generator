let passGen1 = document.getElementById("passGen1-el");
let passGen2 = document.getElementById("passGen2-el");
let passGen3 = document.getElementById("passGen3-el");
let passGen4 = document.getElementById("passGen4-el");

function getPassword(){
    let chars = "0123456789abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=<>:;{}[]";
    let password = ""

    for (let i = 0; i <= 12; i++){
        let randomNumber = Math.floor(Math.random() * chars.length + 1)
        password += chars.charAt(randomNumber)
    }

    return password
}


function randomPass(){
    passGen1.value = getPassword()
    passGen2.value = getPassword()
    passGen3.value = getPassword()
    passGen4.value = getPassword()
}
