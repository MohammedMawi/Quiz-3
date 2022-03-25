// These couple lines are just getting the page to set up the locations and load the models
window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

// This function is letting the code know what the gps coordinates and the places the model will load in
function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            location: {
                lat: '43.6242309',
                lng: '-79.5861619',
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        // Giving variables to the latitude and longitude coordinates
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        
        // This line is loading the obj model from the folder
        model.setAttribute('obj-model', './assets/MyModel/Car.obj');

        // This line sets up the rotation for the model and you can change it to raotate however you want
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
              
        // This line sets up the scale for the model and you can change the scale to be however you want
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}