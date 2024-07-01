// Assuming you have some HTML elements with IDs where you want to display data
const salesElement = document.getElementById('sales');
const usersElement = document.getElementById('users');
const ordersElement = document.getElementById('orders');

// Example data (you can replace this with real data fetched from an API or database)
const dashboardData = {
  sales: 15000,
  users: 1200,
  orders: 560
};

// Function to update dashboard with new data
function updateDashboard(data) {
  salesElement.textContent = data.sales.toLocaleString(); // Format numbers with commas
  usersElement.textContent = data.users.toLocaleString();
  ordersElement.textContent = data.orders.toLocaleString();
}

// Initial update when the page loads
updateDashboard(dashboardData);

// Example of fetching data from an API (using Fetch API)
function fetchDataAndUpdateDashboard() {
  fetch('https://api.example.com/dashboard')
    .then(response => response.json())
    .then(data => updateDashboard(data))
    .catch(error => console.error('Error fetching data:', error));
}

// Call fetchDataAndUpdateDashboard periodically (every 5 seconds in this example)
setInterval(fetchDataAndUpdateDashboard, 5000);
