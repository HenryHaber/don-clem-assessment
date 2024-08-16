const data = require('./internet_hub.json')

function assignSerialNumbers(data) {
    // Validate and clean JSON object
    if (typeof data !== 'object' || !Array.isArray(data.Internet_hubs)) {
        throw new Error("Invalid JSON structure");
    }

    // Prepare the serial numbers from C25CTW00000000001471 to C25CTW00000000001478
    const baseSerial = "C25CTW0000000000147";
    const serialNumbers = [];
    for (let i = 1; i <= 8; i++) {
        serialNumbers.push(baseSerial + (i + 70));  // 70 + i gives the last digits 71 to 78
    }

    // Extract hub ids and their last digits
    const hubsWithLastDigit = data.Internet_hubs.map(hub => {
        const lastDigit = parseInt(hub.id.slice(-1));
        return { hub, lastDigit };
    });

    // Sort hubs based on the last digit of the id in reverse order
    hubsWithLastDigit.sort((a, b) => b.lastDigit - a.lastDigit);

    // Assign serial numbers in the reverse order
    hubsWithLastDigit.forEach((item, index) => {
        item.hub.serial_number = serialNumbers[index];
    });

    return {
        original: JSON.parse(JSON.stringify(data)),
        updated: data 
    };
}


const result = assignSerialNumbers(data);
console.log(JSON.stringify(result, null, 2));
