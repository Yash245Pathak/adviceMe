import './App.css';
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [advice, setAdvice] = useState();

  const fetchAdvice = async () => {
    await axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        // console.log(res.data.slip.advice)
        const ad = res.data.slip.advice;
        setAdvice(ad);
      })
      .catch((error) => {
        alert(error.message);
      })
  }

  // useEffect(() => {
  //   fetchAdvice(); 
  // })


  return (
    <>
      <div className="advice">
        <div className="advice-box">
          <span>{!advice ? "OOP's No Advice!" : advice}</span>
          <button onClick={ fetchAdvice } ><span>Advice Me</span></button>
        </div>
      </div>
    </>
  );
}

export default App;
