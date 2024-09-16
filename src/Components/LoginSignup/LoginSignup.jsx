import React from "react";
import img_1 from "../Assets/wis.jpg";
import img_2 from "../Assets/google.jpg";
import img_3 from "../Assets/ms.png";

const LoginSignup = () => {
  return (
    <div className="">
      <div className="p-2 max-w-auto mx-auto  flex items-center justify-center my-4  pb-5">
        <div>
          <img className="h-9 w-9  bg-purple-400 " src={img_1} alt="" />
        </div>
        <h1 className="text-3xl font-medium"> WISITIA</h1>
      </div>
      {/* ---------------after logo ----------------------*/}

      <div className="  p-2 max-w-xs mx-auto  flex items-center pb-5 ">
        <p className="text-slate-800 text-sm">
          Sign up for a Wisitia account and get more from your videos
        </p>
      </div>

      {/* ------------------sign with ------------------*/}
      <div className="pb-4 max-w-100">
        <div className="  pb-1.5 max-w-100">
          <button className=" p-2 w-96  mx-auto text-sm flex justify-start items-center bg-white border-spacing-2 rounded-sm shadow-md border-b ring-1 ring-gray-200">
            <img className="h-4 w-4 " src={img_2} alt="" />

            <div className="text-slate-600 pl-2">
              <div>Sign up with Google</div>
            </div>
          </button>
        </div>
        <div className=" xx ">
          <button className="  p-2   bg-white text-sm  mx-auto d flex items-center  border-spacing-2 rounded-sm shadow-md border-none ring-1 ring-gray-200">
            <img className="h-4 w-4" src={img_3} alt="" />

            <div className="text-slate-600 pl-2 text-sm">
              <div>Sign up with Microsoft</div>
            </div>
          </button>
        </div>
      </div>

      {/* -------------------  or part-----------------------*/}
      {/* mt-10 grid grid-cols- */}
      <div className="items-center text-gray-400">
        {/* <hr className="border-gray-500" /> */}

        <p className="text-slate-400  text-center text-xs">or</p>

        {/* <hr className="border-gray-500" /> */}
      </div>

      {/* ----------------------------inputs  1------------------------------------*/}
      <div className="p-1 flex justify-between max-w-sm mx-auto ">
        <div className="">
          <p className="text-slate-600 flex text-sm ">First name</p>
          <input
            className="p-1.5 text-xs rounded-sm  border-none ring-1 ring-gray-200"
            type="lenny"
            placeholder="Lenny"
          />
        </div>
        <div>
          <p className="text-slate-600 flex text-sm items-start">Last name</p>
          <input
            className="p-1.5 text-xs rounded-sm border-none ring-1 ring-gray-200"
            type="Lavigne"
            placeholder="Lavigne"
          />
        </div>
      </div>

      {/* ----------------------------inputs  2------------------------------------*/}

      <div className="input p-1 flex justify-between max-w-sm mx-auto ">
        <div>
          <p className="text-slate-600 flex items-start text-sm">
            Your work email
          </p>
          <input
            className=" p-2 text-xs rounded-sm border-none ring-1 ring-gray-200"
            type="email"
            placeholder="lenny@wistia.com"
          />
        </div>
        <div>
          <p className="text-slate-600 flex text-sm items-start">Job title</p>
          <input
            className=" p-2 text-xs rounded-sm border-none ring-1 ring-gray-200"
            type="marketing manager"
            placeholder="Marketing Manager"
          />
        </div>
      </div>

      {/* ----------------------------inputs  3------------------------------------*/}

      <div className="input p-1 flex  max-w-sm mx-auto pb-3">
        <div>
          <p className="text-slate-600 flex  text-sm items-start">
            Set a password
          </p>
          <input
            className="p-2 text-xs rounded-sm flex flex-col border-none ring-1 ring-gray-200 "
            type=" text"
            placeholder=" 8 characters or more!"
          />
        </div>
      </div>
      {/* ----------------------------part  4------------------------------------*/}

      <div className="p-2 max-w-sm mx-auto bg-white flex  items-center ">
        <div className="w-1/2">
          <p className=" text-xs  text-slate-400">
            {" "}
            By clicking this button, you agree to our{" "}
            <span className="underline">Terms of Service</span> and
            <span className="underline">Privacy Policy.</span>
          </p>
        </div>
        <div className="p-0">
          <button className="bg-blue-600 w-full text-xs text-center mt-2  text-white  px-5 py-3 rounded-md hover:bg-blue-400">
            Create a free account
          </button>
        </div>
      </div>
      {/* ----------------------------part  5------------------------------------*/}

      <div className="p-1  text-xs max-w-sm mx-auto bg-white flex justify-center items-center ">
        <p className="text-slate-600">
          Already have a <span className="font-semibold">WISITA</span> account?{" "}
          <span className="text-blue-400 cursor-pointer">Log in</span>
        </p>
      </div>
    </div>
  );
};
export default LoginSignup;
