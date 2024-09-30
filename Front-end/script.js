// script.js
document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (name && amount) {
        const donationItem = document.createElement('li');
        donationItem.textContent = `${name} doou R$ ${amount}`;
        document.getElementById('donations-list').appendChild(donationItem);

        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';
    }
});
