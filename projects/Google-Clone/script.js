/* Focus on textarea */
const searchbar = document.getElementById("search-bar");
const textarea = document.getElementById("search-input");
searchbar.addEventListener('click', () => {
  textarea.focus();
})

/* Enter listener */
textarea.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search();
  }
})

/* Search function */
function search() {
  const query = textarea.value;
  if (query != "") {
    window.location.href = "https://www.google.com/search?q=" + query;
  }
}