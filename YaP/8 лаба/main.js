const corsProxy = "https://cors-anywhere.herokuapp.com/";
const randomNameUrl = "https://random-data-api.com/api/v1/randomuser";
const animalApiBase = "https://somerandom-api.ml/api/";

async function fetchRandomName() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const nameElement = document.getElementById('random-name');
        const hello = document.getElementById('hello')
        if (nameElement) {
            hello.textContent = "Тогда может.. "
            nameElement.textContent = data.results[0].name.first;
        } else {
            console.error("Элемент #random-name не найден");
        }
    } catch (error) {
        console.error("Ошибка получения имени:", error);
    }
}

function showAnimalSelection() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('animal-selection').classList.remove('hidden');
    document.getElementById('animal-info').classList.add('hidden');
}

async function selectAnimal(animal) {
    try {
        let imageUrl, fact;

        if (animal === 'cat') {
            const catResponse = await fetch("https://api.thecatapi.com/v1/images/search");
            const catData = await catResponse.json();
            imageUrl = catData[0].url;

            const catFactResponse = await fetch("https://catfact.ninja/fact");
            const catFactData = await catFactResponse.json();
            fact = catFactData.fact;
        } else if (animal === 'dog') {
            const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
            const dogData = await dogResponse.json();
            imageUrl = dogData.message;

            const dogFactResponse = await fetch("https://dogapi.dog/api/facts");
            const dogFactData = await dogFactResponse.json();
            fact = dogFactData.facts[0];
        }
        else if (animal === 'fox') {
            const foxResponse = await fetch("https://randomfox.ca/floof/");
            const foxData = await foxResponse.json();
            imageUrl = foxData.image;

            const foxFactResponse = await fetch("https://some-random-api.ml/facts/fox");
            const foxFactData = await foxFactResponse.json();
            fact = foxFactData.fact;
        }
        const translatedFact = await translateText(fact);
        document.getElementById('fact').textContent = translatedFact;
        document.getElementById('animal-image').src = imageUrl;
        document.getElementById('animal-selection').classList.add('hidden');
        document.getElementById('animal-info').classList.remove('hidden');
    } catch (error) {
        console.error("Ошибка получения данных о животном:", error);
        alert("Не удалось загрузить информацию.");
    }
}

async function translateText(text) {
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ru`);
        const data = await response.json();
        return data.responseData.translatedText;
    } catch (error) {
        console.error("Ошибка перевода:", error);
        return text;
    }
}
function returnToName(){
    document.getElementById('welcome-screen').classList.remove('hidden');
    document.getElementById('animal-selection').classList.add('hidden');
    document.getElementById('animal-info').classList.add('hidden');
}

function goBackToSelection() {
    document.getElementById('animal-info').classList.add('hidden');
    document.getElementById('animal-selection').classList.remove('hidden');
    document.getElementById('fact').textContent = '';
    document.getElementById('animal-image').src = '';
}

