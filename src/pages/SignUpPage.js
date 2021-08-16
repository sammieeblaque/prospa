import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import back from "../assets/images/back.svg"

import FormOne from "../components/Form/FormOne";
// import FormThree from '../components/Form/FormThree';
import FormTwo from '../components/Form/FormTwo';

const SignUpPage = () => {
  const [next, setNext] = useState(0)
  const history = useHistory();


  return (
    <div className="w-100">
      <div className="onboard__content">
        <div className="d-flex justify-content-between align-items-center">
          {next === 0
            ?
            <div className="back__link">
              <img src={back} alt="Back" />
            </div>
            : next === 1 ?
              <div className="back__link2" onClick={() => setNext(next - 1)}>
                <img src={back} alt="Back" />
              </div>
              :
              <div className="back__link2" onClick={() => setNext(next - 1)}>
                <img src={back} alt="Back" />
              </div>
          }
          <div className="back__link">
            <img src={back} alt="Back" />
          </div>
          <div className="signup__link">
            <span>Already a member? </span>
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-5 col-sm-12 p-2 onboard__form__container">
            {next === 0 ? <FormOne /> : <FormTwo />}
            <div>
              {
                next !== 1
                  ? <button className="form-control p-2 btn__color mt-2" onClick={() => setNext(next + 1)}>
                    Next
                    </button>
                  :
                  <button className="btn form-control p-2 btn__color mt-2 mb-4" onClick={() => history.push("/home")}>
                    Submit
                  </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
