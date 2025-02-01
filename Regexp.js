function creditCard (cardNumber) {
    const cardPattern = {
        //Starts with verve prefixes - 5061, 6500, 5078, 5021 or 5044
        verve: /^(5061|6500|5078|5021|5044|)[0-9]{12,15}$/
    };

    for (let [cardType, pattern] of Object.entries(cardPattern)) {
        if(pattern.test(cardNumber)) {
            return `Valid ${cardType.toUpperCase()} card`;
        }
        
    }

    return "Invalid Verve Card Number"

}

console.log(creditCard("5061123456789012")); // Valid VERVE card
console.log(creditCard("6500123456789012345")); // Valid VERVE card
console.log(creditCard("8904123456789012345")); // Invalid VERVE card