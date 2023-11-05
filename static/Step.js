// Code Box Generator
var addCode = document.querySelector(".add-code-btn");
var CodeBox = document.querySelector(".home_cont");
let Code = document.querySelectorAll(".add-code");
var out = document.querySelectorAll(".output");
addCode.addEventListener('click', () => {
    let inputBox = document.createElement("textarea");
    let outBox = document.createElement("textarea");
    outBox.className = "output";
    outBox.id = "output";
    inputBox.className = "add-code";
    inputBox.id = "code";
    inputBox.placeholder = "/*Insert your code here...*/";
    inputBox.setAttribute("contenteditable", "true");
    CodeBox.appendChild(inputBox);
    outBox.setAttribute("conteneditable","true");
    CodeBox.appendChild(outBox);
})
// Note Box Generator
var addNote = document.querySelector(".add-note-btn");
var NoteBox = document.querySelector(".home_cont");
let Note = document.querySelectorAll(".add-note");

addNote.addEventListener('click',()=>{
    let inputBox = document.createElement("textarea");
    inputBox.className = "add-note";
    inputBox.placeholder = "/* Write your note here....*/"
    inputBox.setAttribute("contenteditable","true");
    NoteBox.appendChild(inputBox);
})
// Menu handling
var icon = document.querySelector(".fa-bars-staggered");
var menu = document.querySelector(".menu");
var home_cont = document.querySelector(".home_cont");
var menu_link = document.querySelector(".menu-link");
var m = 0;
icon.addEventListener('click',()=>{
    if(m==0)
    {
        menu.style.width = "5%";
        home_cont.style.width = "95%";   
        menu_link.style.display ="none";
        m=1;
    }
    else{
        menu.style.width = "15%";
        home_cont.style.width = "85%";
        menu_link.style.display ="block";
        m = 0;
    }
})

//async function to compile
document.getElementById('compile-button').addEventListener('click', async (event) => {
    event.preventDefault();    

    const code = document.getElementById('code').value;
    const compiler = document.getElementById('compiler').value;
    const language = document.getElementById("language").value;

    const response = await fetch('/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, compiler , language  })
    });

    const result = await response.text();
    document.getElementById('output').innerText = result;
});

