// Path to your external JSON file
const healthUseJsonFile = 'UseHealthService.json';

// Fetch the Vega-Lite specification from the external JSON file
fetch(healthUseJsonFile)
    .then(response => response.json())
    .then(spec => {
        // Embed the fetched Vega-Lite specification into the div with id 'UseHealthServiceChart'
        vegaEmbed('#UseHealthServiceChart', spec).then(function(result) {
            console.log("Chart rendered successfully");
        }).catch(console.error);
    })
    .catch(error => {
        console.error("Error loading the Vega-Lite spec:", error);
    });