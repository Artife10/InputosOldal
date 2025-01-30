let nem = false;
let nev = document.getElementById("nev")
let datum = document.getElementById("szul")
let email = document.getElementById("email")

function SubmitForm() {
    if (nem && nev.value != "" && datum.value != "" && email.value != "") {
        document.getElementById("siker").innerHTML = "<h1>SIKERES!!</h1>";
    }
    else{
        alert("Töltsd ki az űrlapot")
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