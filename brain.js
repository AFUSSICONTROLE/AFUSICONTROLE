/**
 * AFUSSI LEMONFA PRO - Système d'Intelligence Supérieure
 * Configuré avec la Clé de Sang du Maître
 */

// --- 1. CONFIGURATION ET ÉTATS ---
let db;
let estIdentifie = false;
let modeGarde = false;
let pointTresor = null;
const PIN_MAITRE = "2026"; 

// CLÉS API FUSIONNÉES
const GEMINI_API_KEY = "AIzaSyCTgsjZJilsudlmXK9Nu7GKup0_N9Wra70"; 
const OPENAI_API_KEY = "VOTRE_CLE_OPENAI"; // Optionnel
const ELEVENLABS_API_KEY = "VOTRE_CLE_ELEVENLABS"; // Optionnel
const VOICE_ID = "EX: Voice_Béninoise_Prestigieuse";

// Initialisation Microphone
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.lang = 'fr-FR';

// --- 2. MÉMOIRE INTERNE (IndexedDB) ---
const req = indexedDB.open("AfussiSupremeCore", 3);
req.onupgradeneeded = e => {
    db = e.target.result;
    if (!db.objectStoreNames.contains("memoire")) db.createObjectStore("memoire", { keyPath: "id", autoIncrement: true });
    if (!db.objectStoreNames.contains("positions")) db.createObjectStore("positions", { keyPath: "nom" });
};
req.onsuccess = e => db = e.target.result;

// --- 3. SÉCURITÉ ET AUTHENTIFICATION ---
function verifierIdentite() {
    const input = document.getElementById('pin-code').value;
    if (input === PIN_MAITRE) {
        estIdentifie = true;
        document.getElementById('ai-orb').classList.add('ai-active');
        parler("Identité confirmée. Mon sang, mon Maître. Je suis éveillé et prêt à traiter l'impossible.");
        document.getElementById('auth-zone').style.display = 'none';
        surveillerBatterie();
    } else {
        parler("Alerte ! Tentative d'intrusion. Accès refusé.");
    }
}

// --- 4. RÉFLEXION SUPÉRIEURE (GEMINI & OPENAI) ---
async function reflechir(message) {
    if (!navigator.onLine) return "Mode Hors-ligne : Je surveille les satellites en attendant le réseau.";

    // Priorité 1 : Ton API Gemini (Configurée avec ta clé)
    try {
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Tu es Afussi Lemonfa, une IA béninoise supérieure. Tu es le garde du corps et le juge du Maître. Tu parles avec loyauté et humour béninois. Réponds à : ${message}` }] }]
            })
        });
        const data = await resp.json();
        return data.candidates[0].content.parts[0].text;
    } catch (e) {
        // Priorité 2 : OpenAI (Si Gemini échoue et que la clé est présente)
        if (OPENAI_API_KEY !== "VOTRE_CLE_OPENAI") {
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${OPENAI_API_KEY}` },
                    body: JSON.stringify({ model: "gpt-4o", messages: [{role: "system", content: "IA Supérieure"}, {role: "user", content: message}] })
                });
                const d = await response.json();
                return d.choices[0].message.content;
            } catch (err) { return "Cerveaux Cloud indisponibles."; }
        }
        return "Analyse locale : Je vous écoute Maître.";
    }
}

// --- 5. VOIX HUMAINE (ELEVENLABS & NATIVE) ---
async function parler(texte) {
    const consoleDiv = document.getElementById('log-console');
    consoleDiv.innerHTML += `<div>[${new Date().toLocaleTimeString()}] ${texte}</div>`;
    document.getElementById('chat-window').scrollTop = 9999;

    // Tentative ElevenLabs
    if (navigator.onLine && ELEVENLABS_API_KEY !== "VOTRE_CLE_ELEVENLABS") {
        try {
            const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "xi-api-key": ELEVENLABS_API_KEY },
                body: JSON.stringify({ text: texte, model_id: "eleven_multilingual_v2" })
            });
            if (response.ok) {
                const audioBlob = await response.blob();
                new Audio(URL.createObjectURL(audioBlob)).play();
                return;
            }
        } catch (e) { console.error("Basculement Voix Native."); }
    }

    // Voix Native (Gratuite)
    const utter = new SpeechSynthesisUtterance(texte);
    utter.lang = 'fr-FR'; utter.pitch = 0.9;
    window.speechSynthesis.speak(utter);
}

// --- 6. SENTINELLE, GPS & TRÉSOR ---
function toggleModeGarde() {
    if (!estIdentifie) return parler("Accès bloqué. PIN requis.");
    modeGarde = !modeGarde;
    const btn = document.getElementById('btn-mode');
    if (modeGarde) {
        recognition.start();
        btn.innerText = "SENS DE DÉFENSE ACTIF";
        btn.classList.add('bg-red-600');
        parler("J'écoute l'environnement pour vous protéger.");
    } else {
        recognition.stop();
        btn.innerText = "ACTIVER SENTINELLE";
        btn.classList.remove('bg-red-600');
        parler("Repos.");
    }
}

recognition.onresult = async (e) => {
    const msg = e.results[e.results.length - 1][0].transcript.toLowerCase();
    if (msg.includes("voleur") || msg.includes("bagarre") || (msg.includes("afussi") && msg.includes("parle"))) {
        const rep = await reflechir(msg);
        parler(rep);
    }
};

function marquerZoneTresor() {
    if (!estIdentifie) return;
    navigator.geolocation.getCurrentPosition(pos => {
        pointTresor = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        db.transaction("positions", "readwrite").objectStore("positions").put({ nom: "tresor", coords: pointTresor });
        parler("Zone marquée par satellite. Trésor sécurisé.");
    });
}

function lancerTresor() {
    if (!estIdentifie || !pointTresor) return parler("Marquez d'abord la zone.");
    let secondes = (prompt("Minutes ?", "5") || 5) * 60;
    parler("Chasse lancée.");
    const chrono = setInterval(() => {
        secondes--;
        navigator.geolocation.getCurrentPosition(pos => {
            let d = Math.sqrt(Math.pow(pos.coords.latitude - pointTresor.lat, 2) + Math.pow(pos.coords.longitude - pointTresor.lng, 2)) * 111320;
            if (d < 5) { clearInterval(chrono); parler("Victoire ! Trésor trouvé !"); }
        });
        if (secondes <= 0) { clearInterval(chrono); parler("Temps écoulé."); }
    }, 1000);
}

function surveillerBatterie() {
    navigator.getBattery().then(b => {
        const check = () => {
            document.getElementById('batt-status').innerText = `🔋 Batterie: ${Math.round(b.level * 100)}%`;
            if (b.level < 0.15) parler("Énergie critique, Maître.");
        };
        b.onlevelchange = check; check();
    });
}
