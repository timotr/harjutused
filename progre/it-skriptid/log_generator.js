const fs = require('fs');
const path = require('path');

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateLogEntry() {
    const logLevels = ['INFO', 'WARNING', 'ERROR'];
    const errorCodes = [200, 401, 404, 500, 503];
    const messages = ['OK', 'Unauthorized access attempt', 'Page not found', 'Internal server error', 'Service unavailable'];
    
    const startDate = new Date('2022-01-01T00:00:00Z');
    const endDate = new Date('2023-12-31T23:59:59Z');
    const timestamp = randomDate(startDate, endDate).toISOString();
    const logLevel = logLevels[Math.floor(Math.random() * logLevels.length)];
    const errorCode = errorCodes[Math.floor(Math.random() * errorCodes.length)];
    const messageIndex = Math.floor(Math.random() * messages.length);
    const message = messages[messageIndex];
    
    return `${timestamp} ${logLevel} ${errorCode} - ${message}\n`;
}

function generateLogFile(entriesCount = 100) {
    const logFilePath = 'log.txt';
    let logData = '';

    for (let i = 0; i < entriesCount; i++) {
        logData += generateLogEntry();
    }

    fs.writeFileSync(logFilePath, logData, 'utf8');
    console.log(`Log file generated at ${logFilePath}`);
}

generateLogFile(1000); // Generate a log file with 1000 entries
