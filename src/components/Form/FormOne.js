import React from 'react'
import { TextField, FormControl, MenuItem, Select, InputLabel } from "@material-ui/core"

export default function FormOne() {
  // const classes = useStyles();
  return (
    <div>
      <div className="form__title">Create Account</div>
      <div className="form__description mb-3">Use your own personal information</div>
      <div className="onboarding__form">
        <div className="form-group mb-4">
          <TextField variant="filled" label="First Name" />
        </div>
        <div className="form-group mb-4">
          <TextField id="filled-basic" variant="filled" label="Last Name" />
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value="+234"
              >
                <MenuItem value="+234">
                  <em>+234</em>
                </MenuItem>
                <MenuItem value="+237">+237</MenuItem>
                <MenuItem value="+238">+238</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-8">

            <TextField variant="filled" label="Mobile Number" />
          </div>
        </div>
        <div className="form-group">
          <TextField variant="filled" label="Email Address" />
        </div>
      </div>
    </div>
  )
}
