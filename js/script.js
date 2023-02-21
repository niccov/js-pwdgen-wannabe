//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina la concatenazione delle variabili + un numero a caso scelto da voi

/*
-chiedere all'utente il suo nome
-memorizzare il nome in una variabile
-chiedere all'utente il suo cognome
-memorizzare il cognome in una variabile
-chiedere all'utente il suo colore preferito
-memorizzare il colore preferito in una variabile
-stampare in pagina la concatenazione delle variabili + un numero a caso
*/

let nomeUtente;
nomeUtente = prompt("Quale è il tuo nome?");

let cognomeUtente;
cognomeUtente = prompt("Quale è il tuo cognome?");

let colorePreferitoUtente;
colorePreferitoUtente = prompt("Quale è il tuo colore preferito?");

document.writeln(nomeUtente + cognomeUtente + colorePreferitoUtente + "36");