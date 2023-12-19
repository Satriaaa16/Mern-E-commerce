import React, { useState } from 'react'
import loginSignupImage from "../assets/User.gif"
import {BiShowAlt} from "react-icons/bi"
import {BiHide} from "react-icons/bi"
import { Link } from 'react-router-dom'

const Signup = () => {
    const[showPassword,setShowPassword] = useState(false)
    const[showConfirmPassword,setShowConfirmPassword] = useState(false)
    const[data,setData] =useState({
      namaDepan:"",
      namaBelakang:"",
      email:"",
      password:"",
      konfirmasipassword:"",
    });
    console.log(data)
    const handleShowPassword = () =>{
      setShowPassword(preve => !preve)
    }
    const handleshowConfirmPassword =() =>{
      setShowConfirmPassword(preve => !preve)
    }

    const handleOnChange = (e)=>{

        const {name,value}= e.target
        setData((preve)=>{
          return{
              ...preve,
              [name] : value
          }
        })
    }

    const handleSubmit =(e)=>{
      e.preventDefault()
      const {namaDepan,email,password,konfirmasipassword} = data
      if (namaDepan&&email&&password&&konfirmasipassword){
        if(password === konfirmasipassword){
          alert("seccessfully")
        }
        else{
           alert("password gak sama")
        }
      }
      else{
        alert(" kolom wajib di isi")
      }
    }


  return (
  
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
           {/*<h1 className='text-center text-xl font-bold'>Daftar</h1>*/ }
           <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                < img src={loginSignupImage} className='w-full'/>
           </div>

           <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='namaDepan'>Nama Depan</label>
                <input type={"text"}
                 id="namaDepan"
                 name='namaDepan'
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 p-1 rounded focus-within:outline-blue-400'
                value={data.namaDepan}
                onChange={handleOnChange}
                />

                <label htmlFor='namaBelakang'>Nama Belakang</label>
                <input type={"text"}
                 id="namaBelakang"
                 name='namaBelakang' 
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 p-1 rounded focus-within:outline-blue-400'
                value={data.namaBelakang}
                onChange={handleOnChange}
                />
                
                <label htmlFor='email'>Alamat Email</label>
                <input type={"email"} 
                id="email" 
                name='email' 
                className='mt-1 mb-2 w-full bg-slate-200 px-2 p-1 rounded focus-within:outline-blue-400'
                value={data.email}
                onChange={handleOnChange}
                />
              
                <label htmlFor='password'>Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 md-2 focus-within:outline focus-within:outline-blue-400'> 
                <input 
                 type={showPassword ? "text" : "password"}
                 id="password"
                 name='password'
                 className=' w-full bg-slate-200 border-none outline-none'
                 value={data.password}
                 onChange={handleOnChange}
                 />

                <span className='flex text-xl cursor-pointer'onClick={handleShowPassword}>{showPassword? <BiShowAlt/> : <BiHide/>}</span>
                </div>

                <label htmlFor='konfirmasipassword'>konfirmasi Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 md-2 focus-within:outline focus-within:outline-blue-400'> 
                <input type={showConfirmPassword? "text" : "password"} 
                  id="konfirmasipassword" 
                  name='konfirmasipassword' 
                  className=' w-full bg-slate-200 border-none outline-none'
                  value={data.konfirmasipassword}
                  onChange={handleOnChange}
                  />
                <span className='flex text-xl cursor-pointer'onClick={handleshowConfirmPassword}>{showPassword? <BiShowAlt/> : <BiHide/>}</span>
                </div>
                <button className="w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full">Daftar</button>
           </form>
           <p className='text-left text-sm mt-2'>sudah pernah Daftar? <Link to={"login"}className="text-red-500 underline">Login</Link> </p>
        </div>
    </div>
  )
}

export default Signup