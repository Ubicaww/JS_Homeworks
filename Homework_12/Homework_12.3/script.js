const form = document.querySelector(".task-form");
const input = document.querySelector(".task-input");
const list = document.querySelector(".task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.classList.add("task-item");

  li.innerHTML = `${text} <button class="delete-btn">Delete</button>`;

  list.appendChild(li);
  input.value = "";
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});