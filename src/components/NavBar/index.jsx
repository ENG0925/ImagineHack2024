'use client';
import React from 'react';
import './css.css'; 


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
              <i className="fas fa-caret-up"></i>
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
