import { Link } from "react-router-dom";
import { ErrorResponse } from "../../types";

export default function Error({
  message,
  statusCode,
}: ErrorResponse): JSX.Element {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-[#ebeaea]">
      <div className="flex flex-col items-center font-roboto px-4">
        <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold text-red-600">
          {statusCode}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-6 text-center">
          {message}
        </p>
        <Link
          to={"/"}
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out"
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
}
