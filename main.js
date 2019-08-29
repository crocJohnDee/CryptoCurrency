const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let crypto = (e.target[0].value);
    let amount = e.target[1].value;
    let fiat = (e.target[2].value);

    fetch(`https://api.cryptonator.com/api/ticker/${(crypto.toLowerCase())}-${(fiat).toLowerCase()}`)
        .then((response) => response.json())
        .then((myJson) => {
            let data = JSON.parse(JSON.stringify(myJson));
            document.querySelector("#output")
                .innerHTML = `${fiat} ${(data.ticker.price * amount).toFixed(2)}`
        });
});





