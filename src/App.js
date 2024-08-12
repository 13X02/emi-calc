import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(5);
  const [tenure, setTenure] = useState(10);
  const [emi, setEmi] = useState(1061);
  const [interestAmount, setInterestAmount] = useState(27279);
  const [totalAmount, setTotalAmount] = useState(127279);

  function calculateEmi() {
    const month = Number(tenure) * 12;
    const interest = (Number(rate) / 12) / 100;
    const amountValue = Number(amount); // Ensure amount is a number

    const monthly = (amountValue * interest * Math.pow((1 + interest), month)) / (Math.pow((1 + interest), month) - 1);

    const total = monthly * month;
    const interestam = total - amountValue;

    setEmi(monthly.toFixed(2));
    setInterestAmount(interestam.toFixed(2));
    setTotalAmount(total.toFixed(2));
  }

  useEffect(() => {
    calculateEmi();
  }, [amount, rate, tenure]);

  const changeAmount = (e) => {
    const value = Math.max(10000, Math.min(Number(e.target.value), 1000000));
    setAmount(value);
  }

  const changeRate = (e) => {
    const value = Math.max(1, Math.min(Number(e.target.value), 30));
    setRate(value);
  }

  const changeTenure = (e) => {
    const value = Math.max(1, Math.min(Number(e.target.value), 30));
    setTenure(value);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='amount'>
          <div className='iparea'>
            <p>Loan Amount</p>
            <input
              onChange={changeAmount}
              type="number"
              className="input"
              placeholder="Amount"
              value={amount}
            />
          </div>
          <div>
            <div className="PB-range-slider-div">
              <input
                type="range"
                min={10000}
                max={1000000}
                step={10000}
                className="PB-range-slider"
                value={amount}
                onChange={changeAmount}
                id="amountRange"
              />
            </div>
          </div>
        </div>

        <div className='amount'>
          <div className='iparea'>
            <p>Rate of interest</p>
            <input
              onChange={changeRate}
              type="number"
              className="input"
              placeholder="Rate"
              value={rate}
            />
          </div>
          <div>
            <div className="PB-range-slider-div">
              <input
                type="range"
                min={1}
                max={30}
                className="PB-range-slider"
                value={rate}
                onChange={changeRate}
                id="rateRange"
              />
            </div>
          </div>
        </div>

        <div className='amount'>
          <div className='iparea'>
            <p>Loan Tenure</p>
            <input
              onChange={changeTenure}
              type="number"
              min={1}
              max={30}
              className="input"
              placeholder="Tenure"
              value={tenure}
            />
          </div>
          <div>
            <div className="PB-range-slider-div">
              <input
                type="range"
                min={1}
                max={30}
                className="PB-range-slider"
                value={tenure}
                onChange={changeTenure}
                id="tenureRange"
              />
            </div>
          </div>
        </div>

        <div>
          <p>Monthly EMI : {emi}</p>
          <p>Principal Amount : {amount}</p>
          <p>Total Interest : {interestAmount}</p>
          <p>Total Amount : {totalAmount}</p>
        </div>
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
