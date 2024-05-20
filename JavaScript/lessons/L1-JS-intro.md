## Caratteristiche generali

* Interpretato
* Eseguibile client/server-side
* Single-thread
* Tipizzazione dinamica
* Tipizzazione debole

JS è un linguaggio **interpretato:** viene passato così come lo scriviamo al browser. Compilati: un compilatore trasforma ciò che noi scriviamo in linguaggio macchina (fatto di 0 e di 1).

#### Interpreted VS Compiled
*Interpreted:* JavaScript, Python, Ruby, PHP, Perl;\
*Compiled:* C, C++, Rust, Go

|                             |**Interpretato**  |**Compilato**  |
|-----------------------------|------------------|---------------|
|*Compilazione run-time*      |Si                |No             |
|*Fase compilazione separata* |No                |Si             |
|*Creazione file eseguibile*  |No                |Si             |
|*Velocità esecuzione*        |Bassa             |Alta           |
|*Ottimizzazione*             |Bassa             |Alta           |

\
Anche se è nato come linguaggio **client-side,** tramite NodeJS JS può essere usato anche per la parte **server-side**. Il **browser** e **NodeJS** sono i due ambienti di run-time principali di JS. In un browser, l'interprete è il motore del browser stesso (V8 nel caso di Chrome o derivati), mentre in NodeJs il motore V8 di Chrome.

**Run-time environment** (o solo run-time): insieme di librerie, strumenti e componenti software che forniscono un ambiente di esecuzione per programmi; tutto ciò di cui un programma necessita per la sua esecuzione. 

JS è un linguaggio **single-thread:** le istruzioni vengono lette dall'alto verso il basso nell'ordine in cui sono scritte. Può essere fatto comportare come un linguaggio multi-thread, che esegue operazioni in parallelo, grazie alla programmazione asincrona (keywords async/await).

JS è un linguaggio dalla **tipizzazione dinamica** e **debole.**

#### Dynamically VS Statically Typed
|                                  |**T. Dinamica**   |**T. Statica**   |
|----------------------------------|------------------|-----------------|
|*Possibile riassegnare variabile* |No                |Si               |
|*Controllo tipi di dati*          |Fase esecuzione   |Fase compilazione|
|*Rilevamento errori*              |Fase esecuzione   |Fase compilazione|
|*Linguaggio tipo*                 |Interpretato      |Compilato        |
|*Flessibilità*                    |Alta              |Bassa            |

#### Weakly VS Strongly Typed
|                                         |**T. Debole**     |**T. Forte**     |
|-----------------------------------------|------------------|-----------------|
|*Conversioni implicite fra tipi di dati* |Si                |No               |
|*Operazioni fra diversi tipi di dati*    |Si                |No               |
|*Prevedibilità (/Sicurezza)*             |Bassa             |Alta             |

\
JS è dotato di molti APIs (Application Programming Interfaces)

### Inserire JS in una pagina HTML

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
