// card 1 button clicked
document.getElementById('card-1-btn').addEventListener('click', function(){
    // data read
    const card1DonationAmount = inputToValue('card-1-input');
    const card1TotalDonation = elementToNumber('card-1-total-donation');
    const totalBalance = elementToNumber('total-balance');
    // display the value to card specific amount
    document.getElementById('card-1-total-donation').innerText = card1TotalDonation + card1DonationAmount;
    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card1DonationAmount;
})

// card 2 button clicked
document.getElementById('card-2-btn').addEventListener('click', function(){
    // data read
    const card2DonationAmount = inputToValue('card-2-input');
    const card2TotalDonation = elementToNumber('card-2-total-donation');
    const totalBalance = elementToNumber('total-balance');
    // display the value to card specific amount
    document.getElementById('card-2-total-donation').innerText = card2TotalDonation + card2DonationAmount;
    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card2DonationAmount;
})

// card 3 button clicked
document.getElementById('card-3-btn').addEventListener('click', function(){
    // data read
    const card3DonationAmount = inputToValue('card-3-input');
    const card3TotalDonation = elementToNumber('card-3-total-donation');
    const totalBalance = elementToNumber('total-balance');
    // display the value to card specific amount
    document.getElementById('card-3-total-donation').innerText = card3TotalDonation + card3DonationAmount;
    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card3DonationAmount;
})