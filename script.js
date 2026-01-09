// --- 1. BASES DE DONNÉES HISTORIQUES & SAGESSE ---
const BENIN_SAGESSE = {
    rois: [
        { nom: "Béhanzin", bio: "Le Roi Requin, symbole de la résistance contre la colonisation française. Il a sacrifié son trône pour la liberté du Danxomè.", quiz: "Quel roi a résisté à la colonisation française ?", r: ["Béhanzin", "Ghézo", "Toffa"], c: 0 },
        { nom: "Bio Guéra", bio: "Guerrier Wasangari, héros de la résistance dans le Nord, symbole de bravoure et d'insoumission.", quiz: "Dans quelle région Bio Guéra a-t-il mené sa résistance ?", r: ["Le Sud", "Le Nord", "Le Centre"], c: 1 },
        { nom: "Kaba", bio: "Héros national de l'Atacora, connu pour son opposition farouche au recrutement forcé colonial.", quiz: "Où se situe la zone de résistance de Kaba ?", r: ["Natitingou", "Porto-Novo", "Ouidah"], c: 0 }
    ],
    culture: [
        { sujet: "Vodun Days", info: "Célébration annuelle qui sublime nos arts et spiritualités. Une initiative de l'État pour révéler l'identité béninoise au monde.", quiz: "Quel événement célèbre les arts vodun chaque année au Bénin ?", r: ["Gani", "Vodun Days", "Fête du Fonio"], c: 1 },
        { sujet: "Les Amazones", info: "L'Agoodjié, l'armée féminine unique au monde du Danxomè, incarnant la force de la femme béninoise.", quiz: "Comment s'appelait l'armée féminine du Danxomè ?", r: ["Les Nanas Benz", "Les Agoodjié", "Les Ashanti"], c: 1 },
        { sujet: "Frères Guèdèvuè", info: "Gardiens des secrets et de la justice traditionnelle, piliers de la sagesse Vodun.", quiz: "Qui sont les gardiens de la justice traditionnelle Vodun ?", r: ["Zangbéto", "Guèdèvuè", "Egungun"], c: 1 }
    ],
    economie: [
        { sujet: "GDIZ Glo-Djigbé", info: "Zone Industrielle transformant le coton et les noix de caijou sur place pour créer des milliers d'emplois.", quiz: "Que transforme-t-on à la GDIZ ?", r: ["Le Pétrole", "Le Coton et l'Anacarde", "Le Fer"], c: 1 },
        { sujet: "Agriculture & Pêche", info: "Pilier du Bénin avec la production record de coton et la promotion de l'élevage moderne.", quiz: "Quel produit fait la pride agricole mondiale du Bénin ?", r: ["Le Café", "Le Coton", "Le Blé"], c: 1 }
    ],
    patriotisme: [
        { q: "Que signifie la couleur VERTE du drapeau ?", r: ["La forêt", "L'espoir et la végétation", "La paix"], c: 1, info: "Le vert symbolise l'espoir du renouveau et la végétation." },
        { q: "Que signifie la couleur JAUNE du drapeau ?", r: ["La richesse minière", "Le soleil", "La joie"], c: 0, info: "Le jaune représente les plus grandes richesses de notre pays." },
        { q: "Que signifie la couleur ROUGE du drapeau ?", r: ["Le sang", "Le courage des ancêtres", "Le feu"], c: 1, info: "Le rouge rappelle le courage des ancêtres et le sang versé." },
        { q: "Qui est l'auteur de l'hymne national 'L'Aube Nouvelle' ?", r: ["Hubert Maga", "Abbé Gilbert Dagnon", "Mathieu Kérékou"], c: 1, info: "C'est l'Abbé Gilbert Dagnon qui a composé notre hymne." }
    ],
    nature_et_tresors: [
        { q: "Quel est le plus grand parc animalier du Bénin ?", r: ["W du Bénin", "Pendjari", "Forêt de Niaouli"], c: 1, info: "La Pendjari est un joyau de la faune sauvage en Afrique de l'Ouest." },
        { q: "Quelle ressource minière prometteuse a été découverte au large du Bénin ?", r: ["L'Or", "Le Pétrole", "Le Diamant"], c: 1, info: "Le pétrole brut est une ressource stratégique pour notre avenir." },
        { q: "Quelle Amazone célèbre est restée comme la plus grande générale de l'armée ?", r: ["Seh-Dong-Hong-Be", "Tasi Hangbé", "Nany Leye"], c: 0, info: "Seh-Dong-Hong-Be a dirigé plus de 6000 guerrières Agoodjié." },
        { q: "Quelle ressource est surnommée l'Or Blanc du Bénin ?", r: ["Le Riz", "Le Coton", "Le Sel"], c: 1, info: "Le coton est le premier produit d'exportation de notre pays." }
    ]
};

const BENIN_DATA = {
    rois: [
        { q: "Qui est le Roi Requin qui a dit : 'Le monde est un œuf que nul ne peut briser' ?", r: ["Béhanzin", "Ghézo", "Agadja"], c: 0, info: "Le Roi Béhanzin, le grand résistant contre l'occupation." },
        { q: "Quel héros national a mené la résistance dans le Nord-Bénin ?", r: ["Bio Guéra", "Kaba", "Toffa 1er"], c: 0, info: "Bio Guéra, le guerrier infatigable des peuples Wasangari." },
        { q: "Quelle armée féminine a protégé le Royaume du Danxomè ?", r: ["Les Nanas Benz", "Les Agoodjié", "Les Amazones de Nikki"], c: 1, info: "Les Agoodjié, nos Amazones, symboles de la force féminine béninoise." }
    ],
    innovation: [
        { q: "Quel pôle industriel transforme aujourd'hui nos ressources à Glo-Djigbé ?", r: ["GDIZ", "Port Autonome", "NOCIBE"], c: 0, info: "La GDIZ est le moteur de l'industrialisation sous la vision de Patrice Talon." },
        { q: "Quelle fête nationale célèbre nos racines et le Vodun chaque année ?", r: ["La Gani", "Vodun Days", "Fête de la Sifflée"], c: 1, info: "Les Vodun Days révèlent notre identité culturelle au monde entier." }
    ],
    langues: [
        { phrase: "A wan nou we", lang: "Fon", trad: "Je t'apprécie / Je t'aime" },
        { phrase: "E kaché", lang: "Nago/Yoruba", trad: "Bonjour / Ça va" },
        { phrase: "Fou n'ga", lang: "Baatonu", trad: "Bonjour / Bienvenue" }
    ]
};

// --- 2. CONFIGURATION IA ---
const JOURNALISTE_PHRASES = {
    succes: [
        "Extraordinaire ! A wan nou we ! Tu es un vrai fils du pays !",
        "Flash Spécial : Record brisé ! E kaché o ! Quel talent de génie !",
        "Monsieur Lemonfa Afussi applaudit ton cerveau depuis le laboratoire !",
        "C'est la victoire du Bénin ! Atchèkpé pour ta performance !"
    ],
    encouragement: [
        "Hééé, ressaisis-toi ! Le Roi Béhanzin ne dormait pas au combat !",
        "N'abandonnez pas ! On dirait que tu as mangé trop de piron ce matin ?",
        "L'esprit de Bio Guéra te regarde. Relance le dé avec force !",
        "Le développement du Bénin n'attend pas les paresseux. Allez, joue !"
    ]
};

// --- 3. VARIABLES GLOBALES & SÉCURITÉ ---
const players = JSON.parse(localStorage.getItem('players')) || {};
let currentPlayer = "";
let secretCodeBuffer = "";
const OWNER_SECRET = "*#999#";
const ADRESSE_INSTALL = "229";

// --- 4. MOTEUR VOCAL & MUSICAL ---
function speak(text, pitch = 1, rate = 0.95) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = rate; 
    utterance.pitch = pitch; 
    window.speechSynthesis.speak(utterance);
}

function jouerTamboursRoyaux() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(60, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.5);
        }, i * 600);
    }
}

function chanterAubeNouvelle() {
    const hymneTrilingue = [
        {t: "Jadis à son appel nos pères sans faiblesse, Ont su avec courage, ardeur, pleins d'allégresse, Livrer au prix du sang des combats héroïques !", p: 0.9},
        {t: "Enfants du Bénin debout ! La liberté d'un cri sonore chante aux premiers feux de l'aurore. Enfants du Bénin debout !", p: 1.1},
        {t: "Binin vĩ lɛ́ɛ mi fɔ́n! Mɛɖékannujijɛ sín gbe ɖaxó ɖokpó ɖe ná ɖɔ xó dó zǎnzǎntɛn tɔn fɛ́ fɛ́.", p: 1.0},
        {t: "Tɔ́gbó mǐtɔ́n lɛ́ fɔ́n bo mɔ tɛn, bo ɖu gǎnhó mɛvɔ́nɔ sín kɔ mɛ. Mi bɛ́ wǔ mi bɛ́ lanmɛ!", p: 1.2},
        {t: "E dide eyin omo Benin! Ominira n kede pelu ohun soso ni kutukutu owuro.", p: 1.0},
        {t: "Awon baba wa ti jagun fun ominira yi, pelu eje ati agbara won. E je ka gbe orile-ede wa ga!", p: 1.3},
        {t: "Accourez vous aussi bâtisseurs du présent, Plus forts dans l'unité, chaque jour en avant ! Pour la postérité, bâtissons la cité !", p: 1.0}
    ];
    iaJournaliste('info', "DIRECT : L'Hymne National résonne dans les trois langues !");
    hymneTrilingue.forEach((v, i) => {
        setTimeout(() => speak(v.t, v.p, 0.88), i * 6500);
    });
}

function iaJournaliste(type, messageCustom = "") {
    const ticker = document.getElementById('live-news-ticker');
    const liste = JOURNALISTE_PHRASES[type] || [];
    let intro = currentPlayer ? `${currentPlayer}, écoute bien : ` : "";
    const phrase = messageCustom || (intro + liste[Math.floor(Math.random() * liste.length)]);
    if (ticker) ticker.innerText = "DIRECT : " + phrase;
    const randomPitch = 0.8 + (Math.random() * 0.7);
    speak(phrase, randomPitch);
    if (type === 'succes') confetti();
}

// --- 5. GESTION DES CODES SECRETS ---
function verifierAccesDirect() {
    const codeSaisi = document.getElementById('access-code').value;
    if (codeSaisi === ADRESSE_INSTALL) {
        confetti(); 
        jouerTamboursRoyaux();
        const discours = "Alerte au Génie ! Vous déverrouillez l'accès au Trésor de Monsieur Lemonfa Afussi. Un talent créatif qui travaille pour propulser le Bénin vers une évolution technologique sans précédent. Installez cette innovation pour bâtir le futur !";
        iaJournaliste('succes', "ACCÈS ACCORDÉ : Le Génie Lemonfa vous salue !");
        speak(discours, 0.85, 0.9); 
        setTimeout(() => { showScreen('auth-section'); }, 8000);
    } else {
        speak("Accès refusé. Le trésor est réservé aux patriotes.", 1.2);
    }
}

window.addEventListener('keydown', (e) => {
    secretCodeBuffer += e.key;
    if (secretCodeBuffer.endsWith(OWNER_SECRET)) {
        iaJournaliste('succes', "Accès au coffre-fort de Monsieur Lemonfa.");
        const userCount = Object.keys(players).length;
        document.getElementById('admin-user-count').innerText = userCount;
        document.getElementById('admin-balance-val').innerText = userCount * 500;
        showScreen('admin-panel');
        secretCodeBuffer = "";
    }
});

// --- 6. BIOMÉTRIE & ENREGISTREMENT ---
document.getElementById('fingerprint-scanner').addEventListener('mousedown', function() {
    this.classList.add('scanning');
    speak("Analyse biométrique Lemonfa en cours...", 1.1);
    setTimeout(() => {
        this.classList.remove('scanning');
        const names = Object.keys(players);
        if (names.length > 0) {
            currentPlayer = names[names.length - 1];
            const pinCheck = prompt(`Bonjour ${currentPlayer}. Ton PIN secret ?`);
            if (pinCheck === players[currentPlayer].pin) {
                iaJournaliste('succes', `Bienvenue ${currentPlayer} !`);
                enterDashboard();
            } else { speak("Erreur PIN !", 0.5); }
        } else { requestRegistration(); }
    }, 2500);
});

function requestRegistration() {
    const name = prompt("Ton nom de patriote ?");
    const pin = prompt("Crée ton code PIN (4 chiffres) :");
    if (name && pin && pin.length >= 4) {
        players[name] = { score: 500, pin: pin, date: new Date().toLocaleDateString() };
        localStorage.setItem('players', JSON.stringify(players));
        iaJournaliste('succes', `Compte créé ! Bonus de 500 jetons offert par Mr Lemonfa.`);
        location.reload();
    }
}

// --- 7. JEUX & NARRATION ---
function startHeritageQuiz() {
    showScreen('amazone-game-section');
    const categories = [...BENIN_SAGESSE.rois, ...BENIN_SAGESSE.culture, ...BENIN_SAGESSE.economie, ...BENIN_SAGESSE.patriotisme, ...BENIN_SAGESSE.nature_et_tresors, ...BENIN_DATA.innovation];
    const item = categories[Math.floor(Math.random() * categories.length)];
    const questionTexte = item.quiz || item.q;
    document.getElementById('game-explanation-text').innerHTML = `<h3>Quiz Patrimoine</h3><p>${questionTexte}</p>`;
    const optDiv = document.getElementById('amazone-options');
    optDiv.innerHTML = "";
    speak(questionTexte, 1.1);
    item.r.forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.onclick = () => {
            if (i === item.c) {
                players[currentPlayer].score += 150;
                iaJournaliste('succes', `Exact ! ${item.info || ""}`);
            } else {
                iaJournaliste('encouragement', `Faux ! C'était ${item.r[item.c]}`);
                chanterAubeNouvelle();
            }
            localStorage.setItem('players', JSON.stringify(players));
            updateScoreUI();
            setTimeout(backToDashboard, 5000);
        };
        optDiv.appendChild(btn);
    });
}

function rollLudoDice() {
    const res = Math.floor(Math.random() * 6) + 1;
    document.getElementById('ludo-dice-value').innerText = res;
    if (res === 6) {
        players[currentPlayer].score += 100;
        iaJournaliste('succes', "SIX ! Bonus de 100 jetons !");
    }
    localStorage.setItem('players', JSON.stringify(players));
    updateScoreUI();
}

// --- 8. ADMINISTRATION (SÉCURITÉ FURTIVE) ---
function supportCreator() {
    const lienPaiement = localStorage.getItem('lemonfa_pay_link'); 
    if (!lienPaiement) {
        iaJournaliste('info', "Soutien : Module en attente de configuration.");
        return;
    }
    iaJournaliste('info', "Redirection vers l'espace FedaPay de Monsieur Lemonfa...");
    setTimeout(() => { window.open(lienPaiement, "_blank"); }, 3000);
}

function configurerLienSoutien() {
    const verifPin = prompt("Sécurité Propriétaire : Entrez votre PIN :");
    if (verifPin === "999" || (players[currentPlayer] && verifPin === players[currentPlayer].pin)) {
        const nouveauLien = prompt("Collez votre lien FedaPay :");
        if (nouveauLien && nouveauLien.startsWith("http")) {
            localStorage.setItem('lemonfa_pay_link', nouveauLien);
            iaJournaliste('succes', "Lien sauvegardé localement !");
        }
    }
}

// --- 9. NAVIGATION ---
function showScreen(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function enterDashboard() {
    showScreen('player-dashboard');
    document.getElementById('player-greeting').innerText = `Chercheur : ${currentPlayer}`;
    updateScoreUI();
}

function backToDashboard() { showScreen('player-dashboard'); }

function updateScoreUI() {
    if(currentPlayer) { document.getElementById('player-score-val').innerText = players[currentPlayer].score || 0; }
}

function initIA() {
    showScreen('auth-section');
    speak("Bienvenue sur la plateforme Lemonfa. Le futur commence ici.", 1.1);
}

document.addEventListener('DOMContentLoaded', () => { showScreen('welcome-screen'); });

// --- 10. PWA ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => console.log('PWA Lemonfa Active'));
    });
}
window.addEventListener('appinstalled', () => {
    confetti();
    jouerTamboursRoyaux();
    speak("Innovation installée ! Monsieur Lemonfa vous remercie pour votre soutien.", 1.1);
});
