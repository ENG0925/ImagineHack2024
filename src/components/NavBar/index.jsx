'use client';
import React from 'react';
import './css.css'; 
import icon from '@/image/icon.png'

const NavBar = () => {
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
            <a href="home_page.html">
              <span>Home Page</span>
            </a>
          </div>
          <div className="nav-button">
            <a href="customer.html">
            <span>Customer</span>
            </a>
          </div>
          <div className="nav-button">
            <a href="supplier.html">
            <span>Supplier</span>
            </a>
          </div>
          <div className="nav-button">
            <a href="invoice.html">
              <span>Invoice</span>
            </a>
          </div>
          <div className="nav-button">
            <a href="supplier.html">
              <span>Items</span>
            </a>
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
