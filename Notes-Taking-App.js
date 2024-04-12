//NOW FIRST WE WILL SELECT A BUTTON BY QUERY SELECTOR

const addBtn=document.querySelector('#addBtn')

const main= document.querySelector('#main')
addBtn.addEventListener(
    'click', 
    function(){
        addNote();
    }
)

const addNote=()=>{
    const note=document.createElement("div");
    note.classList.add("note")
     note.innerHTML=`
     <div class="tool">
                <i class="fas fa-trash"></i>
                <i class="fas fa-save"></i>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
     `;

     main.appendChild(note)
}


// Select the trash icons using querySelectorAll
const trashIcons = document.querySelectorAll('.fa-trash');

// Loop through each trash icon and add a click event listener
trashIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Get the parent note element of the clicked trash icon
        const note = this.parentElement.parentElement;

        // Remove the note from the DOM
        note.remove();
    });
});

// Add an event listener to the main div to handle clicks on trash icons
main.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash')) {
        // Get the parent note element of the clicked trash icon
        const note = event.target.parentElement.parentElement;

        // Remove the note from the DOM
        note.remove();
    }
});

