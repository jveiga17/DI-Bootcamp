// fetching API key and URL supported currency code
const apiKey = '19ed7099fdca65e8a4644663'; 
const supportedCodesEndpoint = 'https://open.er-api.com/v6/latest';

async function fetchSupportedCurrencies() {                    // to fetch supported currency from the API
    try {
        const response = await fetch(supportedCodesEndpoint);  // fetch() request -- path to the resource given through the variable
        const data = await response.json();                    // parsing it to json 
        return Object.keys(data.rates);                        // returning an array of currency codes
    } catch (error) {
        console.error('Error fetching supported currencies:', error);
        return [];
    }
}

async function populateCurrencyDropdowns() {                               // filling the dropdown menus
    const currencies = await fetchSupportedCurrencies();                   // calling the function that fetched the code
    // references for the dropdown menus
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    currencies.forEach(currency => {                                       // iterating through the list of currencies
        const option = document.createElement('option');
        
        // setting value and text
        option.value = currency;
        option.text = currency;

        // appending to dropdowns
        fromCurrencySelect.appendChild(option.cloneNode(true));
        toCurrencySelect.appendChild(option.cloneNode(true));
    });
}

async function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;
    const response = await fetch(url);                                    // fetch the conversion rates
    const data = await response.json();

    const rate = data.rates[toCurrency];                                  // getting the conversion rate for the end currency

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Converted Amount: ${amount} ${fromCurrency} = ${amount * rate} ${toCurrency}`;   // display
}

function switchCurrencies() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    // swapping selected values from dropdown
    const swap = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = swap;
}

populateCurrencyDropdowns();