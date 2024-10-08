// Path to your external JSON file
const jsonFile = 'Conditions.json';

// Fetch the Vega-Lite specification from the external JSON file
fetch(jsonFile)
    .then(response => response.json())
    .then(spec => {
        // Embed the fetched Vega-Lite specification into the div with id 'ConditionsChart'
        vegaEmbed('#ConditionsChart', spec).then(function(result) {
            console.log("Map rendered successfully");
        }).catch(console.error);
    })
    .catch(error => {
        console.error("Error loading the Vega-Lite spec:", error);
    });