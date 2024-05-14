document.addEventListener('DOMContentLoaded', () => {
    const factContainer = document.getElementById('cat-facts');

    function fetchCatFacts() {
        fetch('https://catfact.ninja/facts?limit=5')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayCatFacts(data.data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

    function displayCatFacts(facts) {
        factContainer.innerHTML = '';
        facts.forEach(fact => {
            const factElement = document.createElement('div');
            factElement.classList.add('fact-container');
            factElement.textContent = fact.fact;
            factContainer.appendChild(factElement);
        });
    }

    fetchCatFacts();
});
