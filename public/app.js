async function callBackend() {
  const response = await fetch('https://backend-test-murex.vercel.app/api/hello');
  const data = await response.json();
  document.getElementById('response').innerText = data.message;
}
