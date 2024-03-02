// Sample data structure for species and their associated countries
const speciesDataByCountry = {
    "Nigeria": {
        "plants": ["TreeA_NG", "TreeB_NG", "TreeC_NG", "TreeD_NG", "TreeE_NG", "TreeF_NG", "TreeG_NG", "TreeH_NG", "TreeI_NG", "TreeJ_NG"],
        "wildlife": ["WildlifeA_NG", "WildlifeB_NG", "WildlifeC_NG", "WildlifeD_NG", "WildlifeE_NG", "WildlifeF_NG", "WildlifeG_NG", "WildlifeH_NG", "WildlifeI_NG", "WildlifeJ_NG"]
    },
    "Rwandan": {
        "plants": ["TreeA_RW", "TreeB_RW", "TreeC_RW", "TreeD_RW", "TreeE_RW", "TreeF_RW", "TreeG_RW", "TreeH_RW", "TreeI_RW", "TreeJ_RW"],
        "wildlife": ["WildlifeA_RW", "WildlifeB_RW", "WildlifeC_RW", "WildlifeD_RW", "WildlifeE_RW", "WildlifeF_RW", "WildlifeG_RW", "WildlifeH_RW", "WildlifeI_RW", "WildlifeJ_RW"]
    },
    "Ghana": {
        "plants": ["TreeA_GH", "TreeB_GH", "TreeC_GH", "TreeD_GH", "TreeE_GH", "TreeF_GH", "TreeG_GH", "TreeH_GH", "TreeI_GH", "TreeJ_GH"],
        "wildlife": ["WildlifeA_GH", "WildlifeB_GH", "WildlifeC_GH", "WildlifeD_GH", "WildlifeE_GH", "WildlifeF_GH", "WildlifeG_GH", "WildlifeH_GH", "WildlifeI_GH", "WildlifeJ_GH"]
    },
    "SouthAfrica": {
        "plants": ["TreeA_ZA", "TreeB_ZA", "TreeC_ZA", "TreeD_ZA", "TreeE_ZA", "TreeF_ZA", "TreeG_ZA", "TreeH_ZA", "TreeI_ZA", "TreeJ_ZA"],
        "wildlife": ["WildlifeA_ZA", "WildlifeB_ZA", "WildlifeC_ZA", "WildlifeD_ZA", "WildlifeE_ZA", "WildlifeF_ZA", "WildlifeG_ZA", "WildlifeH_ZA", "WildlifeI_ZA", "WildlifeJ_ZA"]
    },
    "Kenya": {
        "plants": ["TreeA_KE", "TreeB_KE", "TreeC_KE", "TreeD_KE", "TreeE_KE", "TreeF_KE", "TreeG_KE", "TreeH_KE", "TreeI_KE", "TreeJ_KE"],
        "wildlife": ["WildlifeA_KE", "WildlifeB_KE", "WildlifeC_KE", "WildlifeD_KE", "WildlifeE_KE", "WildlifeF_KE", "WildlifeG_KE", "WildlifeH_KE", "WildlifeI_KE", "WildlifeJ_KE"]
    },
    "Botswana": {
        "plants": ["TreeA_BW", "TreeB_BW", "TreeC_BW", "TreeD_BW", "TreeE_BW", "TreeF_BW", "TreeG_BW", "TreeH_BW", "TreeI_BW", "TreeJ_BW"],
        "wildlife": ["WildlifeA_BW", "WildlifeB_BW", "WildlifeC_BW", "WildlifeD_BW", "WildlifeE_BW", "WildlifeF_BW", "WildlifeG_BW", "WildlifeH_BW", "WildlifeI_BW", "WildlifeJ_BW"]
    },
    "Tanzania": {
        "plants": ["TreeA_TZ", "TreeB_TZ", "TreeC_TZ", "TreeD_TZ", "TreeE_TZ", "TreeF_TZ", "TreeG_TZ", "TreeH_TZ", "TreeI_TZ", "TreeJ_TZ"],
        "wildlife": ["WildlifeA_TZ", "WildlifeB_TZ", "WildlifeC_TZ", "WildlifeD_TZ", "WildlifeE_TZ", "WildlifeF_TZ", "WildlifeG_TZ", "WildlifeH_TZ", "WildlifeI_TZ", "WildlifeJ_TZ"]
    },
    "Cameroon": {
        "plants": ["TreeA_CM", "TreeB_CM", "TreeC_CM", "TreeD_CM", "TreeE_CM", "TreeF_CM", "TreeG_CM", "TreeH_CM", "TreeI_CM", "TreeJ_CM"],
        "wildlife": ["WildlifeA_CM", "WildlifeB_CM", "WildlifeC_CM", "WildlifeD_CM", "WildlifeE_CM", "WildlifeF_CM", "WildlifeG_CM", "WildlifeH_CM", "WildlifeI_CM", "WildlifeJ_CM"]
    },
    "SouthSudan": {
        "plants": ["TreeA_SS", "TreeB_SS", "TreeC_SS", "TreeD_SS", "TreeE_SS", "TreeF_SS", "TreeG_SS", "TreeH_SS", "TreeI_SS", "TreeJ_SS"],
        "wildlife": ["WildlifeA_SS", "WildlifeB_SS", "WildlifeC_SS", "WildlifeD_SS", "WildlifeE_SS", "WildlifeF_SS", "WildlifeG_SS", "WildlifeH_SS", "WildlifeI_SS", "WildlifeJ_SS"]
    },
    "Uganda": {
        "plants": ["TreeA_UG", "TreeB_UG", "TreeC_UG", "TreeD_UG", "TreeE_UG", "TreeF_UG", "TreeG_UG", "TreeH_UG", "TreeI_UG", "UG"],
        "wildlife": ["WildlifeA_UG", "WildlifeB_UG", "WildlifeC_UG", "WildlifeD_UG", "WildlifeE_UG", "WildlifeF_UG", "WildlifeG_UG", "WildlifeH_UG", "WildlifeI_UG", "WildlifeJ_"]
    },
    "Ethiopia": {
        "plants": ["TreeA_ETH", "TreeB_ETH", "TreeC_ETH", "TreeD_ETH", "TreeE_ETH", "TreeF_ETH", "TreeG_ETH", "TreeH_ETH", "TreeI_SS", "TreeJ_ETH"],
        "wildlife": ["WildlifeA_ETH", "WildlifeB_ETH", "WildlifeC_ETH", "WildlifeD_ETH", "WildlifeE_ETH", "WildlifeF_ETH", "WildlifeG_ETH", "WildlifeH_ETH", "WildlifeI_ETH", "WildlifeJ_ETH"]
    },
};


let selectedCountry;
let selectedSpeciesType;

// Function to display information
function getInfo() {
    const countryDropdown = document.getElementById('countries');
    const plantSpeciesDropdown = document.getElementById('plantSpecies');
    const wildlifeSpeciesDropdown = document.getElementById('wildlifeSpecies');

    const selectedCountry = countryDropdown.value;
    const selectedPlantSpecies = plantSpeciesDropdown.style.display === 'block' ? plantSpeciesDropdown.value : null;
    const selectedWildlifeSpecies = wildlifeSpeciesDropdown.style.display === 'block' ? wildlifeSpeciesDropdown.value : null;

    if (selectedCountry && (selectedPlantSpecies || selectedWildlifeSpecies)) {
        // Fetch and display information based on the selected country, plant species, and wildlife species
        const info = fetchInfo(selectedCountry, selectedPlantSpecies, selectedWildlifeSpecies);
        displayInfo(info);
    } else {
        alert('Please select a country and at least a plant or wildlife species.');
    }
}

// Function to fetch information
function fetchInfo(country, treeSpecies, wildlifeSpecies) {
    const countryData = speciesDataByCountry[country];

    const treeInfo = countryData?.plants.includes(treeSpecies) ? treeSpecies : '';
    const wildlifeInfo = countryData?.wildlife.includes(wildlifeSpecies) ? wildlifeSpecies : '';

    return {
        country,
        treeSpecies: treeInfo,
        wildlifeSpecies: wildlifeInfo,
        additionalInfo: 'Some information here',
    };
}


function displayInfo(info) {
    const displayDiv = document.getElementById('displaySection');
    displayDiv.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    table.border = '1';

    for (const prop in info) {
        const value = info[prop] !== '' ? JSON.stringify(info[prop]) : ''; // Display blank for empty values

        if (typeof info[prop] === 'object') {
            for (const subProp in info[prop]) {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

                cell1.innerHTML = `<strong>${subProp}</strong>`;
                cell2.innerHTML = value;
            }
        } else {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.innerHTML = `<strong>${prop}</strong>`;
            cell2.innerHTML = value;
        }
    }

    displayDiv.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
    const countryDropdown = document.getElementById('countries');
    const plantSpeciesDropdown = document.getElementById('plantSpecies');
    const wildlifeSpeciesDropdown = document.getElementById('wildlifeSpecies');
    const speciesSelectionDiv = document.getElementById('speciesSelection');

    countryDropdown.addEventListener('change', () => {
        const selectedCountry = countryDropdown.value;

        if (selectedCountry) {
            speciesSelectionDiv.style.display = 'block';
            populateTreeSpecies(selectedCountry);
            populateWildlifeSpecies(selectedCountry);
        } else {
            speciesSelectionDiv.style.display = 'none';
        }
    });

    function populateTreeSpecies(selectedCountry) {
        const treeSpeciesData = speciesDataByCountry[selectedCountry].plants;
        plantSpeciesDropdown.innerHTML = '<option value="" disabled selected>Choose your tree species</option>';

        treeSpeciesData.forEach(species => {
            const option = document.createElement('option');
            option.value = species;
            option.text = species;
            plantSpeciesDropdown.appendChild(option);
        });

        plantSpeciesDropdown.style.display = 'block';
        wildlifeSpeciesDropdown.style.display = 'none';
    }

    function populateWildlifeSpecies(selectedCountry) {
        const wildlifeSpeciesData = speciesDataByCountry[selectedCountry].wildlife;
        wildlifeSpeciesDropdown.innerHTML = '<option value="" disabled selected>Choose wildlife species</option>';

        wildlifeSpeciesData.forEach(species => {
            const option = document.createElement('option');
            option.value = species;
            option.text = species;
            wildlifeSpeciesDropdown.appendChild(option);
        });

        wildlifeSpeciesDropdown.style.display = 'block';
        plantSpeciesDropdown.style.display = 'block';
    }
});