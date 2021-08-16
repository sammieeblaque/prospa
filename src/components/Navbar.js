import React from 'react'

import bell from "../assets/images/bell.png"
import profile from "../assets/images/profile.png"


const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center navbar">
      <div className="d__color">
        <h4 className="pl-3">Dashboard</h4>
      </div>
      <div className="icons mr-5">
        <img src={bell} alt="bell" className="img-fluid mr-4" width="30px" />
        <img src={profile} alt="Profile" className="img-fluid" width="30px" />
      </div>
    </div>
  )
}

export default Navbar;