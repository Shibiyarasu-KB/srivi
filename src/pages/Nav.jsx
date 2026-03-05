import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){

    const [isOpen,setIsOpen]=useState(false);

    return(
        <nav className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white shadow-md p-5 sticky top-0 w-full z-50">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold pl-6">SrivibhaYoga</h1>

                <button
                    onClick={()=> setIsOpen(!isOpen)}
                    className="md:hidden text-3xl focus:outline-none"
                >
                    {isOpen ? '✕':'☰'}
                </button>


                <div className="hidden md:flex gap-6 font-bold">
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/Events">Events</Link>
                    <Link to="/Login">Login/Register</Link>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4 font-bold border-t border-white/20 pt-4 text-center">
                    <Link to="/" onClick={()=>setIsOpen(false)}>Home</Link>
                    <Link to="/About" onClick={()=>setIsOpen(false)}>About Us</Link>
                    <Link to="/Gallery" onClick={()=>setIsOpen(false)}>Gallery</Link>
                    <Link to="/Events" onClick={()=>setIsOpen(false)}>Events</Link>
                    <Link to="/Login" onClick={()=>setIsOpen(false)}>Login/Register</Link>
                </div>
            )}
        </nav>
    )
}