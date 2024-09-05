const searchInput = document.querySelector(".search-input");
const searchItems = document.querySelectorAll(".font-list-item");

function searchFonts() {
  const searchQuery = searchInput.value.toLowerCase();
  searchItems.forEach(function (item) {
  const text = item.dataset.tag.toLowerCase();
    if (text.includes(searchQuery)) {
      item.classList.add("d-block");
      item.classList.remove("d-none");
    } else {
      item.classList.add("d-none");
      item.classList.remove("d-block");
    }
    if (document.querySelectorAll(".font-list-item.d-block").length == 0) {
      document.querySelector(".no-result").classList.remove("d-none");
    } else {
      document.querySelector(".no-result").classList.add("d-none");
    }
  });
}

if (searchInput) {
  if ('URLSearchParams' in window) {
    const url = new URL(window.location)
    searchInput.value = url.searchParams.get("q");
  }
  searchFonts();
}

if (searchInput) {
  searchInput.addEventListener("input", function () {
    if ('URLSearchParams' in window) {
      const url = new URL(window.location)
      if (searchInput.value) {
        url.searchParams.set("q", searchInput.value)
      } else {
        url.searchParams.delete("q")
      }
      history.replaceState(null, '', url);
    }
    searchFonts();
  });
}