//selection de tout les boutons /
let done = document.querySelectorAll(".done");
let doing = document.querySelectorAll(".doing");
let todo = document.querySelectorAll(".todo");
let trash = document.querySelectorAll(".btn")
//*********bouton dtodo*****/

function Todo() {

    event.target.parentNode.style.background = "#dc3545"

}
//*********bouton doing*****/

function Doing() {
    event.target.parentNode.style.background = "#ffc107"
}

//*********boutton done*****/

function Done() {
    event.target.parentNode.style.background = "#198754"
}

//**************création de tâches********** */
function Taches(e){
    event.preventDefault()
    addToDo()
}

function addToDo() {
    let tache0 = document.getElementById('tache0')
    
    
    document.querySelector('#form2').innerHTML +=
        `<div class="d-flex justify-content-around align-items-center w-75 mx-auto my-2 p-2 rounded border border-danger">
        ${tache0.value}
        <input type="button" class="btn btn-danger todo" onclick="Todo()" value="to do">
        <input type="button" class="btn btn-warning doing" onclick="Doing()" value="doing">
        <input type="button" class="btn btn-success done" onclick="Done()" value="done">
    </div>`
    tache0.value = " "
}

//********gestion du clavier*****/
window.addEventListener("keydown", function(e){
    
       if( e.key == "Enter"){
        
           Taches()
           event.preventDefault();
           tache0 = ""
       }
       
       })