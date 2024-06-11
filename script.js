const targetDate = new Date('2024-06-17T00:00:00')

function updateDate(){
    const currentDate = new Date()

    const timeDifferece = targetDate - currentDate

    const days = Math.floor(timeDifferece / (1000 * 60 * 60 * 24))

    const hours = Math.floor((timeDifferece % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))

    const minutes = Math.floor((timeDifferece % (1000 * 60 * 60)) / (1000 * 60))

    const seconds = Math.floor((timeDifferece % (1000 * 60)) / 1000)

    document.getElementById('countdown').innerHTML = `${days}d ${hours}hrs ${minutes}min ${seconds}sec`;

    setTimeout(() => {
        updateDate()
    }, 1000);
}

updateDate()