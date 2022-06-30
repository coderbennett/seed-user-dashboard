import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [dateState, setDateState] = useState(new Date());

  const renderDate = () => {
    const date = dateState;
    return date.toLocaleTimeString();
  }

  setInterval(() => {
    setDateState(new Date());
  }, 1000);

    return (
      <header>
        <div className="navbar bg-base-100 fixed top-0 w-100 z-50">
          <div className="flex-1">
            <Link to="/"><button className="btn btn-ghost normal-case text-xl">space weather dashboard</button></Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li><Link to="/space-flight-news">Spaceflight News</Link></li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80)", backgroundAttachment: "fixed"}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{renderDate()}</h1>
              <p className="mb-5">Welcome to the Space Dashboard - where you can view all the weather data for your next travel to space.</p>
              <a href="#content"><button className="btn btn-primary">Get Started</button></a>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
export default Header;