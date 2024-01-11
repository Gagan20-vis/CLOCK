import { useState } from 'react'
import './App.css'

function App() {
  const [Time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });
  let AMPM = "PM"
  setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    AMPM = hours > 12 ? "PM" : "AM";
    hours = hours % 12
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    setTime({ hours: hours.toString(), minutes: minutes.toString(), seconds: seconds.toString() })
  }, 1000);
  return (
    <>
      <div className='container'>
        <div className="hour">
          <div className="number">
            {Time.hours.charAt(0)}
          </div>
          <div className="number">
            {Time.hours.charAt(1)}
          </div>
        </div>
        <div className="colon">:</div>
        <div className="minute">
          <div className="number">
            {Time.minutes.charAt(0)}
          </div>
          <div className="number">
            {Time.minutes.charAt(1)}
          </div>
        </div>
        <div className="colon">:</div>
        <div className="second">
          <div className="number">
            {Time.seconds.charAt(0)}
          </div>
          <div className="number">
            {Time.seconds.charAt(1)}
          </div>
        </div>
        <div className="ampm">
          {AMPM}
        </div>
      </div>
    </>
  )
}

export default App
