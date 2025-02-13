function loadHTML(containerId, fileName) {
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            checkCurrentPage(); 
        })
        .catch(error => console.error('Error loading ' + fileName, error));
}

window.onload = function() {
    loadHTML('footer-container', 'footer.html');
    loadHTML('navbar-container', 'nav.html'); 
      
};

function toggleFAQ(id) {
    const answer = document.getElementById(`answer-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const icons = document.getElementById('demo1')
    const ico = document.getElementById('demo2')
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.add('trans');
        
        

    } else {
        answer.classList.add('hidden');
        icon.classList.remove('trans');
       
    }
    setTimeout
      
}

