import { createEntry, deleteEntry } from "./controller.js";

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const addBtn = document.getElementById("addBtn");
    const timeline = document.getElementById("timeline");
    const themeBtn = document.getElementById("themeBtn");

    addBtn?.addEventListener("click", () => {
      const rawValue = input.value;

      if (!rawValue || !rawValue.trim()) {
        alert("Please enter a valid value");
        return;
      }

      const result = createEntry(rawValue.trim());

      if (!result.success) {
        alert(result.message);
        return;
      }

      render(result.entry);
      input.value = "";
    });

    // themeBtn?.addEventListener("click", () => {
    //   document.body.classList.toggle("dark");
    // });

    function render(entry) {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
      <div class="user">👤 ${entry.user}</div>
      <div class="value">${entry.value}</div>
      <div class="meta">${entry.date} • ${entry.time}</div>
      

      <div class="actions">
        <button class="deleteBtn">🗑 Delete</button>
     </div>
    `;

      const deleteBtn = div.querySelector(".deleteBtn");

      deleteBtn.addEventListener("click", () => {
        if (window.confirm("Are you sure you want to delete this entry?")) {
          deleteEntry(entry.value);
          div.remove();
        }
      });

      timeline.prepend(div);
    }
  });
}
