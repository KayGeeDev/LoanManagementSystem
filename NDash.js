// Include Chart.js in your project by linking its CDN in your HTML
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("transactionChart").getContext("2d");
  
    // Dummy Data for the Chart
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Transactions',
          data: [12, 19, 3, 5],
          backgroundColor: '#6a1b9a',
          borderColor: '#fff',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  