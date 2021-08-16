import React, { useState } from 'react'
import { Link } from "react-router-dom"
import company from "../assets/images/company_logo.png"
import dropdown from "../assets/images/dropdown.png"
import footer from "../assets/images/light_prospa.png"
import side from "../assets/images/side_icon.png"
import side2 from "../assets/images/side_icon2.png"

export default function HomeSidebar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="sidebar__2">
      <div className="logo d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img src={company} className="img-fluid sidebar__img mr-2" alt="Clayant Inc" />
          <div className="text-dark">
            <h6 className="font-weight-bold large" style={{ marginBottom: "-3px" }}>Clayant Inc</h6>
            <span className="light__color">Manage Account</span>
          </div>
        </div>
        <div className="dropdown__btn">
          <img src={dropdown} onClick={() => setOpen(!open)} className="img-fluid" alt="Dropdown" />
        </div>
      </div>
      <div className="over">
        {open
          ?
          <div className="bg-white text-dark rounded mt-3 p-2 w-100 sidebar__list">
            <p className="border-bottom p-1 font-weight-bold">Clayant Inc</p>
            <p className="border-bottom p-1 light__color">Business name 2</p>
            <p className="p-1 light__color">Business name 3</p>
            <p style={{ color: "#fa4a84", cursor: "pointer" }}>Add a business</p>
          </div>
          : null
        }
      </div>
      <div className="mt-5">
        <div className="d-flex justify-content-start align-items-center py-3 p-2 nav__list">
          <div className="mr-3">
            <img src={side} alt="Side Icon" />
          </div>
          <div className="light__color">
            <h6>Management</h6>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center py-3 p-2 nav__list">
          <div className="mr-3">
            <img src={side2} alt="Side Icon" />
          </div>
          <div className="light__color">
            <h6>Store</h6>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center py-3 p-2 nav__list">
          <div className="mr-3">
            <img src={side} alt="Side Icon" />
          </div>
          <div className="light__color">
            <h6>Security</h6>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center py-3 p-2 nav__list">
          <div className="mr-3">
            <img src={side2} alt="Side Icon" />
          </div>
          <div className="light__color">
            <h6>Support</h6>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center py-3 p-2 nav__list">
          <div className="mr-3">
            <img src={side} alt="Side Icon" />
          </div>
          <div className="light__color">
            <h6>Cards</h6>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center py-3 p-2 nav__list">
          <div className="mr-3">
            <img src={side2} alt="Side Icon" />
          </div>
          <div className="light__color">
            <h6>Transfer</h6>
          </div>
        </div>
      </div>
      <div className="side__footer">
        <Link to="/">
          <img src={footer} alt="Prospa" />
        </Link>
      </div>
    </div>
  )
}
