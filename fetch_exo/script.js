fetch('https://api.punkapi.com/v2/beers',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Fuggles",
    })
}).then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

    