const ctx = document.querySelector('#chart').getContext('2d');

// Function to assign a category and color based on the value
function getCategoryAndColor(value) {
    if (value > 5) {
        return {category: 'over 5', color: '#344e41'};
    } else if (value >= 4 && value <= 5) {
        return {category: '4 - 5', color: '#588157'};
    } else {
        return {category: 'under 4', color: '#a3b18a'};
    }
}

// Your data
const labels = [
    'Gammel knas fra Arla Unika',
    'Vesterhavost fra Thise',
    'Ravost fra Thise',
    'Fyrtårnsost fra Thise',
    'Gudenåenost',
    'Havarti',
    'Havgus fra Arla Unika',
    'Høost fra Naturmælk',
    'Rød krystal fra Them',
    'Vesterhavost',
    'Comté',
    'Thise røget vesterhavsost',
    'Emmenthaler',
    'Danbo',
    'Gouda',
    'Smørost',
    'Koryfé',
    'Klovborg',
    'Cheddar'
];
const dataValues = [
    5.9, 5.5, 5.5, 5, 5, 5, 5, 5, 5, 5, 4.9, 3, 3, 2.7, 2.5, 2, 2, 2, 1.5
];

// Generate background colors and categories
const backgroundColors = dataValues.map(value => getCategoryAndColor(value).color);

// Create the chart
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Gennemsnit af anmeldelser', // Single string label
            data: dataValues,
            backgroundColor: backgroundColors,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: 'black',
                    // Customize legend to show categories
                    generateLabels: function (chart) {
                        const categories = [
                            {text: 'over 5', fillStyle: '#344e41'},
                            {text: '4 - 5', fillStyle: '#588157'},
                            {text: 'under 4', fillStyle: '#a3b18a'}
                        ];
                        return categories;
                    }
                }
            },
            title: {
                display: true,
                text: 'Gennemsnit af anmeldelser',
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        }
    }
});


const ctx2 = document.querySelector('#chart-2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Amager', 'Charlottelund', 'Christianshavn', 'Esbjerg', 'Frederiksbjerg', 'Faaborg', 'Indre by', 'Kastrup','Lyngby','Nordvest','Nørrebro','Odense','Reffen','Silkeborg','Sjøllands Odde', 'Slagelse','Sydhavn','Valby','Vesterbro','Viborg','Østerbro','Århus','Aarhus'],
        datasets: [{
            label:  'Bmo Score',
            data: [4.7, 4.1, 5.1, 4.5, 4.1, 2.5,4.4,1.9,3.8,5,4.5,3.9,4.1,5.6,5,2,4.8,4.1,4.6,4.2,4.4,4.4,5.2],
        }]
    }
});

// BMO script
const BMO = document.querySelector('#billed')
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const rotation = scrollY * 0.5 //Keep rotation between 0-360
    BMO.style.transform = `rotate(${rotation}deg)`
})


