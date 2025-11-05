# Dragonball React Native App

Questa applicazione è sviluppata in **React Native** utilizzando **Expo** e TypeScript. L'app consente di visualizzare personaggi e pianeti dell'universo Dragon Ball e di filtrare i personaggi in base al loro nome.

---

## Struttura del progetto

```
DragonBallExpo/
│
├─ assets/               # Contiene immagini (es. logo.webp)
├─ components/           # Componenti riutilizzabili (es. Card, Button, Pagination)
├─ models/               # Tipizzazioni TypeScript per Characters e Planets
├─ screens/              # Schermi dell'app (Home, Characters, Planets, FilterCharacters)
├─ styles/               # Stili globali e dei componenti
├─ utils/                # Funzioni helper per API e gestione dati
├─ App.tsx               # Entry point dell'app con Navigation
└─ package.json          # Dipendenze e script

```

---

## Installazione

1. Clona il repository:
```bash
git clone <REPO_URL>
```
2. Entra nella cartella del progetto:
```bash
cd DragonBallExpo
```
3. Installa le dipendenze:
```bash
npm install
```
4. Avvia l'app con Expo:
```bash
npm start

```

---

## Navigazione
L'app utilizza **@react-navigation/native** e **@react-navigation/native-stack** con le seguenti schermate:

- **Home**: schermata iniziale con logo e pulsanti per navigare alle altre schermate
- **Characters**: lista dei personaggi Dragon Ball con paginazione (limit 10)
- **Planets**: lista dei pianeti Dragon Ball con paginazione (limit 5)
- **FilterCharacters**: ricerca dei personaggi tramite filtro per nome

---

## Funzionalità principali

### Home Screen
- Mostra il logo `logo.webp`
- Pulsanti di navigazione verso Characters, Planets e FilterCharacters

### Characters Screen
- Recupera dati da `https://dragonball-api.com/api/characters`
- Visualizza: `name`, `race`, `gender`, `originPlanet.name`, `image`
- Paginazione con `limit=10` e pulsanti Avanti/Indietro

### Planets Screen
- Recupera dati da `https://dragonball-api.com/api/planets`
- Visualizza: `name`, `isDestroyed` (solo se true), `image`
- Paginazione con `limit=5` e pulsanti Avanti/Indietro

### FilterCharacters Screen
- Input di ricerca per filtrare i personaggi tramite nome
- FlatList inizialmente vuota, aggiornata ad ogni digitazione
- Recupera dati filtrati da `https://dragonball-api.com/api/characters?name=<filtro>`
- Mostra solo il `name` dei personaggi filtrati

---

## Dipendenze principali
- `react-native`
- `expo`
- `typescript`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `axios` (per chiamate API)

---

## Esecuzione su Expo Go
1. Avvia `npm start`
2. Scansiona il QR code con **Expo Go** su iOS o Android
3. Testa l'app in tempo reale

---

## Note
- L'app è sviluppata seguendo la struttura modulare con cartelle **models**, **components**, **screens**, **styles** e **utils**
- Le pagine Characters e Planets implementano paginazione manuale
- La ricerca in FilterCharacters è dinamica e aggiorna la FlatList ad ogni input

---

## Autore

- Jhoseph Baskara

---

## Licenza

Questo progetto è rilasciato sotto licenza MIT.  
Consulta il file [`LICENSE`](LICENSE) per maggiori dettagli.

