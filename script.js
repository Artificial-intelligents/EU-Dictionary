const searchInputUi = document.getElementById('topUi');
const resultContainer = document.getElementById('resultContainer');
const heading2 = document.querySelector('.heading2');

searchInputUi.addEventListener('click', () => {
  searchInputUi.classList.add('clicked');
  resultContainer.classList.remove('hidden');
});

const searchInput = document.getElementById('searchInput');

const definition = document.getElementById('definition');


async function fetchUrduTranslation(word) {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${word}&langpair=en|ur`;
  
    try {
      const response = await axios.get(apiUrl);
      console.log(response);
      if (response.status === 200) {
        const translation = response.data.responseData.translatedText;
        displayTranslation(translation);
      } else {
        displayTranslation("Translation not found. Please try again.");
      }
    } catch (error) {
      displayTranslation("Error fetching data. Please try again later.");
    }
  }
  
  // Function to display the translation in the result container
  function displayTranslation(translation) {
    definition.textContent = translation;
    resultContainer.classList.remove('hidden');
    heading2.classList.remove('hidden');
    resultContainer.classList.add("flex-center");
  }
  
  // Event listener for the search input click and Enter key press
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const word = searchInput.value;
      if (word) {
        fetchUrduTranslation(word);
        searchInputUi.classList.add('clicked');
        
      }
    }
  });
  
  searchInput.addEventListener('click', () => {
    searchInputUI.classList.add('clicked');
    
  });