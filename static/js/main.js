// JavaScript functions for dashboard interactivity

// Function to display the current date and time in the specified format
function displayCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log(`Current Date and Time (UTC): ${formattedDate}`);
}

// Function to update a dashboard element
function updateDashboardElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}

// Function to refresh data on the dashboard
function refreshDashboard() {
    // Logic to fetch and update dashboard data
    console.log('Refreshing dashboard data...');
    displayCurrentDateTime(); // Example usage
}

// Initial call to display the date and time
displayCurrentDateTime();
