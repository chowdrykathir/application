import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Sidebar =({open})=> {
    return  (<div>
     <div className={open?"sidebar collapse":"sidebar"}>
     <Router>
     <nav>
       <ul>
         <li>
           <Link to="/dashboard">Dashboard</Link>
         </li>
         <li>
           <Link to="/user">User</Link>
         </li>

         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
     </nav>
     </Router>

     </div>
      </div>
    );
};
export default Sidebar;