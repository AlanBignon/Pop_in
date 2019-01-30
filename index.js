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
        document.getElementById('button').style.backgroundColor = ''; // ajout du changement de couleur quand les infos donnés snt fausses
        return false;
    }
    else
    {
        if (verifMail())
        {
            document.getElementById('alerte').innerHTML = "Vos renseignement sont valides.";
            document.getElementById('button').style.backgroundColor = 'grey'; // ajout de la couleur grise au bouton quand les données rentrés sont bonnes
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

    set.addEventListener("click", function() {
        hide();
        return false;
    })
}

function open()
{
    let set = document.getElementById('open');

    set.addEventListener("click", function() {
        show();
        return false
    })
}

//changement du window.onload

window.addEventListener('load', function (){
    init();
    open();
    close();
});
