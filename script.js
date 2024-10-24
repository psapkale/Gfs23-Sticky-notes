const text = document.getElementById("text");
const color = document.getElementById("color");
const container = document.getElementById("notes__container");
const no__text = document.getElementById("notesNotAdded");
const createBtn = document.getElementById("create__note");

function createNote() {
   if (text.value === "") {
      alert("You can write the note for later");
      return;
   }
   if (no__text) no__text.remove();

   const note = document.createElement("div");
   note.classList.add("note");
   note.style.backgroundColor = color.value;
   const content = document.createElement("h3");
   content.innerText = text.value;
   content.style.display = "block";
   const deleteBtn = document.createElement("button");
   deleteBtn.innerText = "X";
   deleteBtn.addEventListener("click", () => deleteBtn.parentElement.remove());

   note.appendChild(content);
   note.appendChild(deleteBtn);

   container.appendChild(note);
}

createBtn.addEventListener("click", createNote);
