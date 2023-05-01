const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const pongDisplayer = document.getElementById('pong')
const pong = async () => {
    const response = await window.versions.ping()
    pongDisplayer.innerHTML = response;
    setTimeout(() => {
        pongDisplayer.innerHTML = '';
    }, 500);
}

const pinger = document.getElementById('ping')
pinger.addEventListener('click', pong)
