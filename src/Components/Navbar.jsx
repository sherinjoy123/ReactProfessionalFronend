import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '@fontsource/orbitron'
import { useNavigate } from "react-router-dom";
const Navbar = () => {

const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <nav className="  font-orbitron fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold text-red-500">
          Demon Slayer
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li onClick={()=>navigate('/')} className="hover:text-red-500 cursor-pointer">Home</li>

          <li onClick={()=>navigate('/characters')} className="hover:text-red-500 cursor-pointer">Characters</li>
          <li onClick={()=>navigate('/story')} className="hover:text-red-500 cursor-pointer">Story</li>
          <li onClick={()=>navigate('/gallery')} className="hover:text-red-500 cursor-pointer">Gallery</li>
          <li onClick={()=>navigate('/contact')} className="hover:text-red-500 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-black text-center py-5 space-y-5">
          <p onClick={()=>navigate('/')} className="hover:text-red-500">Home</p>
          <p onClick={()=>navigate('/characters')} className="hover:text-red-500">Characters</p>

          <p onClick={()=>navigate('/story')}  className="hover:text-red-500">Story</p>
          <p onClick={()=>navigate('/gallery')}  className="hover:text-red-500">Gallery</p>
          <p onClick={()=>navigate('/contact')} className="hover:text-red-500">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;