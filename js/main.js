const formAddNote = document.querySelector("#formAddNote");
const inputNewNote = document.querySelector("#form__input");
const cardsForm = document.querySelector("#cardsForm");

class NewNote {
    constructor(title = '', text = '', date = '') {
        this.title = title;
        this.text = text;
        this.date = date;
    }
}

const arrNotes = [new NewNote("Callback", "Прочитать док-ию", new Date ())];

//Рендерим все карточки, уже находящиеся в массиве.
arrNotes.forEach((item) => {
    let cardHTML = `<div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">
                  ${item.text}
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                  ${item.date}
                  </small>
                </div>
              </div>
            </div>`
    cardsForm.insertAdjacentHTML("afterbegin", cardHTML);
})

formAddNote.addEventListener('submit', (event)=>{
    // Добавляем новую карточку в массив
    event.preventDefault();
    arrNotes.push(new NewNote(inputNewNote.value, '', new Date ()));
    formAddNote.reset();

    // Рендерим новую карточку на странице, добавляя её в начало
    const lastCardIndex = arrNotes.length - 1;

    let cardHTML = `<div class="col">
              <div class="card h-100">
                <div class="card-body"> 
                  <h5 class="card-title">${arrNotes[lastCardIndex].title}</h5>
                  <input class="card-text" id = "inputCardText${lastCardIndex}">
                  ${arrNotes[lastCardIndex].text}
                  </input>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                  ${new Date - arrNotes[lastCardIndex].date}
                  minutes ago
                  </small>
                </div>
              </div>
            </div>`
    cardsForm.insertAdjacentHTML("afterbegin", cardHTML);
    const inputCardText = document.querySelector(`#inputCardText${lastCardIndex}`);
    inputCardText.focus();

    inputCardText.addEventListener("keydown", (event)=>{
        if(event.keyCode == 13) {
            inputCardText.disabled = true;
        }
    })
})

//v 0.3
