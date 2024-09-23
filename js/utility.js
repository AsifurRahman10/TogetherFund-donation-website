// get value form input
function inputToValue(id){
    return Number(document.getElementById(id).value);
}
// get number form element
function elementToNumber(id){
    return Number(document.getElementById(id).innerText);
}
function elementToText(id){
    return document.getElementById(id).innerText;
}
// update to history
function updateOnHistory(donationAmount, cardTitle){
    const div = document.createElement('div');
    div.classList.add('border-2', 'rounded-2xl', 'space-y-5', 'p-8')
    div.innerHTML = `
    <p class="text-xl font-bold">${donationAmount} Taka is ${cardTitle}</p>
    <p class="font-light">Date : ${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-container');
    document.getElementById('history-container').insertBefore(div, historyContainer.lastChild)
}

// btn color shift
function btnColorShift(clickedID, changedID){
    // btn color change
    document.getElementById(changedID).classList.remove('bg-btn_primary');
    document.getElementById(changedID).classList.add('text-text_light', 'bg-transparent');

    document.getElementById(clickedID).classList.remove('bg-transparent');
    document.getElementById(clickedID).classList.add('bg-btn_primary'); 
}

function historyBtnClick(cardID, historyID){
    document.getElementById(cardID).classList.add('hidden');
    document.getElementById(historyID).classList.remove('hidden');
}



