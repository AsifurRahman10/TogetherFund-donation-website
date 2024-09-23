// card 1 button clicked
document.getElementById('card-1-btn').addEventListener('click', function(){
    // data read
    const card1DonationAmount = inputToValue('card-1-input');
    const card1TotalDonation = elementToNumber('card-1-total-donation');
    const card1title = elementToText('card-1-title');
    const totalBalance = elementToNumber('total-balance');
    // display the value to card specific amount
    document.getElementById('card-1-total-donation').innerText = card1TotalDonation + card1DonationAmount;
    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card1DonationAmount;

    // update it on history
    updateOnHistory(card1DonationAmount, card1title);
})

// card 2 button clicked
document.getElementById('card-2-btn').addEventListener('click', function(){
    // data read
    const card2DonationAmount = inputToValue('card-2-input');
    const card2TotalDonation = elementToNumber('card-2-total-donation');
    const card2title = elementToText('card-2-title');
    const totalBalance = elementToNumber('total-balance');
    // display the value to card specific amount
    document.getElementById('card-2-total-donation').innerText = card2TotalDonation + card2DonationAmount;
    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card2DonationAmount;

    // update it on history
    updateOnHistory(card2DonationAmount, card2title);
})

// card 3 button clicked
document.getElementById('card-3-btn').addEventListener('click', function(){
    // data read
    const card3DonationAmount = inputToValue('card-3-input');
    const card3TotalDonation = elementToNumber('card-3-total-donation');
    const card3title = elementToText('card-3-title');
    const totalBalance = elementToNumber('total-balance');
    // display the value to card specific amount
    document.getElementById('card-3-total-donation').innerText = card3TotalDonation + card3DonationAmount;
    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card3DonationAmount;

    // update it on history
    updateOnHistory(card3DonationAmount, card3title);
})

// history btn clicked
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
    btnColorShift('history-btn', 'donation-btn');
})

// donation btn clicked
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
    btnColorShift('donation-btn', 'history-btn');
})