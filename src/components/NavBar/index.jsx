'use client';
import React from 'react';
import { useRouter } from "next/navigation";
import './css.css'; 
import NextLink from "next/link";

const NavBar = () => {
    const router = useRouter();
    return (
      <div id="nav-bar">
        <input id="nav-toggle" type="checkbox" />
        <div id="nav-header">
          <a id="nav-title" target="_blank" rel="noopener noreferrer">
            Hello World
          </a>
          <label htmlFor="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>
  
        <div id="nav-content">
          <div className="nav-button">
            <NextLink href={"/"}>
              Home Page
            </NextLink>
          </div>
          <div className="nav-button">
            <NextLink href={"/customer"}>
              Customer
            </NextLink>
            
          </div>
          <div className="nav-button">
            <NextLink href={"/supplier"}>
            Supplier
            </NextLink>
          </div>
          <div className="nav-button">
            <NextLink href={"/invoice"}>
            Invoice
            </NextLink>
          </div>
          <div className="nav-button">
            <NextLink href={"/item"}>
            Items
            </NextLink>
          </div>
          <div className="nav-button">
            <NextLink href={"/bot"}>
            Chat Bot
            </NextLink>
          </div>
        </div>
  
        <input id="nav-footer-toggle" type="checkbox" />
        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-titlebox">
              <a id="nav-footer-title" target="_blank" rel="noopener noreferrer">Settings</a>
            </div>
            <label htmlFor="nav-footer-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
            </svg>

            </label>
          </div>
          <div id="nav-footer-content">
            <div className="nav-button"><span>Settings</span></div>
            <div className="nav-button"><span>Profile</span></div>
            <div className="nav-button"><span>Logout</span></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavBar;
