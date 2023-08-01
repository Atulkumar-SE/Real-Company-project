import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import list from '../BasicBody/list.json';
import { BsChevronDown } from 'react-icons/bs';
import { FaAngleUp } from 'react-icons/fa';

const SubMenuItem = ({ item }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  return (
    <div key={item.title} className="relative">
      <div
        onClick={toggleSubMenu}
        className={`${
          isSubMenuOpen ? 'bg-blue-400 text-white' : 'bg-blue-300 text-black'
        } p-4 w-full flex items-center justify-between font-bold tracking-wide border active:border-black duration-300`}
      >
        {item.title}
        {isSubMenuOpen ? <FaAngleUp className="h-8" /> : <BsChevronDown className="h-8 text-black" />}
      </div>
      {isSubMenuOpen && (
        <div className="bg-blue-300 absolute w-full top-0 left-full">
          {item.children.map((nestedItem, index) => (
            <div key={index} className="flex w-full justify-between p-3 hover:bg-blue-400">
              <h1>{nestedItem.title}</h1>
              <h1>{nestedItem.icon}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <span className="Hero text-orange-400 text-4xl">Hero</span>
      <div
        ref={dropdownRef}
        className="relative flex flex-col items-center w-[340px] h-[340px]"
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${
            isOpen ? 'bg-blue-400 text-white' : 'bg-blue-300 text-black'
          } p-4 w-full flex items-center justify-between font-bold tracking-wide border active:border-black duration-300`}
        >
          Dropdown
          {isOpen ? (
            <FaAngleUp className="h-8" />
          ) : (
            <BsChevronDown className="h-8 text-black" />
          )}
        </button>
        {isOpen && (
          <div className="bg-blue-300 absolute w-full top-0 left-full">
            {list.map((item) => (
              <SubMenuItem key={item.title} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
