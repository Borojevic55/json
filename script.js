let createCarProfile = function(car) {
    let newDiv = document.createElement('div');
    let carImage = document.createElement('img');
    let ul = document.createElement('ul');
    let makeLi = document.createElement('li');
    let modelLi = document.createElement('li');
    let yearLi = document.createElement('li');
    let priceLi = document.createElement('li');
  
    let makeTxt = document.createTextNode("Make: " + car.make);
    let modelTxt = document.createTextNode("Model: " + car.model);
    let yearTxt = document.createTextNode("Year: " + car.year);
    let priceTxt = document.createTextNode("Price: $" + car.price);
  
    carImage.src = car.image;
    carImage.alt = car.make + " " + car.model;
  
    makeLi.appendChild(makeTxt);
    modelLi.appendChild(modelTxt);
    yearLi.appendChild(yearTxt);
    priceLi.appendChild(priceTxt);
  
    ul.appendChild(makeLi);
    ul.appendChild(modelLi);
    ul.appendChild(yearLi);
    ul.appendChild(priceLi);
  
    newDiv.appendChild(carImage);
    newDiv.appendChild(ul);
  
    newDiv.classList.toggle('car');
  
    let content = document.getElementById('content');
    content.appendChild(newDiv);
  }
  
  let createCarProfilesFromJson = function(cars) {
    for (let car of cars) {
      createCarProfile(car);
    }
  }
  
  fetch('cars.json')
    .then(response => response.json())
    .then(cars => createCarProfilesFromJson(cars))
    .catch(error => {
      console.error('Error:', error);
    });