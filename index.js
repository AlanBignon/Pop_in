function pop(div) {
    document.getElementById(div).style.display='block';
    return false;
}
function hide(div) {
    document.getElementById(div).style.display='none';
    return false;
}



function surligne(champ, erreur) {

    if(erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}


function verifMail(champ) {

    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    if(!regex.test(champ.value))

    {
        surligne(champ, true);
        return false;
    }

    else
    {
        surligne(champ, false);
        return true;

    }
}
