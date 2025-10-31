// Initial news array
let news = [
  { id: 1, title: 'Election Results', content: "Newly elected minister..." },
  { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
  { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
];

// Function to display news
function displayNews() {
  const container = document.getElementById('news-container');
  container.innerHTML = ''; // Clear previous news

  news.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('news-item');
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.content}</p>
    `;
    container.appendChild(div);
  });
}

// Initial display
displayNews();

// Refresh every 5 seconds and keep reference to the interval
let refreshInterval = setInterval(displayNews, 5000);


setTimeout(() => {
  news.push({ id: 4, title: 'Tech Breakthrough', content: 'New AI model released...' });
  console.log('New article added!');
}, 5000);

// Handle form submission (prevent reload)
document.getElementById('news-form').addEventListener('submit', function(event) {
  event.preventDefault(); // ✅ Stops the page from reloading

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    // Add to array
    news.push({ id: news.length + 1, title, content });

    // Clear form fields
    document.getElementById('news-form').reset();

    // Update the page immediately
    displayNews();
  }
});

// OPTIONAL: Stop Refresh Button
const stopButton = document.getElementById('stop-btn');
if (stopButton) {
  stopButton.addEventListener('click', () => {
    clearInterval(refreshInterval);
    alert('Auto-refresh stopped.');
  });
}
