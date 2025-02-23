import { Link } from "react-router-dom";
import { ErrorResponse } from "../../types/types";
<<<<<<< HEAD
=======
import { colors } from "../../constants/colors";
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355

export default function Error({
  message,
  statusCode,
}: ErrorResponse): JSX.Element {
  return (
<<<<<<< HEAD
    <div className="flex flex-col h-screen justify-center items-center  bg-primary">
      <div className="flex flex-col items-center font-roboto px-4">
        <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold text-danger">
          {statusCode}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium  text-black  mb-6 text-center">
=======
    <div
      className={`flex flex-col h-screen justify-center items-center ${colors.bgPrimary}`}
    >
      <div className="flex flex-col items-center font-roboto px-4">
        <h1
          className={`text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold ${colors.textDanger}`}
        >
          {statusCode}
        </h1>
        <p
          className={`text-lg sm:text-xl md:text-2xl font-medium ${colors.textBlack}  mb-6 text-center`}
        >
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
          {message}
        </p>
        <Link
          to={"/"}
<<<<<<< HEAD
          className="px-4 py-2 font-medium  text-white bg-blue rounded-lg hover:bg-blueDark transition-all duration-200 ease-in-out"
=======
          className={`px-4 py-2 font-medium ${colors.textwhite} ${colors.bgBlue} rounded-lg hover:${colors.bgBlueDark} transition-all duration-200 ease-in-out`}
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
}
