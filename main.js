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

// BMO script
const BMO = document.querySelector('#billed')
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const rotation = (scrollY % 360) * 0.5 //Keep rotation between 0-360
    BMO.style.transform = `rotate(${rotation}deg)`
})


