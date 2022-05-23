//watch
//doveva essere un conto alla rovescia
window.onload = setInterval (timer, 1000);

//funzione per mettere il secondo zero sulla sx quando i n sono inferiori a 10
//i dovrebbe essere il counter
function addZero (i) {
    if (i < 10) {
    i = "0" + i;
    }
    return i;
}

function timer () {
    var d = new Date ();
    var date = d.getDate ();
    var ora = addZero (d.getHours ());
    var min = addZero (d.getMinutes ());
    var sec = addZero (d.getSeconds ());
    document.getElementById ("timer").innerHTML = ora + ":" + min + ":" + sec;
}


//funzione di validazione del form
function validateForm () {
//variabili associate ai campi del form
//le var sono a scendere, similmente al css
var name = document.register.name.value;
var surname = document.register.surname.value;
var dni = document.register.dni.value;
var bday = document.register.bday.value;
var email = document.register.email.value;
var password = document.register.password.value;
var confirmpsw = document.register.confirmpsw.value;
var address = document.register.address.value;
var zip = document.register.zip.value;
var phone = document.register.phone.value;

//espressione regolare della mail con cui va checkkata quella inserita dall'utente
var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;

//ogni if fail check di un campo (manca quello della data, il più complesso)
if ((name == "") || (name == "undefined")) {  
    alert ("U have to insert a name");
    document.register.name.focus();
    return false;
}
else if ((surname == "") || (surname == "undefined")) {  
    alert ("U have to insert a surname");
    document.register.surname.focus();
    return false;
}
else if ((dni == "") || (dni == "undefined")) {  
    alert ("U have to insert a dni");
    document.register.dni.focus();
    return false;
}
else if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
    alert("U have to insert a correct e-mail address");
    document.register.email.focus();
    return false;
}
else if ((password == "") || (password == "undefined")) {
    alert("U have to insert a password");
    document.modulo.password.focus();
    return false;
}
else if ((confirmpsw == "") || (confirmpsw == "undefined")) {
    alert("U have to confirm ur password");
    document.modulo.conferma.focus();
    return false;
    }
else if (password != confirmpsw) {
    alert("The two password are different. Retry");
    document.register.conferma.value = "";
    document.register.conferma.focus();
    return false;
}
else if ((address == "") || (address == "undefined")) {  
    alert ("U have to insert an address");
    document.register.dni.focus();
    return false;
}
else if ((isNaN(zip)) || (phone == "") || (phone == "undefined")) {
    alert ("U have to insert a ZIP code. It has to be numeric");
    document.register.phone.value = "";
    document.register.phone.focus();
    return false;
}
else if ((isNaN(phone)) || (phone == "") || (phone == "undefined")) {
    alert ("U have to instert a number. It has to be numeric");
    document.register.phone.value = "";
    document.register.phone.focus();
    return false;
} 

else {
    document.register.submit();
    }
}


//tabella dinamica
const registerEl = document.getElementById('register');
const tableEl = document.querySelector('table');
//const prova = document.getElementById('prova');

function fillTable () {
    
    //funzione che evita l'invio al server
    //e.preventDefault();
    
    //variabili che recuperano il valore (grazie a .value) dall'html
    const n = document.getElementById('name').value;
    const s = document.getElementById('surname').value;
    const d = document.getElementById('dni').value;
    const b = document.getElementById('bday').value;
    const em = document.getElementById('email').value;
    const p = document.getElementById('password').value;
    const a = document.getElementById('address').value;
    const z = document.getElementById('zip').value;
    const ph = document.getElementById('phone').value;

    if ((ph % 2) == 0) {
        tableEl.innerHTML += `
            <tbody style="border: 1px; border-style: solid; border-color: aqua">
                <tr><td>${n}</td></tr>
                <tr><td>${s}</td></tr>
                <tr><td>${d}</td></tr>
                <tr><td>${b}</td></tr>
                <tr><td>${em}</td></tr>
                <tr><td>${p}</td></tr>
                <tr><td>${a}</td></tr>
                <tr><td>${z}</td></tr>
                <tr><td>${ph}</td></tr>
            </tbody>
        `;
    } else {
        tableEl.innerHTML += `
            <tbody style="border: 1px; border-style: solid; border-color: red">
                <tr><td>${n}</td></tr>
                <tr><td>${s}</td></tr>
                <tr><td>${d}</td></tr>
                <tr><td>${b}</td></tr>
                <tr><td>${em}</td></tr>
                <tr><td>${p}</td></tr>
                <tr><td>${a}</td></tr>
                <tr><td>${z}</td></tr>
                <tr><td>${ph}</td></tr>
            </tbody>
        `; 
    };
}