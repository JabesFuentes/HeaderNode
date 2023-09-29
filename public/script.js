document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/whoami')
      .then(response => response.json())
      .then(data => {
        document.getElementById('ipaddress').textContent = data.ipaddress;
        document.getElementById('language').textContent = data.language;
        document.getElementById('software').textContent = data.software;
      })
      .catch(error => console.error(error));
  });
  