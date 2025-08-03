// Complete mapping of sins to punishments with Indian legal references
const punishments = {
    "झूठ बोलना": {
        punishment: "सजा: झूठ बोलने के लिए आपको हमेशा सच्चाई का सामना करना पड़ेगा।",
        legal: "IPC धारा 191: शपथ पर झूठ बोलना (Perjury) 6 महीने से 7 साल तक की कैद",
        note: "Note: Court proceedings may take years in reality"
    },
    "चोरी करना": {
        punishment: "सजा: चोरी करने वालों को अपनी संपत्ति खोने का डर हमेशा रहेगा।",
        legal: "IPC धारा 378: चोरी के लिए 3 साल तक की कैद या जुर्माना या दोनों",
        note: "Actual jail time depends on value stolen"
    },
    "धोखा देना": {
        punishment: "सजा: धोखे का फल हमेशा कड़वा होता है।",
        legal: "IPC धारा 415: छल (Cheating) 1 साल तक की कैद या जुर्माना",
        note: "Fraud over ₹10,000 may have higher penalties"
    },
    "घृणा करना": {
        punishment: "सजा: घृणा करने वालों को प्रेम की कमी का सामना करना पड़ेगा।",
        legal: "IPC धारा 153A: धर्म/जाति के आधार पर घृणा फैलाना 3 साल तक की कैद",
        note: "Hate speech laws are strictly enforced"
    },
    "ईर्ष्या करना": {
        punishment: "सजा: ईर्ष्या से व्यक्ति को कभी संतोष नहीं मिलता।",
        legal: "IPC धारा 503: धमकी देने पर 2 साल तक की कैद",
        note: "Envy leading to threats is punishable"
    },
    "क्रोध करना": {
        punishment: "सजा: क्रोध करने वालों को हमेशा पछताना पड़ेगा।",
        legal: "IPC धारा 352: हमला (Assault) 3 महीने तक की कैद या ₹500 जुर्माना",
        note: "Physical violence has higher penalties"
    },
    "स्वार्थी होना": {
        punishment: "सजा: स्वार्थ से व्यक्ति अकेला हो जाता है।",
        legal: "IPC धारा 409: विश्वासघात (Criminal breach of trust) जीवनकारावास तक",
        note: "No direct law against selfishness"
    },
    "बदले की भावना रखना": {
        punishment: "सजा: बदला लेने का मन रखने वाले हमेशा असंतुष्ट रहेंगे।",
        legal: "IPC धारा 307: हत्या का प्रयास (Attempt to murder) 10 साल तक की कैद",
        note: "Vengeful acts have serious consequences"
    },
    "कुविचार रखना": {
        punishment: "सजा: कुविचार से व्यक्ति का मन अशांत रहता है।",
        legal: "IPC धारा 292: अश्लील सामग्री (Obscenity) 2 साल तक की कैद",
        note: "Thoughts alone aren't punishable"
    },
    "gossip करना": {
        punishment: "सजा: gossip करने वालों की प्रतिष्ठा खतरे में रहती है।",
        legal: "IPC धारा 499: मानहानि (Defamation) 2 साल तक की कैद या जुर्माना",
        note: "False rumors can lead to lawsuits"
    },
    "शांति भंग करना": {
        punishment: "सजा: शांति भंग करने वालों को हमेशा अशांति का सामना करना पड़ेगा।",
        legal: "IPC धारा 290: सार्वजनिक उपद्रव ₹200 तक जुर्माना",
        note: "Rioting has much higher penalties"
    },
    "अवज्ञा करना": {
        punishment: "सजा: अवज्ञा करने वालों को परिणाम भुगतने पड़ते हैं।",
        legal: "IPC धारा 188: आदेश की अवहेलना 6 महीने तक की कैद या ₹1000 जुर्माना",
        note: "Applies to government orders"
    },
    "असत्य बोलना": {
        punishment: "सजा: असत्य बोलने का फल बहुत भयानक होता है।",
        legal: "IPC धारा 177: गलत सूचना देना 6 महीने तक की कैद या ₹1000 जुर्माना",
        note: "Lying to police has higher penalties"
    },
    "अधर्म करना": {
        punishment: "सजा: अधर्म करने वालों को हमेशा अपनी गलतियों का एहसास होगा।",
        legal: "IPC धारा 295A: धार्मिक भावनाएं आहत करना 3 साल तक की कैद",
        note: "Blasphemy laws vary by community"
    },
    "नशा करना": {
        punishment: "सजा: नशे का परिणाम हमेशा नकारात्मक होता है।",
        legal: "NDPS अधिनियम: नशीले पदार्थों का सेवन 6 महीने तक की कैद",
        note: "Quantity determines severity"
    },
    "धर्म का अपमान करना": {
        punishment: "सजा: धर्म का अपमान करने वालों को कभी शांति नहीं मिलती।",
        legal: "IPC धारा 295: धार्मिक स्थल को नुकसान 2 साल तक की कैद",
        note: "Multiple sections apply"
    },
    "परनिंदा करना": {
        punishment: "सजा: परनिंदा करने वालों को समाज में अपमान का सामना करना पड़ेगा।",
        legal: "IPC धारा 500: मानहानि के लिए 2 साल तक की कैद",
        note: "Truth is a valid defense"
    },
    "मिथ्या गर्व करना": {
        punishment: "सजा: मिथ्या गर्व से व्यक्ति को हमेशा असफलता का सामना करना पड़ेगा।",
        legal: "IPC धारा 416: छल के लिए व्यक्तित्व धारण करना 3 साल तक की कैद",
        note: "Impersonation is punishable"
    },
    "समाज से दूर रहना": {
        punishment: "सजा: समाज से दूर रहने का मतलब अकेलापन है।",
        legal: "कोई विशिष्ट कानून नहीं",
        note: "Social isolation isn't illegal"
    },
    "शोषण करना": {
        punishment: "सजा: शोषण करने वालों को हमेशा बाद में पछतावा होता है।",
        legal: "IPC धारा 384: जबरन वसूली (Extortion) 3 साल तक की कैद",
        note: "Workplace harassment has separate laws"
    }
};

// Display function with enhanced disclaimer
function displayPunishment() {
    const urlParams = new URLSearchParams(window.location.search);
    const sin = decodeURIComponent(urlParams.get('sin') || '');
    const name = decodeURIComponent(urlParams.get('name') || '');

    const punishmentData = punishments[sin] || {
        punishment: 'कोई सजा नहीं है।',
        legal: 'कोई लागू कानून नहीं',
        note: 'This is a fictional entertainment system'
    };

    const punishmentHTML = `
        <div class="punishment-container">
            <h2>प्रिय ${name || 'अज्ञात'},</h2>
            <div class="divider"></div>
            
            <div class="sin-display">
                <p>पाप: <strong>${sin || 'अनिर्दिष्ट'}</strong></p>
            </div>
            
            <div class="punishment-display">
                <h3>⚖️ दैवीय न्याय:</h3>
                <p>${punishmentData.punishment}</p>
            </div>
            
            <div class="legal-display">
                <h3>📜 भारतीय कानून:</h3>
                <p>${punishmentData.legal}</p>
            </div>
            
            <div class="disclaimer-box">
                <h4>⚠️ महत्वपूर्ण सूचना:</h4>
                <p>${punishmentData.note}</p>
                <p>यह केवल मनोरंजन के उद्देश्य से बनाया गया है। वास्तविक कानूनी प्रक्रियाएं अलग हो सकती हैं। किसी भी कानूनी सलाह के लिए कृपया किसी योग्य वकील से संपर्क करें।</p>
                <p class="copyright">© ${new Date().getFullYear()} अपरिचित - एक काल्पनिक परियोजना</p>
            </div>
        </div>
    `;

    document.getElementById('punishment-message').innerHTML = punishmentHTML;
}

// Call the function when page loads
window.onload = displayPunishment;
