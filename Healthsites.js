// Path to your external JSON file
const healthsiteJsonFile = 'Healthsites.json';

// Fetch the Vega-Lite specification from the external JSON file
fetch(healthsiteJsonFile)
    .then(response => response.json())
    .then(spec => {
        // Embed the fetched Vega-Lite specification into the div with id 'HealthsitesMap'
        vegaEmbed('#HealthsitesMap', spec).then(function(result) {
            console.log("Map rendered successfully");
        }).catch(console.error);
    })
    .catch(error => {
        console.error("Error loading the Vega-Lite spec:", error);
    });