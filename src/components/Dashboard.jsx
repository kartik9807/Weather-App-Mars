import React, { useState,useEffect } from 'react'
import data from '../data/db.json'
import {Link} from 'react-router-dom'
import Low from '../assets/Low.svg'
import Moderate from '../assets/Moderate.svg'
import High from '../assets/High.svg'
import Extreme from '../assets/Extreme.svg'

const dustIcons ={
    Low: Low,
    Moderate: Moderate,
    High: High,
    Extreme: Extreme
}
const Dashboard = () => {
    const [cities, setcities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const jsonData = data
    useEffect(() => {
        setcities(jsonData.map((items)=> items.name))
    },[])
    
    const handleClick = ({city})=>{
        console.log("Selected city: " + city)
        setSelectedCity(city)
    }

  return (<div className='flex flex-col gap-2'>
    <div className='bg-amber-700 shadow-2xl h-150 rounded-2xl w-200'>
        <div className='flex mx-auto gap-4 p-4 justify-between border-b-2 border-amber-950 text-black'>
            <div className="text flex flex-col">
                <div className='title text-5xl font-extrabold text-amber-950'>WeatherForcast</div>
                <div className="text-xl text-amber-950 font-bold ml-2">At Mars Colony</div>
            </div>
            <div className="city flex flex-col items-center gap-1">
                <h2 className='text-amber-950 font-bold text-xl'>Select Your City</h2>
                <select onChange={(e) => handleClick({city: e.target.value})} value={selectedCity} className="font-bold text-amber-950 text-xl border-2 rounded-2xl py-1 px-2" >
                    {cities.map(city=>{ return (
                        <option key={city} value={city} className='text-black bg-amber-500' >{city}</option>
                    )})}
                </select>
            </div>
        </div>
        {!selectedCity?(<div className='flex justify-center text-center items-center mt-40 text-slate-800 font-extrabold text-4xl'>Please select your city <br></br> And Check Your city weather</div>):
        (<div className='content flex gap-9 flex-col text-white shadow-2xl font-bold text-2xl h-max m-4 rounded-2xl p-4 justify-center transition-all duration-700 ease-in-out' style={{backgroundColor:`${jsonData.find(item=> item.name === selectedCity)?.theme}`,height:"458.4px"}}>
            <div className='box flex gap-9 flex-col justify-between relative transition-all duration-75'>
                <h1  className='text-emerald-950 font-extrabold'>Your City name :- <span className='text-red-950'>{selectedCity}</span></h1>
                <h1  className='text-emerald-950 font-extrabold'>Region :- <span className='text-red-950'>{jsonData.find(item=> item.name === selectedCity)?.region}</span></h1>
                <h1  className='text-emerald-950 font-extrabold'>Temperature :- <span className='text-red-950'>{jsonData.find(item=> item.name === selectedCity)?.temp}</span></h1>
                <h1  className='text-emerald-950 font-extrabold'>Dust level :- <span className='text-red-950'>{jsonData.find(item=> item.name === selectedCity)?.dustLevel}</span></h1>
                <img src={dustIcons[jsonData.find(item=> item.name === selectedCity)?.dustLevel]} alt="" style={{height:"120px",width:"120px",position:"absolute",right:"50px"}} />
            </div>
            <h1  className='text-emerald-950 font-extrabold'>Life support guide :- <span className='text-red-950'>{jsonData.find(item=> item.name === selectedCity)?.advisory}</span></h1>
        </div>)}
    </div>
    <div className='flex justify-center items-center'><Link to="/input"><button className='text-zinc-50 bg-black py-2 px-4 font-extrabold text-xl rounded-xl cursor:pointer hover:bg-transparent border-2 border-black transition-all duration-300 '>ADD YOUR CITY</button></Link></div>
  </div>)
}

export default Dashboard
