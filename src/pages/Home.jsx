import Country from "../Country_Code/country";
import React, { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faEye,faEyeSlash)

const Home = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility(e) {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div>
      <div className="flex flex-row w-full h-full bg-white maindiv ">

            
<div className="flex flex-row w-1/2 h-full max-md3:w-3/4 max-md:w-3/5 max-sm:w-full " >
    
    <div class="flex items-center justify-center p-12  ml-auto mr-auto  max-md:w-full  max-md:p-3 ">

  <div class="mx-auto w-full max-w-[550px]   max-md:w-[540px]   ">
    <form action="https://formbold.com/s/FORM_ID" method="POST" className="flex flex-col space-y-7 max-sm:space-y-3 max-md3:space-y-5 max-md:space-y-4 ">



    <div class="-mx-3 flex flex-wrap justify-center max-sm:ml-auto max-sm:mr-auto">
        
       <h1 className="text-[40px] text-blue-400 mr-auto font-bold max-md:text-[35px] ">Create Account</h1>
        
      </div>



      <div class="-mx-4 flex flex-wrap  max-md:mx-0  max-sm:pt-4 pt-4">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-4">
            <label
              for="fName"
              class="ml-5 absolute text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              class="w-full rounded-md border border-[#e0e0e0] placeholder:text-xs placeholder:text-blue-400  mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="ml-5 absolute text-base bg-white font-medium text-blue-400 max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              class="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div class="-mx-3 flex flex-wrap  max-md:mx-0 ">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-4">
            <label
              for="fName"
              class="ml-5 absolute text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              Email
            </label>
            <input
              type="email"
              name="fName"
              id="fName"
              placeholder="Enter Email here"
              class="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="ml-5 absolute text-base bg-white  font-medium text-blue-400 max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider"
            >
              Phone 
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Enter Phone Here"
              class="w-full rounded-md border placeholder:pl-2 pl-24 placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <Country/>
          </div>
        </div>
      </div>


      <div class="-mx-3 justify-center items-center  flex flex-wrap  max-md:mx-0   ">
        <div class="w-full px-3 sm:w-1/2 ">

        <div class="mb-0  ">
        <label class="mb-5 block text-base font-medium text-blue-400">
          Gender
        </label>
        <div class="flex items-center space-x-6 max-md3:space-x-4 max-sm:space-x-8">
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              class="h-5 w-5 max-md3:h-4 max-md3:w-4"
            />
            <label
              for="radioButton1"
              class="pl-2 text-base font-medium text-blue-400 max-md3:text-sm"
            >
              Male
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              class="h-5 w-5 max-md3:h-4 max-md3:w-4"
            />
            <label
              for="radioButton2"
              class="pl-2 text-base font-medium text-blue-400 max-md3:text-sm"
            >
              Female
            </label>
          </div>
        </div>
      </div>
          {/* <div class="mb-5">
            <label
              for="fName"
              class="ml-5 absolute text-base font-medium text-blue-400 bg-white"
            >
              Email
            </label>
            <input
              type="email"
              name="fName"
              id="fName"
              placeholder="Enter Email here"
              class="w-full rounded-md border border-[#e0e0e0] mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div> */}
        </div>
        <div class="w-full px-3 sm:w-1/2 max-sm:mt-6 ">
        {/* <div class="mb-5 bg-green-500 ">
        <label class="mb-3 block text-base font-medium text-blue-400">
          Gender
        </label>
        <div class="flex items-center space-x-6">
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              class="h-5 w-5"
            />
            <label
              for="radioButton1"
              class="pl-3 text-base font-medium text-blue-400"
            >
              Male
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              class="h-5 w-5"
            />
            <label
              for="radioButton2"
              class="pl-3 text-base font-medium text-blue-400"
            >
              Female
            </label>
          </div>
        </div>
      </div> */}

<div class=" ">
            {/* <label
              for="fName"
              class="ml-5 absolute text-base font-medium text-blue-400 bg-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password here"
              class="w-full rounded-md border border-[#e0e0e0] mt-4 bg-white py-3 px-6 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
            /> */}
            {/* <PasswordInput/> */}
      

{/* <PasswordInput/> */}

<div className="container relative w-full mx-auto ">
<label
              for="fName"
              class="ml-5 absolute text-base font-medium text-blue-400 bg-white max-md3:text-sm max-md3:mt-1 max-md3:tracking-wider">
                Password</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full rounded-md border placeholder:text-xs placeholder:text-blue-400 border-[#e0e0e0] bg-white py-3 px-6 mt-4 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md" />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
       {isPasswordVisible ?  <FontAwesomeIcon icon="eye-slash" size="md" className='mt-4'/> :  <FontAwesomeIcon icon="eye" size="md" className='mt-4'/>}
      </button>
    </div>


    
     
          </div>

         
        </div>

{/* gender */}


        
      </div>
      

    

      <div className="w-full ">
        <button
          class="hover:shadow-form rounded-full mt-3 max-sm:py-2 max-md3:mt-3 w-full bg-blue-600 py-2.5 px-10 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>


      <div className="w-full ">
   
      <div class="divider divider-horizontal text-blue-400 font-semibold">or</div>
      </div>


      <div className="flex flex-row w-full space-x-5 ">
      
      <button className="w-3/5 py-3 ml-auto mr-auto text-sm font-semibold text-white bg-orange-700 rounded-full max-sm:py-3 max-md:py-2"> <FontAwesomeIcon icon={faGoogle} className="mr-2" />Login through Google</button>
      <button className="w-3/5 py-3 ml-auto mr-auto text-sm font-semibold text-white bg-blue-800 rounded-full max-sm:py-3 max-md:py-2"> <FontAwesomeIcon icon={faFacebook} className="mr-2" />Login through Facebook</button>
      
      </div>


      
      
      <div className="flex flex-row w-full space-x-5 ">
      
     <p className="ml-auto mr-auto font-semibold text-blue-400 max-md:pt-2">Already a Member  <a className="ml-2 text-blue-400 underline text-semibold">Click here</a></p>
      </div>

      
    </form>
  </div>
</div>




    
</div>
        

<div className="flex justify-center w-1/2 h-screen max-md:w-2/3 max-sm:bg-red-700 max-sm:hidden">
  <div className="w-11/12 mt-12 h-5/6 max-md3:mt-7 max-md3:w-full max-md3:h-3/4 max-md:mt-14 max-md:h-3/5 " >
    
<img src="https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full"/>  

    
  </div>
</div>
















        </div>
    </div>
  )
}

export default Home