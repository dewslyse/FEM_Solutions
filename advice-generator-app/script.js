const baseURL = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('.id');
const adviceText = document.querySelector('#quote-text');
const getAdvice = document.querySelector('.dice');

const randomAdvice = async () => {
    const response = await fetch(baseURL);
    const newAdvice = await response.json();
    const { id, advice } = newAdvice.slip;

    adviceId.textContent = id;
    adviceText.textContent = advice;
}

getAdvice.addEventListener('click', () => {
    randomAdvice();
});