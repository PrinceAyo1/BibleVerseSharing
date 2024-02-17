// Function to handle search input
function handleSearch() {
  const searchInput = document.querySelector("#searchInput");
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Perform search logic here (e.g., filtering Bible verses based on the search term)
  console.log("Search term:", searchTerm);

  // Clear search input
  searchInput.value = "";
}

// Add event listener to search input
document.querySelector("#searchInput").addEventListener("input", handleSearch);
