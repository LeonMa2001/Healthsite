// Path to your external JSON file
const HealthFactorJsonFile = 'HealthFactor.json';

// Fetch the Vega-Lite specification from the external JSON file
fetch(HealthFactorJsonFile)
    .then(response => response.json())
    .then(spec => {
        // Embed the fetched Vega-Lite specification into the div with id 'HealthFactorChart'
        vegaEmbed('#HealthFactorChart', spec).then(function(result) {
            console.log("Chart rendered successfully");
        }).catch(console.error);
    })
    .catch(error => {
        console.error("Error loading the Vega-Lite spec:", error);
    });