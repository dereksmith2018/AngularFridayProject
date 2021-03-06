$(document).ready(function() {
    $('#weatherLocation').click(function() {
      const city = $('#location').val();
      $('#location').val("");
  
      let request = new XMLHttpRequest();
      const url = `http://
      api.openweathermap.org/data/2.5/weather?lat=45.5287&lon=-121.8254&appid=${process.env.API_KEY}`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
  
      request.open("GET", url, true);
      request.send();
  
     const getElements = function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      }
    });
  });