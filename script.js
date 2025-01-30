let nem = false;
let nev = document.getElementById("nev")
let datum = document.getElementById("szul")
let email = document.getElementById("email")

function SubmitForm() {
    if (nem && nev.value != "" && datum.value != "" && email.value != "") {
        document.getElementById("siker").innerHTML = "<h1>SIKERES!!</h1>";
        document.getElementById("neverror").innerHTML = "";
        document.getElementById("daterror").innerHTML = "";
        document.getElementById("emailrror").innerHTML = "";
        document.getElementById("nemerror").innerHTML = "";
    }
    else{
        if (nev.value == "") {
            document.getElementById("neverror").innerHTML = "Tölsd ki!";
        }else{
            document.getElementById("neverror").innerHTML = "";
        }

        if (datum.value == "") {
            document.getElementById("daterror").innerHTML = "Tölsd ki!";
        }else{
            document.getElementById("daterror").innerHTML = "";
        }

        if (email.value == "") {
            document.getElementById("emailrror").innerHTML = "Tölsd ki!";
        }else{
            document.getElementById("emailrror").innerHTML = "";
        }

        if (nem == false) {
            document.getElementById("nemerror").innerHTML = "Tölsd ki!";
        }else{
            document.getElementById("nemerror").innerHTML = "";
        }
    }
}


document.getElementById("no").addEventListener("click", function() {

    document.getElementById("neves").innerText = "Leánykori név: "
    nem = true;
    
})

document.getElementById("ferfi").addEventListener("click", function() {
    document.getElementById("neves").innerText = "Név: "
     nem = true;
})