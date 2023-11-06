import Box from "./Box.jsx"
import './App.css';
import { useState } from "react";
import fortunes from "./fortunes.js";


const BoxContainer = () => {

  // gets us random number between one and ten
  function getRandomNumber() {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers;
  }

  function getRandomNumberBetween0And10() {
    return Math.floor(Math.random() * 10);
  }

  const [boxValues, setBoxValues] = useState(['red','yellow','blue','green'])

  const [MasterCount, setMasterCount] = useState(1);

  const [CurrCount, setCurrCount] = useState([3,6,4,5]);

  const clickFunc = (e) => {    
    // animation functionbility
    if (MasterCount < 3){
      let newArr = getRandomNumber();
      setBoxValues(newArr);
      setCurrCount(newArr);
      setMasterCount(MasterCount + 1)
    } else if (MasterCount === 3){
      console.log(e.target.innerText)
      console.log(boxValues)
      let stateIdx = boxValues.indexOf(Number(e.target.innerText));
      console.log(stateIdx)
      let result = [];
      for (let i = 0; i < 4; i++){
        if (i === stateIdx){
          result.push(fortunes[getRandomNumberBetween0And10()])
        } else {
          result.push('')
        }
        setMasterCount(MasterCount + 1)
      }
      console.log(result)
      setBoxValues(result)
    } else {
      e.preventDefault()
    }
  }


  return (
    <>
    <div className="box-container">
      <div className="top-row">
        <Box id='0' color='red' currcount={CurrCount[0]} innerText={boxValues[0]} click={clickFunc}/>
        <Box id='1' color='yellow' currcount={CurrCount[1]} innerText={boxValues[1]} click={clickFunc}/>
      </div>
      <div className="bot-row">
        <Box id='2' color='blue' currcount={CurrCount[2]} innerText={boxValues[2]} click={clickFunc}/>
        <Box id='3' color='green' currcount={CurrCount[3]} innerText={boxValues[3]} click={clickFunc}/> 
      </div>
    </div>
    </>
  )
}

export default BoxContainer;