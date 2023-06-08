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
function Taches() {

    let tache0 = document.querySelector('#tache0').value

    document.querySelector('#form2').innerHTML +=
        `<div class="d-flex justify-content-around align-items-center my-2 rounded border border-danger">
        ${tache0}
        <input type="button" class="btn btn-danger todo" onclick="Todo()" value="to do">
        <input type="button" class="btn btn-warning doing"  onclick="Doing()"value="doing">
        <input type="button" class="btn btn-success done" onclick="Done()" value="done">
    </div>`

}