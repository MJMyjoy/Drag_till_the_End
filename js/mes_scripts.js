let game = document.getElementById('game');
let win = document.getElementById("win");
let lose = document.getElementById("lose");
let accueil = document.getElementById('accueil');

let enfants = document.querySelectorAll("#game div");
let result_win = document.querySelector('#win h2 span');
let result_lose = document.querySelector('#lose h2 span');
let result = document.querySelector("section");

let niveau = document.querySelector("aside");
let mur_gauche = document.getElementById("wall-left");
let mur_droit = document.getElementById("wall-right");
let recommencer = document.getElementById("restart");

let original = document.getElementById("original");
let regular = document.getElementById("regular");
let extended = document.getElementById("extended");

let score =0;

for (let i=0; i<enfants.length; i++)
{
    enfants[i].onmousemove=function()
    {
        score--;
    }
}


win.onmousemove=function()
    {
        score--;
    }

lose.onmouseout = function()
{
  score=0;
}





game.onmousemove = function() {
  score++;
  result.textContent = Math.floor(score/20);
  result_win.textContent = result.textContent;
  result_lose.textContent = result.textContent;

};



original.onclick = function ()
{
    mur_gauche.className = "original-left";
    mur_droit.className = "original-right";
    niveau.style.opacity="1";
    niveau.textContent = "Original";
    accueil.style.opacity = "0";
    game.style.display ="block";
    recommencer.style.opacity="1";
}


regular.onclick = function ()
{
    mur_gauche.className = "regular-left";
    mur_droit.className = "regular-right";
    niveau.style.opacity="1";
    niveau.textContent = "Regular";
    accueil.style.opacity = "0";
    game.style.display ="block";
    recommencer.style.opacity="1";
}


extended.onclick = function ()
{
    mur_gauche.className = "extended-left";
    mur_droit.className = "extended-right";
    niveau.style.opacity="1";
    niveau.textContent = "Extended";
    accueil.style.opacity = "0";
    game.style.display ="block";
    recommencer.style.opacity="1";

}


recommencer.onclick = function ()
{
    game.style.display ="none"; 
    niveau.style.opacity="0";
    accueil.style.opacity = "1";
    recommencer.style.opacity="0";
    score=0;
}

