//**************to do********** */
document.getElementById("todo1").onclick = function Todo() {

    document.getElementById("tache1").classList.remove("bg-warning")
    document.getElementById("tache1").classList.remove("bg-success")
    document.getElementById("tache1").classList.add("bg-danger")

}
document.getElementById("todo2").onclick = function Todo() {

    document.getElementById("tache2").classList.remove("bg-warning")
    document.getElementById("tache2").classList.remove("bg-success")
    document.getElementById("tache2").classList.add("bg-danger")

}
document.getElementById("todo3").onclick = function Todo() {

    document.getElementById("tache3").classList.remove("bg-warning")
    document.getElementById("tache3").classList.remove("bg-success")
    document.getElementById("tache3").classList.add("bg-danger")

}


//**************doing********** */
document.getElementById("doing1").onclick = function Doing() {
    document.getElementById("tache1").classList.remove('bg-danger')
    document.getElementById("tache1").classList.remove('bg-success')
    document.getElementById("tache1").classList.add('bg-warning')
}
document.getElementById("doing2").onclick = function Doing() {
    document.getElementById("tache2").classList.remove('bg-danger')
    document.getElementById("tache2").classList.remove('bg-success')
    document.getElementById("tache2").classList.add('bg-warning')
}
document.getElementById("doing3").onclick = function Doing() {
    document.getElementById("tache3").classList.remove('bg-danger')
    document.getElementById("tache3").classList.remove('bg-success')
    document.getElementById("tache3").classList.add('bg-warning')
}

//**************done********** */
document.getElementById("done1").onclick = function Done() {
    document.getElementById("tache1").classList.remove('bg-warning')
    document.getElementById("tache1").classList.remove('bg-danger')
    document.getElementById("tache1").classList.add('bg-success')
}
document.getElementById("done2").onclick = function Done() {
    document.getElementById("tache2").classList.remove('bg-warning')
    document.getElementById("tache2").classList.remove('bg-danger')
    document.getElementById("tache2").classList.add('bg-success')
}
document.getElementById("done3").onclick = function Done() {
    document.getElementById("tache3").classList.remove('bg-warning')
    document.getElementById("tache3").classList.remove('bg-danger')
    document.getElementById("tache3").classList.add('bg-success')
}
//**************créationd de tâches********** */
function Taches() {

    document.querySelector('#list').innerHTML +=
        `<form name="tache1" class="m-3 p-3 d-flex justify-content-center">
             <input type="text" class="form-control bg-danger text-white" placeholder="saisir une tâche à faire"
             id="tache">
         <input type="button" class="btn btn-danger" onclick="Todo()" value="to do" name="todo">
         <input type="button" class="btn btn-warning" onclick="Doing()" value="doing">
         <input type="button" class="btn btn-success" onclick="Done()" value="done">
             </form>`
}
 