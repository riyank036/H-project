// 1. Create a counter in Javascript (counts down from 30 to 0)

let count = 30;

function updateCountdown() {
  console.log(count);
  count--;
  
  if (count < 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}

// Start immediately and update every second
updateCountdown(); // Show initial value (30)
const timer = setInterval(updateCountdown, 1000);

// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

function measureTimeoutDelay(delayMs = 0) {
    const start = performance.now(); // High-resolution timestamp
    
    setTimeout(() => {
        const end = performance.now();
        const actualDelay = end - start;
        console.log({
            requestedDelay: delayMs,
            actualDelay: actualDelay,
            difference: actualDelay - delayMs
        });
    }, delayMs);
}

// Test with different delay values
measureTimeoutDelay(0);    // "Immediate" execution
measureTimeoutDelay(100);  // 100ms requested delay
measureTimeoutDelay(1000); // 1 second delay

// 3. Create a terminal clock (HH:MM:SS)

const readline = require('readline');

function terminalClock() {
    // Clear terminal and hide cursor
    process.stdout.write('\x1B[?25l');
    readline.cursorTo(process.stdout, 0, 0);
    
    function update() {
        const now = new Date();
        const time = [
            now.getHours().toString().padStart(2, '0'),
            now.getMinutes().toString().padStart(2, '0'),
            now.getSeconds().toString().padStart(2, '0')
        ].join(':');

        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`🕒 ${time} `);
    }

    // Update immediately and every second
    update();
    const interval = setInterval(update, 1000);

    // Cleanup on exit
    process.on('SIGINT', () => {
        clearInterval(interval);
        process.stdout.write('\x1B[?25h\n'); // Show cursor
        process.exit();
    });
}

terminalClock();
