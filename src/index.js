module.exports = function toReadable (number) {
        const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        
        if (number === 0) return units[0];
    
        let readable = '';
    
        if (Math.floor(number / 100) > 0) {
            readable += units[Math.floor(number / 100)] + ' hundred';
        }
    
        let remainder = number % 100;
    
        if (remainder > 0) {
            if (readable.length > 0) {
                readable += ' ';
            }
            
            if (remainder < 10) {
                readable += units[remainder];
            } else if (remainder < 20 && remainder > 10) {
                readable += teens[remainder - 11];
            } else if (remainder >= 10 && remainder < 20) {
                readable += tens[0]; 
            } else {
                readable += tens[Math.floor(remainder / 10) - 1];
                remainder = remainder % 10;
                if (remainder > 0) {
                    readable += ' ' + units[remainder];
                }
            }
        }
        return readable.trim();
    }
