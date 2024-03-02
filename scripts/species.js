// Function to populate the species dropdown and get the tree species details
let speciesDropdown; // Declare the global variable

document.addEventListener('DOMContentLoaded', async () => {
    speciesDropdown = document.getElementById('plantSpecies'); // Assign the global variable

    const populateSpeciesDropdown = async () => {
        try {
            const response = await fetch('https://tree-nation.com/api/projects/3/species');
            const speciesData = await response.json();

             // Sort species alphabetically by name
                speciesData.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });

            // Clear existing options
            speciesDropdown.innerHTML = '';

            // Add the "Select Species" option as the first option
            const selectOption = document.createElement('option');
            selectOption.value = ''; // Set the value to an empty string or any default value
            selectOption.text = 'Select Species';
            speciesDropdown.appendChild(selectOption);

            // Populate the dropdown with tree species names
            speciesData.forEach(species => {
                const option = document.createElement('option');
                option.value = species.id; // You can use other properties like name, id, etc.
                option.text = species.name;
                speciesDropdown.appendChild(option);
            });

            // Set the "Select Species" option as the default selected option
            speciesDropdown.selectedIndex = 0;
        } catch (error) {
            console.error('Error fetching species data:', error.message);
        }
    };

    // Call the function to populate the dropdown
    populateSpeciesDropdown();
});

// Function to handle user selection of tree species
function getTreeSpeciesInfo() {
    const selectedTreeSpeciesId = speciesDropdown.value;

    if (selectedTreeSpeciesId) {
        // Fetch detailed information about the selected tree species
        fetch(`https://tree-nation.com/api/species/${selectedTreeSpeciesId}`)
            .then(response => response.json())
            .then(speciesInfo => {
                // Display the species information in a table on the webpage
                displaySpeciesInfo(speciesInfo);
            })
            .catch(error => console.error('Error fetching species information:', error));
    } else {
        // If "Select Species" is selected, display an error or handle as needed
        alert('Please select a tree species.');
    }
}

function displaySpeciesInfo(speciesInfo) {
    const displayDiv = document.getElementById('displaySection');
    displayDiv.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    table.border = '1';

    for (const prop in speciesInfo) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = `<strong>${prop}</strong>`;
        cell2.innerHTML = JSON.stringify(speciesInfo[prop]);
    }

    displayDiv.appendChild(table);
}