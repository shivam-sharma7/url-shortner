import { useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../../api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 
type formContainerProps = {
  updateReloadState: () => void
}

const FormContainer = ({ updateReloadState }: formContainerProps) => {

const [fullUrl, setFullUrl] = useState('')

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!fullUrl || !fullUrl.trim() || !fullUrl.includes("https://")) {
      toast.error('Provide a valid and secure URL', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    try {  
      await axios.post(`${apiUrl}/api/shortUrl`, {
        // database field name
           fullUrl: fullUrl
      });
      
      toast.success('URL has been shortened', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    

      setFullUrl('')
      updateReloadState()
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto p-4">
        <div className="bg-[url('../src/assets/bg.jpg')] bg-center my-8 pb-5 rounded-xl bg-cover">
           <h1 className="text-white text-center text-3xl p-4 font-medium">URL- link shortener service</h1>
           <p className="text-white text-center text-2xl pb-2 font-medium">paste your link to be shorten </p>
           <p className="text-white text-center pb-5  font-medium">Use free URL shortener tool to create a shortened & neat link</p>
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
                  bg-green-700 hover:bg-blue-700 p-4 rounded-lg overflow-hidden font-semibold">Shorten URL</button>
                  <ToastContainer />
              </div>
            </div>
           </form>
        </div>
    </div>
  )
}

export default FormContainer