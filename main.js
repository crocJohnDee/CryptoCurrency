const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let crypto = (e.target[0].value).toLowerCase();
    let amount = e.target[1].value;
    let fiat = (e.target[2].value).toLowerCase();

    fetch(`https://api.cryptonator.com/api/ticker/${crypto}-${fiat}`)
        .then((response) => response.json())
        .then((myJson) => {
            let data = JSON.parse(JSON.stringify(myJson));
            document.querySelector("#output")
                .innerHTML = `${fiat} ${(data.ticker.price * amount).toFixed(2)}`
        });
});





