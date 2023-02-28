const  elementChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript;
    showChute(chute);
    verificaChute(chute);
}

function showChute(word){
    elementChute.innerHTML = `
        <div> Você disse: </div>
        <span class="box">${word}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())