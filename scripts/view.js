updateView();
function updateView() {
  let div = document.getElementById('app');
  html = /*html*/ `
    <div class="card">
      <div class="search">
        <input type="text" placeholder="Enter city name" spellcheck="false"/>
        <button><img src="img/search.png"/></button>
      </div>
      <div class="error">
        <p>Invalid city name</p>
      </div>
      <div class="weather">
        <img src="img/Clear.png" class="weather-icon"/>
        <h1 class="temp">??°C</h1>
        <h2 class="city">city</h2>
        <div class="details">
          <div class="col">
            <img src="img/humidity.png"/>
            <div>
              <p class="humidity">??%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div class="col">
            <img src="img/wind.png"/>
            <div>
              <p class="wind">?? km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  div.innerHTML = html;
}
