import { expenseData } from "./dummydata.js";
import { salesData } from "./dummydata.js";
import { trafficData } from "./dummydata.js";
import { engagementData } from "./dummydata.js";

const options = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Disable maintaining aspect ratio
    // Other chart options...
};



// Create charts for sales, website traffic, and user engagement
const salesCtx = document.getElementById('salesChart').getContext('2d');
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const engagementCtx = document.getElementById('engagementChart').getContext('2d');
const expenseCtx = document.getElementById('expenseChart').getContext('2d');

// Create a line chart for sales
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: salesData,
    options: {
        scales: {
            y: {
                beginAtZero: true
                
                
            }
        }
    }
});

// Create a bar chart for website traffic
const trafficChart = new Chart(trafficCtx, {
    type: 'bar',
    data: trafficData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// // Create a pie chart for user engagement
// const engagementChart = new Chart(engagementCtx, {
//     type: 'pie',
//     data: engagementData,
//     options: {
//         // Show labels and percentages in tooltips
//         plugins: {
//             tooltip: {
//                 callbacks: {
//                     label: function(context) {
//                         let label = engagementData.labels[context.dataIndex];
//                         let value = engagementData.datasets[0].data[context.dataIndex];
//                         let total = engagementData.datasets[0].data.reduce((acc, val) => acc + val);
//                         let percentage = Math.round(value / total * 100);
//                         return `${label}: ${value} (${percentage}%)`;
//                     }
//                 }
//             }
//         }
//     }
// });


const engagementChart = new Chart(engagementCtx, {
    type: 'pie',
    data: engagementData,
    options: {
        // Show labels and percentages in tooltips
        plugins: {
            
            tooltip: {
                callbacks: {
                    label: function(context) {
                        // Get the label for the current data point
                        let label = engagementData.labels[context.dataIndex];

                        // Get the value for the current data point from the first dataset
                        let value = engagementData.datasets[0].data[context.dataIndex];

                        // Calculate the total value of all data points in the first dataset
                        let total = 0;
                        for (let i = 0; i < engagementData.datasets[0].data.length; i++) {
                            total += engagementData.datasets[0].data[i];
                        }

                        let percentage = Math.round(value / total * 100);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            }
        }
    }
});

// Create a doughnut chart for website Expense
const expenseChart = new Chart(expenseCtx, {
    type: 'doughnut', // Specify the chart type
    data: expenseData, // Provide the data
    options: options,
    options: {
    responsive: true,
    plugins: {
        legend: {
            position: 'top', // Position of the legend
        },
        title: {
            display: true,
            text: 'Doughnut Chart Example' // Title of the chart
        }
     }
        
   }
});

