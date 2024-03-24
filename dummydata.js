// Dummy data for sales, website traffic, and user engagement
const expenseData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Expenses',
        data: [100, 200, 300, 400, 500, 600], 
       backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'purple',
        'indigo',
        'brown',
        'blue',
        'orange'
        ],
        borderColor:  [
            'black'
            // 'rgba(54, 162, 235, 0.5)',
            // 'purple',
            // 'indigo',
            // 'brown',
            // 'blue',
            // 'orange'
            ],
        borderWidth: 1,
        // fill: true,
        // order: 3,
        // tension: 0.4
        }]}

const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Sales',
        data: [150, 350, 600, 350, 600, 1000], 
       backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 0.5)',
        borderWidth: 1,
        fill: true,
        order: 3,
        tension: 0.4
    },
    {
        label: 'Expenses',
        data: [100, 200, 300, 200, 400, 500], 
       backgroundColor: 'purple',
        borderColor: 'purple',
        borderWidth: 1,
        fill: true,
        order: 2,
        tension: 0.4
    },
    {
        label: 'profits',
        data: [50, 150, 300, 100, 200, 500], 
       backgroundColor: 'indigo',
        borderColor: 'indigo',
        borderWidth: 1,
        fill: true,
        order: 1,
        tension: 0.4
    }]
};

const trafficData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Website Traffic',
        data: [100, 200, 150, 250, 300, 200, 180],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        
    },
    {
        label: 'Message-in',
        data: [20, 80, 75, 100, 200, 100, 80],
        backgroundColor: 'purple',
        
    },
    {
        label: 'Message-out',
        data: [80, 120, 75, 150, 100, 100, 100],
        backgroundColor: 'indigo',
        
    }]
};

const engagementData = {
    labels: ['Likes', 'Comments', 'Shares','Views'],
    datasets: [{
        label: 'User Engagement',
        data: [300, 200, 150, 180],
        backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'purple',
            'indigo',
            'orange'
        ],
        borderColor: [
            'black'
            // 'rgba(54, 162, 235, 0.5)',
            // 'purple',
            // 'indigo'
        ],
        borderWidth: 1,
    }   
]
};


export{expenseData};
export{salesData};
export{trafficData};
export{engagementData};