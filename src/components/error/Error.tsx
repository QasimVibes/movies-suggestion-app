import { Link } from "react-router-dom"
import {ErrorResponse} from "../../types"

export default function Error({message, statusCode}: ErrorResponse): JSX.Element {
  return (
    <div className="bg-[#ebeaea] min-h-screen flex flex-col justify-center items-center font-roboto">
    <h1 className="text-5xl md:text-8xl text-gray-800 text-center">{statusCode}</h1>
    <p className="text-2xl md:text-4xl font-medium text-gray-800 text-center px-4">{message}</p>
    <Link to={"/"} className="mt-4 text-lg md:text-xl text-blue-600 hover:underline">Go back home</Link>
  </div>
  )
}
