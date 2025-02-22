import React, { useState } from 'react'

const NavbarItems = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", text: 'home', href: '#home' },
    { id: "about", text: 'sobre mí', href: '#about' },
    { id: "projects", text: 'proyectos', href: '#projects' },
    { id: "references", text: 'referencias', href: '#references' },
    { id: "contact", text: 'contacto', href: '#contact' },
  ];

  return (
    <nav>
      <ul className='flex space-x-16 text-base'>
        {navItems.map((item) => (
          <li key={item.id} className='relative cursor-pointer group' id={item.id}>
            <a 
              href={item.href} 
              onClick={() => setActive(item.id)}
              className={`text-silverGray group-hover:text-white transition-colors duration-100 
                ${active === item.id ? 'text-white' : ''}`} 
            >
              <span 
                className={`text-aquaCyan group-hover:text-lightSeaGreen transition-colors duration-100 
                  ${active === item.id ? 'text-lightSeaGreen' : ''}`}
              >#</span>
              {item.text}
            </a>
            <span
              className={`absolute bottom-0 left-0 h-[1px] bg-lightSeaGreen transition-all duration-300 origin-center 
                ${active === item.id ? 'w-full ' : 'w-0 group-hover:w-full group-hover:left-0'}`}>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarItems;