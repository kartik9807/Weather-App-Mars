import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Input() {

  const [saveD, setSaveD] = useState(()=>{
    const saveData = localStorage.getItem("Added cities :- ");
    if(saveData){
      return JSON.parse(saveData)
    }else{
      return [];
    }
  })
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    region: "",
    temp: "",
    dustLevel: "",
    advisory: "",
    theme: "#ffffff"
  })

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Saved in LocalStorage")
    setSaveD([...saveD, formData])
    setFormData({
      id: "",
      name: "",
      region: "",
      temp: "",
      dustLevel: "",
      advisory: "",
      theme: "#ffffff"
    })
  }

  useEffect(() => {
    localStorage.setItem("Added cities :- ", JSON.stringify(saveD))
  }, [saveD])
 

  return (<>
    <div className="min-h-screen flex justify-center items-center bg-black text-white flex-col gap-5">
      <Link to="/"><button className="bg-orange-500 hover:bg-orange-400 transition-all duration-300 p-3 rounded-xl font-bold">Back to Dashboard</button></Link>
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-2xl flex flex-col gap-4 w-125">
          <h1 className="text-3xl font-bold text-center text-orange-400">Add Mars City</h1>
          <input required
            type="text"
            name="id"
            placeholder="City ID"
            value={formData.id}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          />

          <input
            required
            type="text"
            name="name"
            placeholder="Station Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          />

          <input
            required
            type="text"
            name="region"
            placeholder="Region"
            value={formData.region}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          />

          <input
            required
            type="number"
            name="temp"
            placeholder="Temperature"
            value={formData.temp}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          />

          <select required name="dustLevel" value={formData.dustLevel} onChange={handleChange} className="p-3 rounded-lg bg-gray-800">
            <option value="">Select Dust Level</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Extreme">Extreme</option>
          </select>

          <textarea
            required
            name="advisory"
            placeholder="Advisory Message"
            value={formData.advisory}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 h-28"
          />

          <div className="flex items-center gap-4">
            <label>Theme Color:</label>
            <input required type="color" name="theme" value={formData.theme} onChange={handleChange}/>
          </div>
          <button type="submit" className="bg-orange-500 hover:bg-orange-400 transition-all duration-300 p-3 rounded-xl font-bold">Add City</button>
      </form>

    </div>
  </>)
}

export default Input