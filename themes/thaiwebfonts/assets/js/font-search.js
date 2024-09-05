const searchInput = document.querySelector(".search-input");
const searchItems = document.querySelectorAll(".font-list-item");

function searchFonts(query) {
  const searchQuery = query.toLowerCase();
  if ('URLSearchParams' in window) {
    const url = new URL(window.location)
    if (query) {
      url.searchParams.set("q", query)
    } else {
      url.searchParams.delete("q")
    }
    history.replaceState(null, '', url);
  }
  searchInput.value = query;
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
  searchFonts(searchInput.value);
}

if (searchInput) {
  searchInput.addEventListener("input", function () {
    searchFonts(searchInput.value);
  });
}