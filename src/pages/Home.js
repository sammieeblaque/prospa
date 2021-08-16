import React from 'react'

import rectangle from "../assets/images/Rectangle.png"
import rectangle2 from "../assets/images/Rectangle2.png"
import chart from "../assets/images/chart.png"
import bank from "../assets/images/bank.png"
import internet from "../assets/images/internet.png"
import marketing from "../assets/images/marketing.png"
import transfer from "../assets/images/transfer.png"
import oval from "../assets/images/Oval.png"
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className="w-100">
      <div className="dashboard">
        <Navbar />
        <div className="onboard__content">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div>
                <h3 className="font">Welcome back, Samuel</h3>
                <p>Here's what has been happening in the last <span className="day__color">7 days</span></p>
              </div>
              <div>
                <button className="btn sub__account__btn mr-5">Add a sub account</button>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="bg-white rounded card__width account__card">
                <div className="p-3 d-flex justify-content-between">
                  <div>
                    <h6>CURRENT ACCOUNT</h6>
                    <h6 className="font-weight-light">PROVIDUS BANK - 999999903</h6>
                  </div>
                  <div>
                    <img src={rectangle} alt="Rectange" />
                  </div>
                </div>
                <div className="p-3">
                  <h5>N814,800<span className="small">.45</span></h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white rounded card__width">
                <div className="p-3 d-flex justify-content-between">
                  <div>
                    <h6>SAVINGS ACCOUNT</h6>
                    <h6 className="font-weight-light">PROVIDUS BANK - 999999903</h6>
                  </div>
                  <div>
                    <img src={rectangle2} alt="Rectange" />
                  </div>
                </div>
                <div className="p-3">
                  <h5>N39,342<span className="small">.45</span></h5>
                </div>
              </div>
            </div>

          </div>
          <div className="row mt-4">
            <div className="col-md-6 bottom">
              <div className="bg-white rounded card__width">
                <div className="p-4">
                  <div className="pl-2">
                    <h4>June Summary</h4>
                  </div>
                  <div className="row mt-2 d-flex">
                    <div className="px-4">
                      <p>Money in <br />
                        N 5,650,000
                      </p>
                    </div>
                    <div className="px-4">
                      <p>Money in <br />
                        N 5,650,000
                      </p>
                    </div>
                    <div className="pl-3">
                      <p>Money in <br />
                        N 5,650,000
                      </p>
                    </div>
                  </div>
                  <div className="pl-3 pb-3">
                    <img src={chart} className="img-fluid" alt="chart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white rounded card__width">
                <div className="p-3">
                  <div className="p-1">
                    <h4>Cash Outflow</h4>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="d-flex align-items-center">
                      <img src={bank} alt="bank" className="img-fluid p-2" />
                      <span>Bank Fees</span>
                    </div>
                    <p className="justify-content-end pb-3 mr__right">-N250000</p>
                    <div className="progress prog__width progress__bar">
                      <div className="progress-bar prog__color" role="progressbar" style={{ width: "80%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="d-flex align-items-center">
                      <img src={internet} alt="bank" className="img-fluid p-2" />
                      <span>Internet</span>
                    </div>
                    <p className="justify-content-end pb-3 mr__right">-N250000</p>
                    <div className="progress prog__width progress__bar">
                      <div className="progress-bar prog__color" role="progressbar" style={{ width: "60%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="d-flex align-items-center">
                      <img src={marketing} alt="bank" className="img-fluid p-2" />
                      <span>Marketing</span>
                    </div>
                    <p className="justify-content-end pb-3 mr__right">-N250000</p>
                    <div className="progress prog__width progress__bar">
                      <div className="progress-bar prog__color" role="progressbar" style={{ width: "30%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="d-flex align-items-center">
                      <img src={transfer} alt="bank" className="img-fluid p-2" />
                      <span>Transfer</span>
                    </div>
                    <p className="justify-content-end pb-2 mr__right">-N250000</p>
                    <div className="progress prog__width progress__bar">
                      <div className="progress-bar prog__color" role="progressbar" style={{ width: "10%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="bg-white rounded card__full p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="font_2">Recent transactions</h5>
                  </div>
                  <div>
                    <div>
                      <button className="btn btn__all mb-2">See All</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom rounded p-2">
                  <div className="d-flex">
                    <div className="mr-3"><img src={oval} alt="oval" className="img-fluid" /></div>
                    <div>
                      <span>Transfer Fee</span> <br />
                      <span>12: 49 AM</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>-N145.90</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom rounded p-2 mt-2">
                  <div className="d-flex">
                    <div className="mr-3"><img src={oval} alt="oval" className="img-fluid" /></div>
                    <div>
                      <span>Shirley Barnes</span> <br />
                      <span>12: 49 AM</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>-N2000.00</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom rounded p-2 mt-2">
                  <div className="d-flex">
                    <div className="mr-3"><img src={oval} alt="oval" className="img-fluid" /></div>
                    <div>
                      <span>Shirley Barnes</span> <br />
                      <span>12: 49 AM</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>-N2000.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}