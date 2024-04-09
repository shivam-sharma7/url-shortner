import { useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../../api'

const FormContainer = () => {
const [fullUrl, setFullUrl] = useState('')

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {  
      await axios.post(`${apiUrl}/shortUrl`, {
        // database field
           fullUrl: fullUrl
      });
      setFullUrl('')
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto p-2">
        <div className="bg-[url('../src/assets/bg-img.jpg')] bg-center my-8 pb-5 rounded-xl bg-cover">
           <h1 className="text-white text-center text-4xl p-4 font-medium">URL Shortener</h1>
           <p className="text-white text-center text-2xl pb-2">paste your link to be shorten </p>
           <p className="text-white text-center pb-5">use free URL shortener tool to create a shortened & neat link</p>
           <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute text-gray-800 my-4 mx-1 font-bold">Urlshortener.link / </div>
                <input 
                  type="text" 
                  className="w-full p-4 ps-36 rounded-lg" 
                  placeholder="paste your link here..."
                  value={fullUrl}
                  onChange={(e) => setFullUrl(e.target.value)}
                  />
                  <button type="submit" className="absolute top-0 end-0
                  bg-green-600 hover:bg-blue-700 p-4 rounded overflow-hidden">Shorten URL</button>
              </div>
            </div>
           </form>
        </div>
    </div>
  )
}

export default FormContainer