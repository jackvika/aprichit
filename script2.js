// Mapping sins to punishments (with Indian legal references for fun)
const punishments = {
    "झूठ बोलना": {
        punishment: "सजा: झूठ बोलने के लिए आपको हमेशा सच्चाई का सामना करना पड़ेगा।",
        legal: "भारतीय दंड संहिता धारा 191: शपथ पर झूठ बोलना मुकदमे का कारण बन सकता है।",
        note: "Note: This is for entertainment only - not legal advice"
    },
    "चोरी करना": {
        punishment: "सजा: चोरी करने वालों को अपनी संपत्ति खोने का डर हमेशा रहेगा।",
        legal: "IPC धारा 378: चोरी पर 3 साल तक की कैद या जुर्माना या दोनों हो सकते हैं।",
        note: "Disclaimer: Actual legal consequences may vary"
    },
    // ... (add similar structure for all other sins)
    "शोषण करना": {
        punishment: "सजा: शोषण करने वालों को हमेशा बाद में पछतावा होता है।",
        legal: "IPC धारा 384-389: शोषण और जबरन वसूली के लिए कड़ी सजा का प्रावधान।",
        note: "Fun purpose only - consult a lawyer for real cases"
    }
};

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const sin = decodeURIComponent(urlParams.get('sin') || '');
const name = decodeURIComponent(urlParams.get('name') || '');

// Display punishment message with legal disclaimer
const punishmentData = punishments[sin] || {
    punishment: 'कोई सजा नहीं है।',
    legal: '',
    note: 'This is just for entertainment purposes'
};

document.getElementById('punishment-message').innerHTML = `
    <h2>प्रिय ${name},</h2>
    <p>आपके द्वारा किए गए पाप "${sin}" के लिए:</p>
    <p><strong>${punishmentData.punishment}</strong></p>
    ${punishmentData.legal ? `<p><em>भारतीय कानून संदर्भ: ${punishmentData.legal}</em></p>` : ''}
    <p class="disclaimer">${punishmentData.note}</p>
    <p class="legal-warning">⚠️ यह केवल मनोरंजन के लिए है। वास्तविक कानूनी सलाह के लिए वकील से संपर्क करें।</p>
`;

// Add this CSS to your style2.css:
/*
.disclaimer {
    font-size: 12px;
    color: #888;
    font-style: italic;
}
.legal-warning {
    color: red;
    font-weight: bold;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    margin-top: 20px;
}
*/

function goBack() {
    window.history.back();
}
