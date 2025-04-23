document.body.innerHTML = '';

const header = document.createElement('header');
const main = document.createElement('main');
main.className = 'content';
const aside = document.createElement('aside');
const section = document.createElement('section');
const headerDiv = document.createElement('div');
headerDiv.className = 'header-d';
headerDiv.textContent = 'Выберите лицо, которое нравится вам больше остальных:';
const displayDiv = document.createElement('div');
displayDiv.className = 'display';

section.appendChild(headerDiv);
section.appendChild(displayDiv);
main.appendChild(aside);
main.appendChild(section);
document.body.appendChild(header);
document.body.appendChild(main);

const firstNames = ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Артём', 'Илья', 'Кирилл', 'Михаил', 'Никита', 'Матвей', 'Роман', 'Егор', 'Арсений'];
const lastNames = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов'];

function generateRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

let cardCount = 0;

function createCard() {
    if (cardCount >= 6) {
        clearInterval(intervalId);
        return;
    }

    cardCount++;

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = `https://thispersondoesnotexist.com/?${Date.now()}`;
    img.alt = 'Avatar';

    const description = document.createElement('div');
    description.className = 'description';

    const p = document.createElement('p');
    p.textContent = generateRandomName();

    description.appendChild(p);
    card.appendChild(img);
    card.appendChild(description);
    displayDiv.appendChild(card);
}

const intervalId = setInterval(createCard, 2000);