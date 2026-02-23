// assegno a una variabile il mio API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


// creo un ciclo for per generarmi 10 email differenti 
for (let i = 0; i < 10; i++) {
    
    // recupero il dato dell'API che mi serve 
    fetch(endpoint)
        .then(response => response.json())
        .then(email => {
        
            // mi servo il risultato in una variabile e lo stampo in console 
            const userEmail = email.response
            console.log(userEmail)
        })
    
}
