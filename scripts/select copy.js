document.addEventListener('DOMContentLoaded', () => {
    const countryDropdown = document.getElementById('countries');
    const plantSpeciesDropdown = document.getElementById('plantSpecies');
    const wildlifeSpeciesDropdown = document.getElementById('wildlifeSpecies');
    const speciesSelectionDiv = document.getElementById('speciesSelection');

    countryDropdown.addEventListener('change', () => {
        const selectedCountry = countryDropdown.value;

        if (selectedCountry) {
            speciesSelectionDiv.style.display = 'block';
            // Fetch and populate tree and wildlife species dropdowns based on selected country
            fetchSpeciesData(selectedCountry);
        } else {
            speciesSelectionDiv.style.display = 'none';
        }
    });

    async function fetchSpeciesData(country) {
        try {
            const response = await fetch(`/species/${country}`);
            const data = await response.json();
            console.log('Species data:', data); // Check if the data is received properly
            populateDropdowns(data);
        } catch (error) {
            console.error('Error fetching species data:', error);
        }
    }

    function populateDropdowns(data) {
        // Populate plant species dropdown
        const plantSpeciesData = data.plants;
        plantSpeciesDropdown.innerHTML = '<option value="" disabled selected>Choose your tree species</option>';
        plantSpeciesData.forEach(species => {
            const option = document.createElement('option');
            option.value = species;
            option.text = species;
            plantSpeciesDropdown.appendChild(option);
        });

        // Populate wildlife species dropdown
        const wildlifeSpeciesData = data.wildlife;
        wildlifeSpeciesDropdown.innerHTML = '<option value="" disabled selected>Choose wildlife species</option>';
        wildlifeSpeciesData.forEach(species => {
            const option = document.createElement('option');
            option.value = species;
            option.text = species;
            wildlifeSpeciesDropdown.appendChild(option);
        });

        // Display dropdowns
        plantSpeciesDropdown.style.display = 'block';
        wildlifeSpeciesDropdown.style.display = 'block';
    }
});