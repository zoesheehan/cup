let currentLevel = 50;

function addPercentage() {
    document.getElementById('options').style.display = 'block';
}

function increaseCup(amount, activity) {
    if (currentLevel < 100) {
        currentLevel += amount;
        document.getElementById('liquidLevel').style.height = currentLevel + '%';
        document.getElementById('options').style.display = 'none';
        alert(`You added ${amount}% for ${activity}!`);
    } else {
        alert('Cup is already full!');
    }
}

// Reset cup after 24 hours
setInterval(() => {
    currentLevel = 50;
    document.getElementById('liquidLevel').style.height = currentLevel + '%';
}, 24 * 60 * 60 * 1000);