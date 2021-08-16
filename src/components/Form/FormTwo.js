import React, { useState } from 'react'
import { Accordion, Card } from "react-bootstrap"

import check from "../../assets/images/check.png"

export default function FormTwo() {
  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)

  const addClass = (val) => {
    const style = "px-4 py-3 rnd border-0 shadow__form"
    if (val === "1" && toggle) return style.concat(" rnd__color")
    if (val === "2" && toggle2) return style.concat(" rnd__color")
    return style
  }
  return (
    <div>
      <div className="form__title">Open a new business account</div>
      <div className="form__description mb-2">A short description comes here</div>
      <div>
        <Accordion defaultActiveKey="1">
          <Card className={addClass("1")}>
            <Accordion.Toggle className="bg-white no__bottom" onClick={() => setToggle(!toggle)} as={Card.Header} eventKey="0">
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="d-none custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio1">
                  I have a registered business / <br />
                    charity with CAC
                </label>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="minus__top pl-5">
                <div className="d__color">As a registered business, you'll get: </div>
                <div><img src={check} alt="Check" className="img-fluid" /> Account in your business name</div>
                <div><img src={check} alt="Check" className="img-fluid" /> Send to and receive transfers from all <span>Nigerian banks</span></div>
                <div><img src={check} alt="Check" className="img-fluid" /> Tools for business management</div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="mt-3">
        <Accordion defaultActiveKey="1">
          <Card className={addClass("2")}>
            <Accordion.Toggle className="bg-white no__bottom" onClick={() => setToggle2(!toggle2)} as={Card.Header} eventKey="0">
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" className="d-none custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadio2">
                  My business is not yet registered,  <br />
                    I would like to register
                </label>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="minus__top pl-5">
                <div className="d__color">Everything you need to start your business: </div>
                <div><img src={check} alt="Check" className="img-fluid" /> Register business name with CAC</div>
                <div><img src={check} alt="Check" className="img-fluid" /> Tax Identification Number</div>
                <div><img src={check} alt="Check" className="img-fluid" /> Your account will be automatically <span className="pl-4">opened on completion</span></div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="form-check mt-3 mb-3 px-5 py-4 rnd shadow__form d-flex align-items-center">
        <div className="custom-control custom-radio">
          <input type="radio" id="customRadio3" name="customRadio" className="d-none custom-control-input" />
          <label className="custom-control-label" htmlFor="customRadio3">
            I'm a freelancer I do business in , <br />
            my personal name.
          </label>
        </div>
      </div>

    </div >
  )
}
