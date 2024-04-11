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