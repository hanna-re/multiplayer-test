async function callBackend() {
    const response = await fetch('/.netlify/functions/flask_app/api/hello');
    const data = await response.json();
    document.getElementById('response').innerText = data.message;
}