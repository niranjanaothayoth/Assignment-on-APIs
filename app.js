// app.js

// Progression 1: create a function and fetch the api using axios
function fetchNews() {
  const apiKey = '3c8d10a3829b2b9c515fa91dc9749bb6'; // Replace with your GNews API key
  const apiUrl = `https://gnews.io/api/v4/top-headlines?country=in&token=${apiKey}`;

  axios.get(apiUrl)
    .then(response => {
      console.log(response.data); // Optional: Log the response data to inspect

      // Clear existing list items
      const newsList = document.getElementById('news-list');
      newsList.innerHTML = '';

      // Iterate through articles and create list items
      response.data.articles.forEach(article => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
          <h5>${article.title}</h5>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
        `;
        newsList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
}

// Call fetchNews() to fetch and display news
fetchNews();
