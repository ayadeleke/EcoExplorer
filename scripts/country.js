//Function to get african countries
let countryDropdown; // Declare the global variable

document.addEventListener('DOMContentLoaded', async () => {
    countryDropdown = document.getElementById('countries'); // Assign the global variable

    const populateCountryDropdown = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const africanCountries = response.data.filter(country => country.region === 'Africa');

            // Sort African countries alphabetically by name
            africanCountries.sort((a, b) => {
                const nameA = a.name.common.toUpperCase();
                const nameB = b.name.common.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });

            // Clear existing options
            countryDropdown.innerHTML = '';

            // Add the "Select Country" option as the first option
            const selectOption = document.createElement('option');
            selectOption.value = ''; // Set the value to an empty string or any default value
            selectOption.text = 'Select Country';
            countryDropdown.appendChild(selectOption);

            // Populate the dropdown with sorted country names and codes
            africanCountries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.cca2; // You can use other properties like cca3, name.common, etc.
                option.text = country.name.common;
                countryDropdown.appendChild(option);
            });

            // Set the "Select Country" option as the default selected option
            countryDropdown.selectedIndex = 0;
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    // Call the function to populate the dropdown
    populateCountryDropdown();
});

function displayCountryInfo(countryInfo) {
    const displayDiv = document.getElementById('displaySection');
    displayDiv.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    table.border = '1';

    for (const prop in countryInfo) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = `<strong>${prop}</strong>`;
        cell2.innerHTML = JSON.stringify(countryInfo[prop]);
    }

    displayDiv.appendChild(table);
}

function getCountryInfo() {
    // Check if countryDropdown is defined
    if (countryDropdown) {
        const selectedCountryIndex = countryDropdown.selectedIndex;

        // Check if a country is selected
        if (selectedCountryIndex > 0) {
            // Get the selected country code
            const selectedCountryCode = countryDropdown.options[selectedCountryIndex].value;

            // Fetch detailed information about the selected country
            fetch(`https://restcountries.com/v3.1/alpha/${selectedCountryCode}`)
                .then(response => response.json())
                .then(countryInfo => {
                    // Display the country information in a table on the webpage
                    displayCountryInfo(countryInfo[0]);

                })
                .catch(error => console.error('Error fetching country information:', error));
        } else {
            // If "Select Country" is selected, display an error or handle as needed
            alert('Please select a country.');
        }
    } else {
        console.error('countryDropdown is not defined.');
    }
}

function getWildlifeInfo() {
    const selectedWildlifeSpecies = document.getElementById('wildlifeSpecies').value;
    const destinationLink = getWildlifeDestinationLink(selectedWildlifeSpecies);
    navigateToInfoPage(`Wildlife Info: ${selectedWildlifeSpecies}`, destinationLink);
}

function getWildlifeDestinationLink(wildlifeSpecies) {
    // Your logic to determine the destination link for each wildlife species
    // Example: Replace this with your actual destination URLs
    switch (wildlifeSpecies) {
        case 'Lion':
            return 'wildlife/lion-info.html';
        case 'Elephant':
            return 'wildlife/elephant-info.html';
        // Add more cases for other wildlife species
        default:
            return 'wildlife/default-wildlife-info.html';
    }
}

function navigateToInfoPage(info, destinationLink) {
    // Pass selected information as query parameters
    const queryString = `?info=${encodeURIComponent(info)}&destination=${encodeURIComponent(destinationLink)}`;
    window.location.href = `infoPage.html${queryString}`;
}



