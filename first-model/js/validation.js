function inputValidation(){

    if(nameValidation() && emailValidation()){
        window.location.replace("./confirm.html");
    }
}

var emailValidation = function (){
    var emailValue = document.getElementById('emailInput').value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("email inválido");
        return false;
    }
}

var nameValidation = function (){
    var nameValue = document.getElementById('nameInput').value;

    if(nameValue.length >= 3) return true
}