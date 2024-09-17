// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")
// Esempio:

// Input: “i topi non avevano nipoti”
// Output: true

// let frase = 'i topi non avevano nipoti';
// let reversed = frase.split('').reverse().join('');
// let fraseInversa = "itopin onaveva non ipot i"

// if (reversed == fraseInversa) {
//     console.log(true);
// } else {
//     console.log("la frase non è palindroma");
// }



// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
// Variante:
// Prova ad ordinali in modo crescente.

// let arraynum = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
// arraynum.sort();
// console.log(arraynum);

// let reversed = arraynum.reverse();
// console.log(reversed);




// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:

//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]
// Variante:

//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. 

// let number = [3, 5, 10, 2, 8];
// let somma = 0;
// let minori = [];
// let maggiori = []

// for (let i = 0; i < number.length; i++) {
//     somma += number[i];
    
// }

// let media = somma / number.length;


// for (let i = 0; i < number.length; i++) {
// if (number[i]<media) {
//     minori.push(number[i])
// }
// else if (number[i]>media){
//     maggiori.push(number[i])
// }
// }

// countMin = minori.length
// countMax = maggiori.length

// console.log(`La media dei numeri è ${media},i ${countMin} valori minori sono ${Object.values(minori)}, i ${countMax} valori maggiori sono ${Object.values(maggiori)}`);



// Crea un oggetto persona con le seguenti caratteristiche:

// nome
// cognome
// eta'
// un metodo che permetta di salutare

let persona = {
    'nome': 'Alessio',
    'cognome':'Acunzo',
    'età': 24,
    'saluta' : function() {
        console.log(`ciao, mi chiamo ${this.nome}`);
    }
}
console.log(persona);