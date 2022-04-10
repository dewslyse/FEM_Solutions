const toggleNumber = document.querySelectorAll('.annual-price');
const toggler = document.querySelector('.checkbox');

toggler.addEventListener('click', () => {
    toggleNumber.forEach((item) => item.classList.toggle('hidden'));
});