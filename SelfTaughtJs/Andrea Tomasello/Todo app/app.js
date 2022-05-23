// 1. Prendo gli elementi dall'html (in questo caso va bene il const)
// devo fare riferimento al mio input nell'html
const taskInput = document.querySelector('#input'); // questo è semplicemente il selettore
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');
// il metodo .querySelector è uguale a .getElementById

// (lui non aggiunge l'array per lo stato)

// 2. Dobbiamo "ascoltare" per il click del bottone add (sarebbe la fase dei lister)
inputButton.addEventListener('click', addTask);
// la cosa sopra si legge: aggiungo un event listener alla costante inputButton che quando
// effettuo un click ritorna la funzione addtask
// (sotto) listener per il tasto delete
taskList.addEventListener('click', removeTask);
// il listener

// 3. creo la funzione che viene richiamata sopra
// quando un bottone viene cliccato riceve un parametro nella funzione, dentro ()
// è convenzione chiamare questo parametro 'e'
// facendo un console.log di 'e' mi vengono restituiti tutti i dati relativi all'evento
function addTask(e) {
    // if (il valore di taskInput è uguale a vuoto), {allora restituisci un alert
    // che dica ('scrivi qualcosa')} 
    if (taskInput.value === "") {
        alert('scrivi qualcosa')
    }

    // voglio che nell'ul task-list si creino dei list items quando js lavora
    // questo è il metodo, e nelle () specifico il tag
    const li = document.createElement('li');
    li.className = 'task';
    // metodo che mi permette di inserire qualcosa nel li: .appendChild
    // senza document.createTextNode, js inserisce ma è visibile solo a console
    li.appendChild(document.createTextNode(taskInput.value));

    // creare x per eliminare
    // creare link
    const link = document.createElement('a')
    // aggiungo classe a <a>
    link.className = "delete-todo"
    // aggiungi x all' <a>
    link.innerHTML = '<h3>X</h3>'
    // mettere <a> nel <li>
    li.appendChild(link);
    // mettere <li> dentro <ul>
    taskList.appendChild(li);
    
    // fare in modo che il campo testo si pulisca
    taskInput.value = "";
    
    // metodo che permette di prevenire comportamenti anomali che possono accadere
    // durante/prima il click del bottone
    e.preventDefault()
};

// cliccare sulla x e rimuovere i todo
function removeTask(e) {
    // vogliamo targettizzare la x ma dobbiamo anche capire dove si trova
    // dobiamo risalire alla posizione
    // stampa a schermo quello che clicco
    // console.log(e.target...)
    // es: console.log(e.target.parentElement.parentElement)

    // t: se l'elemento che contiene x ha una classe di delete-todo, lo vogliamo cancellare
    if (e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}


