import toolsList from "../../tools"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
const HomePage = () => {
  return (
    <>
    <div>
      <Navbar/>
      <div className="main">
        <div className="top"></div>
        <div className="list w-full min-h-[100vh] gap-4 bg-black flex px-5">
            {toolsList.map((tool) => {
                return <div key={tool.id} className="w-72 h-96 max-w-sm bg-gray-400 rounded-lg shadow flex flex-col justify-between">
                    <a href="#" className="w-full flex justify-center items-center text-center">
                        <img className="rounded-t-lg pt-6" src={tool.img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#" className="flex justify-center items-center text-center">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{tool.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-black">{tool.des}</p>
                        <Link to="/url_short" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Go To Url-Shortr
                             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                
            })}
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage