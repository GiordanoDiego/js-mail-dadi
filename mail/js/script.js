/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/


/*
            CONSEGNA
Mail
Chiedi all'utente la sua email
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull'esito del controllo.

*/ 

// creo array
const arrayMail = [
    "diego@gmail.com",
    "piero@gmail.com",
    "orazio@gmail.com",
    "gesualdo@gmail.com",
    "pierpaoloprep@gmail.com",
    "armando@gmail.com",
    "giacomino@gmail.com"
];
console.log('arrayMail', arrayMail, typeof arrayMail); //VERIFICO STAMPA ARRAY


//aggiungo utente

//bottoni
const buttunRegistrered = document.querySelector('.see_button');
const buttunHide = document.querySelector('.hide_button');
const userRegistrered = document.querySelector('.user_registrered');

buttunRegistrered.addEventListener('click', function(){
	// stampo le email degli utenti iscritti
    userRegistrered.innerHTML = ""; //cancello la lista prima che la riscrivo, altrimenti al riscrive 
    for(i = 0; i < arrayMail.length; i++){
        userRegistrered.innerHTML +="<div>"+ arrayMail[i] + "</div>";  
    }

})

buttunHide.addEventListener('click', function(){
	// stampo le email degli utenti iscritti
    userRegistrered.innerHTML = ""; //cancello la lista prima che la riscrivo, altrimenti al riscrive 

})

const userEmailInput = document.getElementById('exampleFormControlInput1');
console.log('userEmailInput', userEmailInput, typeof userEmailInput);

let myButtonRegistrati = document.getElementById('my_button_registrati');
console.log('myButtonRegistrati', myButtonRegistrati, typeof myButtonRegistrati); 

myButtonRegistrati.addEventListener('click', function(){
	
    const userEmailInputValue = userEmailInput.value;
    console.log('userEmailInputValue', userEmailInputValue, typeof userEmailInputValue); 

    if(userEmailInputValue == ""){
        alert("Inserisci una email valida");
    }
    else{
        for(i = 0; i < arrayMail.length; i++){
            if(userEmailInputValue == arrayMail[i]){
                alert("Email presente nel database");
                i = arrayMail.length;
            }
            else if (userEmailInputValue != arrayMail[i]){
                alert("Registrato");
                i = arrayMail.length;
                arrayMail.push(userEmailInputValue);
                userRegistrered.innerHTML = "";
                for(i = 0; i < arrayMail.length; i++){
                    userRegistrered.innerHTML +="<div>"+ arrayMail[i] + "</div>";  
                }
            }
        }
    }

    
})










