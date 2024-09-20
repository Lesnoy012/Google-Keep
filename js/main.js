const formAddNote = document.querySelector("#formAddNote");
const inputNewNote = document.querySelector("#form__input");
const arrNotes = [];


formAddNote.addEventListener('submit', (event)=>{
    event.preventDefault();
    arrNotes.push(new NewNote(inputNewNote.value));
    console.log(arrNotes);
    formAddNote.reset();
})

class NewNote {
    constructor(title = '', text = '', date = '') {
        this.title = title;
        this.text = text;
        this.date = date;
    }
}

// arrNotes.push(new NewNote('Промисы JS', 'Прочитать документацию', '01.12.2005'));

// console.log(arrNotes[0].date);
// let html = `<div class="col">
//               <div class="card h-100">
//                 <div class="card-body">
//                   <h5 class="card-title">Card title</h5>
//                   <p class="card-text">
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This card has even longer
//                     content than the first to show that equal height action.
//                   </p>
//                 </div>
//                 <div class="card-footer">
//                   <small class="text-body-secondary" 
//                     >Last updated 3 mins ago</small
//                   >
//                 </div>
//               </div>
//             </div>`;

