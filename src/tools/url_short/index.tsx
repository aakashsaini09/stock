import axios from "axios"
import { useState } from "react"

const Url_short = () => {
    const [userUrl, setuserUrl] = useState('')
    const [sortedUrl, setsortedUrl] = useState('')
    const convertUrl = async() => {
        try {  
            const res = await axios.post('https://shrtlnk.dev/api/v2/link',{url: userUrl}, 
                {headers: { 'api-key': 'ZlNBz8KDuWmSLloaAq2WGwogZaNEP6uwn5N49hhzAou8a', 'Accept': 'application/json','Content-Type': 'application/json'
                  }});
            const data = await res.data
            setsortedUrl(data.shrtlnk);
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <>
      <div className="main h-[100vh] w-[100vw] bg-gray-400 flex justify-center items-center">

      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div
    className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
      URL Shorter
    </h3>
  </div>
  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input value={userUrl} onChange={(e)=> setuserUrl(e.target.value)} className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Enter URL Here
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
        {/* Shorted Url */}
      <div className="w-full h-full px-3 py-3 flex justify-between font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        <span>{sortedUrl} </span><i className="fa-solid fa-copy mr-5 cursor-pointer text-lg"></i></div>
        
    </div>
  </div>
  <div className="p-6 pt-0">
    <button onClick={convertUrl} className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Convert URL
    </button>
  </div>
</div>
      </div>
    </>
  )
}

export default Url_short