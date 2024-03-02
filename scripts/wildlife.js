//Function to get animal
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
