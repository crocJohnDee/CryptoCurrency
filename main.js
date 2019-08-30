const cryptos = [
    "ETH",
    "XRP",
    "BCH",
    "USDT",
    "LTC",
    "BNB",
    "EOS",
    "BSV",
    "XLM",
    "ADA",
    "XMR",
    "LEO",
    "TRX",
    "HT",
    "DASH",
    "ETC",
    "MIOTA",
    "XTZ",
    "LINK",
    "NEO",
    "MKR",
    "USDC",
    "XEM",
    "ATOM",
    "ONT",
    "CRO",
    "ZEC",
    "DOGE",
    "VSYS",
    "HEDG",
    "DCR",
    "VET",
    "BAT",
    "QTUM",
    "PAX",
    "TUSD",
    "BTG",
    "OMG",
    "ZB",
    "RVN",
    "LSK",
    "NANO",
    "KCS",
    "INB",
    "BCD",
    "WAVES",
    "BTT",
    "ALGO",
    "NRG",
    "HOT",
    "ICX",
    "LAMB",
    "BCN",
    "THETA",
    "EGT",
    "DGB",
    "HC",
    "ZRX",
    "BTS",
    "NPXS",
    "IOST",
    "REP",
    "NEX",
    "MONA",
    "BTM",
    "KMD",
    "DAI",
    "MAID",
    "SC",
    "QNT",
    "AOA",
    "XVG",
    "RIF",
    "WIN",
    "ZIL",
    "AE",
    "ETP",
    "GNT",
    "STEEM",
    "ABBC",
    "SNT",
    "ARDR",
    "MCO",
    "ENJ",
    "REN",
    "WTC",
    "GXC",
    "SNX",
    "XZC",
    "SOLVE",
    "WAX",
    "BEAM",
    "STRAT",
    "ELA",
    "NEXO",
    "ELF",
    "GRIN",
    "PAI",
    "EURS",
    "ZEN"
]

let cryptoOption = document.querySelector("#crypto-currency");
for (let i = 0; i < cryptos.length; i++) {
    let option = document.createElement("option");
    let text = document.createTextNode(cryptos[i])
    option.appendChild(text);
    cryptoOption.appendChild(option);

}

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
                .innerHTML = `${fiat} ${(data.ticker.price * amount).toLocaleString()}`
        });
});





