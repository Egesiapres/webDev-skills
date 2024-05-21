## Caratteristiche generali

- Interpretato
- Eseguibile client/server-side
- Single-thread
- Tipizzazione dinamica
- Tipizzazione debole

JS è un linguaggio **interpretato:** viene passato così come lo scriviamo al browser. Compilati: un compilatore trasforma ciò che noi scriviamo in linguaggio macchina (fatto di 0 e di 1).

### Interpreted VS Compiled

_Interpreted:_ JavaScript, Python, Ruby, PHP, Perl;\
_Compiled:_ C, C++, Rust, Go

|                              | **Interpretato** | **Compilato** |
| ---------------------------- | ---------------- | ------------- |
| _Compilazione run-time_      | Si               | No            |
| _Fase compilazione separata_ | No               | Si            |
| _Creazione file eseguibile_  | No               | Si            |
| _Velocità esecuzione_        | Bassa            | Alta          |
| _Ottimizzazione_             | Bassa            | Alta          |

\
Anche se è nato come linguaggio **client-side,** tramite NodeJS JS può essere usato anche per la parte **server-side**. Il **browser** e **NodeJS** sono i due ambienti di run-time principali di JS. In un browser, l'interprete è il motore del browser stesso (V8 nel caso di Chrome o derivati), mentre in NodeJs il motore V8 di Chrome.

**Run-time environment** (o solo run-time): insieme di librerie, strumenti e componenti software che forniscono un ambiente di esecuzione per programmi; tutto ciò di cui un programma necessita per la sua esecuzione.

JS è un linguaggio **single-thread:** le istruzioni vengono lette dall'alto verso il basso nell'ordine in cui sono scritte. Può essere fatto comportare come un linguaggio multi-thread, che esegue operazioni in parallelo, grazie alla programmazione asincrona (keywords async/await).

JS è un linguaggio dalla **tipizzazione dinamica** e **debole.**

### Dynamically VS Statically Typed

|                                   | **T. Dinamica** | **T. Statica**    |
| --------------------------------- | --------------- | ----------------- |
| _Possibile riassegnare variabile_ | No              | Si                |
| _Controllo tipi di dati_          | Fase esecuzione | Fase compilazione |
| _Rilevamento errori_              | Fase esecuzione | Fase compilazione |
| _Linguaggio tipo_                 | Interpretato    | Compilato         |
| _Flessibilità_                    | Alta            | Bassa             |

#### Weakly VS Strongly Typed

|                                          | **T. Debole** | **T. Forte** |
| ---------------------------------------- | ------------- | ------------ |
| _Conversioni implicite fra tipi di dati_ | Si            | No           |
| _Operazioni fra diversi tipi di dati_    | Si            | No           |
| _Prevedibilità (/Sicurezza)_             | Bassa         | Alta         |

\
JS è dotato di molti APIs (Application Programming Interfaces)

## Inserire JS in una pagina HTML

1. **Embedded:** tag `<script></script>` e lo inserisco in _head_ o _body._ Dentro al tag _head_, viene letto prima della creazione di eventuali pezzi della struttura html, quindi potrebbe restituire errori.

2. **External:** `<script src=""></script>`

3. **Inline:** `<p onclick="ciao()">Player 1: Umberto</p>` (con la funzione ciao dentro allo script). Questa cosa non è consigliata perché altrimenti devo mettere un onclick ad ogni bottone. Meglio gli eventi ad ascoltare il click

Di solito si mette lo script dentro al body con rimando esterno.\ Alternativamente:

```
<script>document.addEventListener("DOMContentLoaded", function(){});</script>
```

Qui sopra ascoltiamo per un evento, il quale è il completo caricamento totale del DOM.

I _defer_ 3 si leggono in ordine come se fossero uno propedeutico all'altro:

```
<script src="" defer></script>
<script src="" defer></script>
<script src="" defer></script>
```

_async_ appena capita viene letto:

```
<script src="" async></script>
```
