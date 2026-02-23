// assegno a una variabile il mio API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// collego i nodi del DOM a js
const emailListEl = document.getElementById('email-list')
const newGeneration = document.getElementById('btn')

// aggiungo tutto all'interno di una funzione 
function newEmail() {

    emailListEl.innerHTML = '';

    // creo un ciclo for per generarmi 10 email differenti 
    for (let i = 0; i < 10; i++) {

        // recupero il dato dell'API che mi serve 
        fetch(endpoint)
            .then(response => response.json())
            .then(email => {

                // mi servo il risultato in una variabile e lo stampo in console 
                const userEmail = email.response
                console.log(userEmail)

                // creo il list item
                const li = document.createElement('li');
                // inserisco nel list item le email 
                li.textContent = email.response;
                // aggiungo i list item dentro la lista creata precedentemente
                emailListEl.appendChild(li)
            })

    }

}

newEmail()
// assegno al bottone l'evento in modo da generare nuove email al click
newGeneration.addEventListener('click', function () {
    newEmail()
})



// ------------------------------------------------------------




// with AXIOS 
/* 

function newEmail() {

    emailListEl.innerHTML = '';

    // creo un ciclo for per generarmi 10 email differenti 
    for (let i = 0; i < 10; i++) {

        // recupero il dato API che mi interressa axios (external library)
        axios.get(endpoint)
            .then(email => {
                console.log(email.data.response);

                const emailAxios = email.data.response

                // creo il list item
                const li = document.createElement('li');
                // inserisco nel list item le email 
                li.textContent = emailAxios;
                // aggiungo i list item dentro la lista creata precedentemente
                emailListEl.appendChild(li)
            })


    }

}


newEmail()
// assegno al bottone l'evento in modo da generare nuove email al click
newGeneration.addEventListener('click', function () {
    newEmail()
})
 
*/
