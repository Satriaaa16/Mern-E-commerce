import React, { useState } from 'react'
import ikea from '../assets/ikea.png'
import { Link } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
import {FaCartPlus} from "react-icons/fa"
import {FaRegHeart} from "react-icons/fa"




const Header = () => {
    const[showMenu,setShowMenu] = useState(false);
    const handleShowMenu = () => {
      setShowMenu(preve => !preve)
    }
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">   
        {/*deskop*/} 

        <div className="flex items-center h-full justify-between">
          <Link>
          <div className="h-10">
                <img src={ikea} className="h-full"/>
              </div>
          </Link>

          <div className="flex items-center gap-5 md:gap-7">
              <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                <Link to={""}>Beranda</Link>
                <Link to={"MENU"}>Menu</Link>
                <Link to={"TENTANG"}>Tentang</Link>
                <Link to={"KONTAK"}>Kontak</Link>
              </nav>
              <div className="text-2xl text-slate-600 relative">
                    <FaCartPlus/>
                    <div className="absolute -top-1 -right-1 text-white bg-red-400 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">0</div>
              </div>
              <div className="text-2x1 text-slate-600">
                    <FaRegHeart/>
              </div>
              <div className="text-x1 text-slate-600" onClick={handleShowMenu}>
                <div className="border-2 border-solid border-slate-600 p-2 rounded-full cursor-pointer">
                  <FaUserAlt/>
                </div>
                {showMenu &&(
                  <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow-sm flex flex-col">
                   <Link to={"produkbaru"}className="whitespace-nowrap cursor-pointer">Produk Baru</Link>
                   <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
                  </div>
                )} 

              </div>
          </div>
        </div>

        {/*mobile*/} 
    </header>
  )
}

export default Header