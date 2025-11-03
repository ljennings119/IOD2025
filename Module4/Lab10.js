    const productsContainer = document.getElementById('productsContainer');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');

    let allProducts = [];

    // Fetch data from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        allProducts = data;
        populateCategories(data);
        displayProducts(data);
      })
      .catch(err => console.error(err));

    // Populate category dropdown
    function populateCategories(products) {
      const categories = [...new Set(products.map(p => p.category))];
      categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        categoryFilter.appendChild(option);
      });
    }

    // Display products in cards
    function displayProducts(products) {
      productsContainer.innerHTML = '';
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4';

        // Optional: Custom category icon
        let icon = '';
        switch(product.category) {
          case 'electronics': icon = '💻'; break;
          case 'jewelery': icon = '💎'; break;
          case "men's clothing": icon = '👔'; break;
          case "women's clothing": icon = '👗'; break;
          default: icon = '🛍️';
        }

        card.innerHTML = `
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title"><span class="category-icon">${icon}</span>${product.title}</h5>
              <p class="card-text text-truncate">${product.description}</p>
              <p class="card-text fw-bold mt-auto">$${product.price.toFixed(2)}</p>
            </div>
          </div>
        `;
        productsContainer.appendChild(card);
      });
    }

    // Filter products by category
    categoryFilter.addEventListener('change', () => {
      filterAndDisplay();
    });

    // Search input filter
    searchInput.addEventListener('input', () => {
      filterAndDisplay();
    });

    // Sort products
    sortSelect.addEventListener('change', () => {
      filterAndDisplay();
    });

    function filterAndDisplay() {
      let filtered = [...allProducts];

      // Category filter
      const category = categoryFilter.value;
      if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
      }

      // Search filter
      const search = searchInput.value.toLowerCase();
      if (search) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(search) || p.description.toLowerCase().includes(search));
      }

      // Sorting
      const sort = sortSelect.value;
      switch(sort) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'title-asc':
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'title-desc':
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }

      displayProducts(filtered);
    }