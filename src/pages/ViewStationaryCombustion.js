import React from 'react';

export default function ViewStationaryCombustion() {
  return (
    <div className='container'>
      <div className='top'>
        <div className='back-button'><img src="/assets/Navbar/backb.png" alt="Back Button" /></div>
        <div className='top-right'></div>
      </div>
      <div className='bottom'>
        <div className='bottom-left'>
          <div className='heading'>
            <h1>STATIONARY COMBUSTION</h1>
            <form className='form'>
              <div className='div1'>
                <label>Facility</label>
                <input type='text' placeholder='Facility Code'></input>
                <input type='text' placeholder='Facility Name'></input>
                <br></br>
              </div>
              <div className='div2'>
                <label>Month</label>
                <select id="monthInput" name="monthInput" required>
                  <option value="" disabled selected>Select month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <br></br>
              </div>
              <div className='div3'>
                <label>Emission Type</label>
                <select id="emissionTypeInput" name="emissionTypeInput" required>
                  <option value="" disabled selected>Source of Emission</option>
                  <option value="01">Option1</option>
                  <option value="02">Option2</option>
                  <option value="03">Option3</option>
                  <option value="04">Option4</option>
                </select>
                <br></br>
              </div>
              <div className='div4'>
                <label>Fuel</label>
                <select id="fuelTypeInput" name="fuelTypeInput" required>
                  <option value="" disabled selected>Type of Fuel</option>
                  <option value="01">Option1</option>
                  <option value="02">Option2</option>
                  <option value="03">Option3</option>
                  <option value="04">Option4</option>
                </select>
                <input type="number" placeholder='Quantity'></input>
                <input type="number" placeholder='SI Units'></input>
                <input type='submit' value='ADD DATA'></input>
              </div>
            </form>
          </div>
        </div>
        <div className='bottom-right'>
          <div className='c1'>
            <div>
              <img src="/assets/Navbar/res.png" alt="Res Image" />
              <h2>1423</h2>
            </div>
            <button>Submit</button>
          </div>
          <div className='c2'>
            <img src="/assets/Navbar/Group 2.png" alt="Group 2 Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
