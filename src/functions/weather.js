const axios = require('axios');

async function weather(country, city)
{
    const url = `https://www.timeanddate.com/weather/${country}/${city.replaceAll(' ','')}`
    response = await axios.get(url)
    html = response.data
    content = html.split('<div id=qlook class=bk-focus__qlook>')[1].split('<div id=bk-map class=bk-focus__map>')[0]
    lines = content.split("</").filter(div => !div.endsWith(">")).slice(2).map(div => div.replaceAll("&nbsp"," "))
    forecast = lines[1].split(">Forecast: ")[1].split(";°C")[0].split("/")

    return {
        title: lines[0].split("<p>")[1],
        feels_like: lines[1].split("Feels Like: ")[1].split(";°C")[0],
        high: forecast[0],
        low: forecast[1],
        wind: lines[2].split("m/s")[0].split("br>Wind: ")[1],
        visibility: lines[11].split("<td>")[1].split(";km")[0],
        pressure: lines[13].split("<td>")[1].split("mbar")[0],
        humidity: lines[15].split("<td>")[1].split("%")[0]
    }   
}

(async () => {
    x = await weather("france","paris")
    console.log(x)
})()