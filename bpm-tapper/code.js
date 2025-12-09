let clicks = [];
let min_clicks = 10;

let tapButtonVariable = document.getElementById("tapButton");
tapButtonVariable.addEventListener("click", getBPM);

function getBPM() {
    let currentTime = Date.now();
    clicks.push(currentTime);
    
    if (clicks.length >= min_clicks) {
        let calculatedBPM = calculateBPMFromClicks(clicks);
        alert("Your calculated BPM is: " + calculatedBPM);
        clicks = []; // Reset clicks after calculation
    }
}

function calculateBPMFromClicks(clickTimestamps) {
    let totalIntervals = 0;
    for (let i = 1; i < clickTimestamps.length; i++) {
        let interval = clickTimestamps[i] - clickTimestamps[i - 1];
        totalIntervals += interval;
    }

    let numIntervals = clickTimestamps.length - 1;
    let averageInterval = totalIntervals / numIntervals;

    return Math.round(60000 / averageInterval);
}
