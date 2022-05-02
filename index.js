function start()
{
    var city=document.getElementById('place').value;
    var url="http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=cf65d0c5f5cfffb9e7c92e59ec5e2e80";
    // console.log(url);
    fetch(url).then(
        (res)=>{
            res.json().then(
                (jsonFormat)=>{
                    var lat=jsonFormat[0]["lat"];
                    var lon=jsonFormat[0]["lon"];
                    url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=cf65d0c5f5cfffb9e7c92e59ec5e2e80";
                    fetch(url).then(
                        (data)=>{
                            data.json().then(
                                (jsonWeatherFormat)=>{
                                    var temp=parseInt(jsonWeatherFormat["main"]["temp"]-273);
                                    var f_like=parseInt(jsonWeatherFormat["main"]["feels_like"]-273);
                                    var humidity=jsonWeatherFormat["main"]["humidity"];
                                    var climate=jsonWeatherFormat["weather"][0]["main"];
                                    console.log(temp+" "+f_like+" "+humidity+" "+climate);
                                    document.getElementById('temp').innerHTML=temp;
                                    document.getElementById('f_like').innerHTML=f_like;
                                    document.getElementById('humidity').innerHTML=humidity;
                                    document.getElementById('climate').innerHTML=climate;
                                }
                            )
                        }
                    )
                }
            )
        }
    )
}