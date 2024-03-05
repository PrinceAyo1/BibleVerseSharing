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

// Prayer Suggestion
document
  .getElementById("prayerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const prayerKeywords = document
      .getElementById("prayerKeywords")
      .value.trim();

    // Send prayer keywords to backend for processing
    fetch("/generate-prayer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keywords: prayerKeywords }),
    })
      .then((response) => response.json())
      .then((data) => {
        displayPrayerSuggestions(data);
      })
      .catch((error) => {
        console.error("Error fetching prayer suggestions:", error);
      });
  });

function displayPrayerSuggestions(data) {
  const prayerResultsDiv = document.getElementById("prayerResults");
  prayerResultsDiv.innerHTML = ""; // Clear previous results

  // Display generated prayer points and Bible passages
  data.forEach((result) => {
    const prayerPoint = document.createElement("p");
    prayerPoint.textContent = `Prayer Point: ${result.prayerPoint}`;

    const biblePassage = document.createElement("p");
    biblePassage.textContent = `Bible Passage: ${result.biblePassage}`;

    prayerResultsDiv.appendChild(prayerPoint);
    prayerResultsDiv.appendChild(biblePassage);
  });
}

document
  .getElementById("prayerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const prayerKeywords = document
      .getElementById("prayerKeywords")
      .value.trim();

    // Send prayer keywords to backend for processing
    fetch("/generate-prayer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keywords: prayerKeywords }),
    })
      .then((response) => response.json())
      .then((data) => {
        displayPrayerSuggestions(data);
      })
      .catch((error) => {
        console.error("Error fetching prayer suggestions:", error);
      });
  });

function displayPrayerSuggestions(data) {
  const prayerResultsDiv = document.getElementById("prayerResults");
  prayerResultsDiv.innerHTML = ""; // Clear previous results

  // Display generated prayer points and Bible passages
  data.forEach((result) => {
    const prayerPoint = document.createElement("p");
    prayerPoint.textContent = `Prayer Point: ${result.prayerPoint}`;

    const biblePassage = document.createElement("p");
    biblePassage.textContent = `Bible Passage: ${result.biblePassage}`;

    prayerResultsDiv.appendChild(prayerPoint);
    prayerResultsDiv.appendChild(biblePassage);
  });
}
