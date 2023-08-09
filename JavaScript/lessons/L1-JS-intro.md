## Qualche info generica

JS è un linguaggio interpretato: viene passato così come lo scriviamo al browser

C / C# sono compilati: un compilatore trasforma ciò che noi scriviamo in linguaggio macchina (fatto di 0 e di 1)

JS è dotato di molti APIs (Application Programming Interfaces)

Anche se è nato come linguaggio client side, tramite NodeJS JS può essere usato anche per la parte server side

JS è un linguaggio single-thread: le istruzioni vengono lette dall'alto verso il basso nell'ordine in cui sono scritte.
Può essere fatto comportare come un linguaggio multi-thread, che esegue operazioni in parallelo, grazie alla programmazione asincrona (keywords async/await)

## Aggiungere JS ad una pagina html

il codice viene letto dall'alto verso il basso

interno: tag <script></script> e lo inserisco, in head o body. Dentro al tag head, viene letto prima della creazione di eventuali pezzi della struttura html, quindi potrebbe restituire errori.

esterno: <script src=""></script>

inline: <p onclick="ciao()">Player 1: Umberto</p> (con la funzione ciao dentro allo script).
Questa cosa non è consigliata perché altrimenti devo mettere un onclick ad ogni bottone. Meglio gli eventi ad ascoltare il click

di solito si mette lo script dentro al body con rimando esterno

alternativa

<script>
  document.addEventListener("DOMContentLoaded", function(){

  });
</script>

qui sopra ascoltiamo per un evento, il quale è il completo caricamento totale del DOM

i defer 3 si leggono in ordine, come se fossero uno propedeutico all'altro

<script src="" defer></script>
<script src="" defer></script>
<script src="" defer></script>

async appena capita viene letto

<script src="" async></script>
