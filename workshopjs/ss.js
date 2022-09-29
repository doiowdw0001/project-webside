let city ="bangkok"; 
const apikey="";

function setdata(){
    showWeather();
}
async function showWeather(){
    try{
         const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
            const res = await fetch(url);
            const data=await res.json();
            showDataToUI(data);
    } catch (error){
        console.log(error);
    }
}

function showDataToUI(data){
    console.log(data);
    const city=document.getElementById('city');
    const state=document.getElementById('state');
    const weather=document.getElementById('weather');
    const status=document.getElementById('status');
    const humidity=document.getElementById('humidity');
    const wind=document.getElementById('wind');

    city.innerText=data.name;
    state.innerText=data.sys.country;
    weather.children[0].innerHTML=cl(parseInt(data.main.temp))+"C&deg;";
    weather.children[1].innerHTML="min :"+cl(parseInt(data.main.temp_min))+" C&deg;"+" max :"+cl(parseInt(data.main.temp_max ))+" C&deg;";

    status.innerText=data.weather[0].main
    humidity.innerText="humidity : "+data.main.humidity
    wind.innerText="wind speed : "+data.wind.speed

}

function cl (k){
    return k-273;
}
setdata();
