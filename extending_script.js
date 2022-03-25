// Loading page onto browser
window.onload = () => {
  render();
};

const models = [
  // Loading in models and setting the rotation and scale in our desired way
  {
    url: './assets/myModel/Car.obj',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },
  // If you want to add more models you can paste the above code and paste it here 
];

//Setting the model index to 0 to be able to get all the models we loaded from the first to the last model
let modelIndex = 0;
// Setting the model as an entity
const setModel = (model, entity) => {
  //Giving the model a position
  if (model.position) {
    entity.setAttribute('position', model.position);
  }
  // Specifying the type of model/file it is
  entity.setAttribute('obj-model', model.url);
};

function render() {
  const scene = document.querySelector('a-scene');

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}
