const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const gameCode=()=>{
    const html=`<div class="game_zone">
    <div id="game_moves">
        <img src="player.png" alt="user" id="computer">
        <img src="player.png" alt="user" id="user">
    </div>
    <div class="btn-group choices" role="group" aria-label="Basic example" id="user_choice">
        <button type="button" class="btn btn-primary" onclick="Snake()">Snake</button>
        <button type="button" class="btn btn-primary" onclick="Water()">Water</button>
        <button type="button" class="btn btn-primary" onclick="Gun()">Gun</button>
    </div>
    <p id="message"><b></b></p>
    <div id="return">
        <button type="button" class="btn btn-danger" onclick="startPage()" id="return">Return To START MENU</button>
    </div>
    </div>`
    document.getElementById("start").remove();
    document.body.insertAdjacentHTML("beforeend",html);  
}

const startPage=()=>{
    const html=`<button type="button" class="btn btn-danger" id="start" onclick="gameCode()">START GAME</button>`
    document.getElementsByClassName("game_zone")[0].remove();
    document.body.insertAdjacentHTML("beforebegin",html);
}

const Snake=()=>{
    let d=document.getElementById("user");
    d.setAttribute("src","snake.png");
    d.setAttribute("alt","snake");
    d=document.getElementsByClassName("game_zone")[0];
    d.getElementsByClassName("choices")[0].remove();
    const html=`<button type="button" class="btn btn-primary" id="user_choice" onclick="playAgain()">Play Again</button>`
    d.insertAdjacentHTML("beforeend",html);
    document.getElementById("user_choice").style.left="85%";
    computerChoice("snake.png");
}

const Water=()=>{
    let d=document.getElementById("user");
    d.setAttribute("src","water.png");
    d.setAttribute("alt","water");
    d=document.getElementsByClassName("game_zone")[0];
    d.getElementsByClassName("choices")[0].remove();
    const html=`<button type="button" class="btn btn-primary" id="user_choice" onclick="playAgain()">Play Again</button>`
    d.insertAdjacentHTML("beforeend",html);
    document.getElementById("user_choice").style.left="85%";
    computerChoice("water.png");
}

const Gun=()=>{
    let d=document.getElementById("user");
    d.setAttribute("src","gun-reverse.png");
    d.setAttribute("alt","gun-reverse");
    d=document.getElementsByClassName("game_zone")[0];
    d.getElementsByClassName("choices")[0].remove();
    const html=`<button type="button" class="btn btn-primary" id="user_choice" onclick="playAgain()">Play Again</button>`
    d.insertAdjacentHTML("beforeend",html);
    document.getElementById("user_choice").style.left="85%";
    computerChoice("gun-reverse.png");
}

const playAgain=()=>{
    const html=`<div class="btn-group choices" role="group" aria-label="Basic example" id="user_choice">
    <button type="button" class="btn btn-primary" onclick="Snake()">Snake</button>
    <button type="button" class="btn btn-primary" onclick="Water()">Water</button>
    <button type="button" class="btn btn-primary" onclick="Gun()">Gun</button>
    </div>`
    let d=document.getElementById("user");
    d.setAttribute("src","player.png");
    d.setAttribute("alt","user");
    d=document.getElementById("computer");
    d.setAttribute("src","player.png");
    d.setAttribute("src","player.png");
    document.getElementById("user_choice").remove();
    document.getElementsByClassName("game_zone")[0].insertAdjacentHTML("beforeend",html);
}

const computerChoice=(u)=>{
    const moves={
        0: "snake-reverse.png",
        1: "gun.png",
        2: "water.png"
    }
    let n=Math.round(Math.random()*2);
    let c=moves[n];
    document.getElementById("computer").setAttribute("src",c);
    const html=``;
    if(u=="gun-reverse.png"&&c=="snake-reverse.png")
    {document.getElementById("message").textContent="You Won!!!"
    document.getElementById("message").style.left="44%"}
    else if(u=="water.png"&&c=="gun.png")
    {document.getElementById("message").textContent="You Won!!!"
    document.getElementById("message").style.left="44%"}
    else if(u=="snake.png"&&c=="water.png")
    {document.getElementById("message").textContent="You Won!!!"
    document.getElementById("message").style.left="44%"}
    else if(u=="water.png"&&c=="water.png")
    {document.getElementById("message").textContent="OOPs!! A draw"
    document.getElementById("message").style.left="42%"}
    else if(u=="gun-reverse.png"&&c=="gun.png")
    {document.getElementById("message").textContent="OOPs!! A draw"
    document.getElementById("message").style.left="42%"}
    else if(u=="snake.png"&&c=="snake-reverse.png")
    {document.getElementById("message").textContent="OOPs!! A draw"
    document.getElementById("message").style.left="42%"}
    else
    {
        document.getElementById("message").textContent="Better luck next time"
        document.getElementById("message").style.left="39%"

    }
}