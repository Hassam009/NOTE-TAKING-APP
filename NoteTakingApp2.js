// Select the button and main div
const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');

// Function to save notes to localStorage
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(note => {
        data.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(data));
};

// Function to add a new note
const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="fas fa-trash"></i>
            <i class="fas fa-save"></i>
        </div>
        <textarea cols="30" rows="10">${text}</textarea>
    `;

    // Event listener for saving note on clicking save icon
    note.querySelector(".fa-save").addEventListener("click", function() {
        saveNotes();
    });

    // Event listener for saving note on textarea focusout
    note.querySelector("textarea").addEventListener("focusout", function() {
        saveNotes();
    });

    // Append note to main div
    main.appendChild(note);
};

// Function to load notes from localStorage
const loadNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
        savedNotes.forEach(note => {
            addNote(note);
        });
    } else {
        // If no saved notes, add an empty note by default
        addNote();
    }
};

// Add event listener to button for adding a new note
addBtn.addEventListener('click', function() {
    addNote();
});

// Add event listener to main div to handle clicks on trash icons
main.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash')) {
        const note = event.target.parentElement.parentElement;
        note.remove();
        saveNotes(); // Save notes after removing a note
    }
});

// Load notes when the page loads
window.addEventListener('load', loadNotes);
