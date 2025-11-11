const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cheddar',
            'Comté',
            'Danbo',
            'Emmenthaler',
            'Fyrtårnsost fra Thise',
            'Gammel knas fra Arla Unika',
            'Gouda',
            'Gudenåenost',
            'Havarti',
            'Havgus fra Arla Unika',
            'Høost fra Naturmælk',
            'Klovborg',
            'Koryfé',
            'Midsommer fra Thise',
            'Ravost fra Thise',
            'Rød krystal fra Them',
            'Smørost',
            'Thise røget vesterhavsost',
            'Ukendt',
            'Ukendt fra Thise',
            'Vesterhavost',
            'Vesterhavost fra Thise',
            'Vesterhavsost'],
        datasets: [{
            label: 'Gennemsnit af anmeldelser',
            data: ['1.5',
                '4.928571429',
                '2.727272727',
                '3',
                '5',
                '5.875',
                '2.5',
                '5',
                '5',
                '5',
                '5',
                '2',
                '2',
                '5',
                '5.5',
                '5',
                '5',
                '3',
                '3.931818182',
                '5',
                '5.5',
                '5',
                '5.181818182'],
            backgroundColor: ['lightgrey',
                'lightgrey',
                'lightgrey',
                'lightgrey',
                'orange',
                'green',
                'lightgrey',
                'orange',
                'orange',
                'orange',
                'orange',
                'lightgrey',
                'lightgrey',
                'orange',
                'green',
                'orange',
                'orange',
                'lightgrey',
                'lightgrey',
                'orange',
                'green',
                'orange',
                'green']
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 10 // Set the font size for x-axis labels
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


