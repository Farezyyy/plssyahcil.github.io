const mauButton = document.querySelector('.mau p');
const gaButton = document.querySelector('.ga p');


gaButton.addEventListener('click', function() {        // Membesarkan tombol "Mau"
    mauButton.style.width = '100%';
    mauButton.style.height = '700px';
    mauButton.style.fontSize = '80px';
    mauButton.style.alignItem = 'center';
    gaButton.style.display = 'none';
});
