let nem = false;
let nev = document.getElementById("nev")
let datum = document.getElementById("szul")
let email = document.getElementById("email")
let leanyos = false

function SubmitForm() {

    if (nem && leanyos && nev.value != "" && datum.value != "" && email.value != "" && document.getElementById('lnev').value != "") {
        document.getElementById("siker").innerHTML = "<h1>SIKERES!!</h1>";
        document.getElementById("neverror").innerHTML = "";
        document.getElementById("daterror").innerHTML = "";
        document.getElementById("emailrror").innerHTML = "";
        document.getElementById("nemerror").innerHTML = "";
        document.getElementById('lneverror').innerHTML = ""
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

        if (document.getElementById('lnev').value == "") {
            document.getElementById('lneverror').innerHTML = "Töltsd ki";
        }else{
            document.getElementById('lnemerror').innerHTML = "";
        }

        if (nem == false) {
            document.getElementById("nemerror").innerHTML = "Tölsd ki!";
        }else{
            document.getElementById("nemerror").innerHTML = "";
        }
    }
}


document.getElementById("no").addEventListener("click", function() {
    nem = true;
    leanyos = true
    document.getElementById("leanyos").innerHTML = "<label for='leanyosnev' id='leanyosnev'>Leánykorinév: </label> <input type='text' id='lnev' placeholder='nev'>   <p id='lneverror'></p><br>"

    
})

document.getElementById("ferfi").addEventListener("click", function() {
     nem = true;
     leanyos = true
     document.getElementById("leanyos").innerHTML = ""
})