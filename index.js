function show() {
    document.getElementById('pop').style.display='block';
    return false;
}
function hide() {
    document.getElementById('pop').style.display='none';
    return false;
}
function init()
{
    let oA = document.getElementById('button');

    oA.onclick = function()
    {
        verifMail();
        verifPassword();
        return false;
    };
}

function surligne(erreur) {

    if(erreur)
    {
        document.getElementById('email').style.backgroundColor = "#fba";
        document.getElementById('alerte').innerHTML = "Vos renseignement sont invalides."
    }
    else
    {
        document.getElementById('email').style.backgroundColor = "#00FF00";
    }
}

function verifPassword() {
    let pass = document.getElementById('password').value;

    if (pass === "")
    {
        document.getElementById('alerte').innerHTML = "Veuillez rentrez un mot de passe.";
        return false;
    }
    else
    {
        if (verifMail())
        {
            document.getElementById('alerte').innerHTML = "Vos renseignement sont valides.";
        }
    }
}


function verifMail() {

    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    if(!regex.test(document.getElementById('email').value))

    {
        surligne(true);
        return false;
    }
    else
    {
        surligne (false);
        return true;
    }
}

function close()
{
    let set = document.getElementById('close');

    set.onclick = function()
    {
        hide();
        return false;
    };
}

function open()
{
    let set = document.getElementById('open');

    set.onclick = function()
    {
        show();
        return false
    };
}


window.onload = function() { init(); open(); close() };
