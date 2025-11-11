const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
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


