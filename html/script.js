// Функция для отображения героев
function displayHeroes(heroList) {
  const heroCards = document.getElementById("hero-cards");
  heroCards.innerHTML = ""; // Очистить предыдущий список

  heroList.forEach(hero => {
    const card = document.createElement("div");
    card.className = "hero-card";

    card.innerHTML = `
      <img src="${hero.image}" alt="${hero.name}" class="hero-image">
      <h2 class="hero-name">${hero.name}</h2>
      <p class="hero-description">${hero.description}</p>
      <p class="hero-role">Роль: ${hero.role}</p>
    `;

    heroCards.appendChild(card);
  });
}

// Функция для фильтрации героев
function searchHeroes(event) {
  const searchTerm = event.target.value.toLowerCase();
  fetch('heroes.json')
    .then(response => response.json())
    .then(heroes => {
      const filteredHeroes = heroes.filter(hero =>
        hero.name.toLowerCase().includes(searchTerm) ||
        hero.role.toLowerCase().includes(searchTerm) ||
        hero.description.toLowerCase().includes(searchTerm)
      );
      displayHeroes(filteredHeroes);
    })
    .catch(error => console.error('Ошибка при загрузке данных:', error));
}

// Инициализация
document.getElementById("search").addEventListener("input", searchHeroes);
fetch('heroes.json')
  .then(response => response.json())
  .then(heroes => displayHeroes(heroes))
  .catch(error => console.error('Ошибка при загрузке данных:', error));
