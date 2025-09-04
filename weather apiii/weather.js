    const API_KEY = "a516a792024accb77f34519e395792f4"
    const searchBtn = document.getElementById("searchBtn")
    const locBtn = document.getElementById("locBtn")
    const cityInput = document.getElementById("cityInput")
    const errorDiv = document.getElementById("error")
    const searchPage = document.getElementById("searchPage")
    const weatherPage = document.getElementById("weatherPage")

    async function fetchWeather(url) {
      try {
        errorDiv.textContent = ""
        const res = await fetch(url)
        if (!res.ok) throw new Error("City not found")
        const data = await res.json()

        document.getElementById("temp").textContent = Math.round(data.main.temp) + "°C"
        document.getElementById("desc").textContent = data.weather[0].description
        document.getElementById("humidity").textContent = data.main.humidity + "%"
        document.getElementById("wind").textContent = data.wind.speed + " m/s"
        document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

        searchPage.style.display = "none"
        weatherPage.style.display = "block"
      } catch (err) {
        errorDiv.textContent = err.message
      }
    }

    searchBtn.addEventListener('click', () => {
      const city = cityInput.value.trim()
      if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=gandhinagar&appid=017d35974ee5a138dfc3214cdbe259cc`
        fetchWeather(url)
      }
    })

    cityInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchBtn.click()
    })

    locBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const { latitude, longitude } = pos.coords
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          fetchWeather(url)
        }, () => { errorDiv.textContent = "Unable to access location" })
      } else {
        errorDiv.textContent = "Geolocation not supported"
      }
    })