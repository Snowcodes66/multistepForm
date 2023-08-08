// import classes from "./Plan.module.css";
// import advance from "../../assests/images/icon-advanced.svg";
// import pro from "../../assests/images/icon-pro.svg";
// import arcade from "../../assests/images/icon-arcade.svg";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Wrapper from "../Layout/wrapper";

// const Plan = (props) => {
  
//   const [divArcadeIsActive, setDivArcadeIsActive] = useState(true);
//   const [divAdvanceIsActive, setDivAdvanceIsActive] = useState(false);
//   const [divProIsActive, setDivProIsActive] = useState(false);
//   const [yearIsActive, setYearIsActive] = useState(false);
  
//   const navigate=useNavigate()

//   const arcadeDivHandler = () => {
//     setDivArcadeIsActive(!divArcadeIsActive);
//     console.log("click");
//   };
//   const advanceDivHandler = () => {
//     setDivAdvanceIsActive(!divAdvanceIsActive);
//     console.log("click");
//   };
//   const proDivHandler = () => {
//     setDivProIsActive(!divProIsActive);
//     console.log("click");
//   };
//   const toggleHandler = () => {
//     console.log("click");
//     setYearIsActive(!yearIsActive);
//   };
// const goToNextHandler=()=>{
//   navigate('/add', {replace:true, state:{}})
// }
//   return (
//     <Wrapper>
//       <div className={classes.textPerInfo}>
//         <h3>select your Plan</h3>
//         <p>You have the option of monthly or yearly biling</p>
//       </div>
//       <div className={classes[`per-plan-div`]}>
//         <div
//           className={
//             divArcadeIsActive
//               ?  `${classes[`child-plan-div`]}  ${classes[`active-div`]}` 
//               : classes[`child-plan-div`]
//           }
//           onClick={arcadeDivHandler}
//         >
//           <img src={arcade} alt="arcade-icon" />
//           <div>
//             <h4>Arcade</h4>
//             { yearIsActive ? <p>$90/yr</p>: <p>$9/mo</p>}
//             {yearIsActive && <p className={classes[`mon-free`]}>2 months free</p>}
//           </div>
//         </div>
//         <div
//           className={
//             divAdvanceIsActive
//               ?  `${classes[`child-plan-div`]}  ${classes[`active-div`]}` 
//               : classes[`child-plan-div`]
//           }
//           onClick={advanceDivHandler}
//         >
//           <img src={advance} alt="advace-svg" />
//           <div>
//             <h4>Advance</h4>
//             {yearIsActive ? <p>$120/yr</p>: <p>$12/mo</p>}
//             {yearIsActive && <p className={classes[`mon-free`]} >2 months free</p>}
//           </div>
//         </div>
//         <div
//           className={
//             divProIsActive
//               ?  `${classes[`child-plan-div`]}  ${classes[`active-div`]}` 
//               : classes[`child-plan-div`]
//           }
//           onClick={proDivHandler}
//         >
//           <img src={pro} alt="pro-svg" />
//           <div>
//             <h4>pro</h4>
//             {yearIsActive ? <p>$150/yr</p> : <p>$15/mo</p>}
//             {yearIsActive && <p  className={classes[`mon-free`]}>2 months free</p>}
//           </div>
//         </div>
//       </div>
//       <div className={classes[`toggle-div`]}>
//         <p className={yearIsActive ? classes[`remove-active`] : classes.active}>
//           Monthly
//         </p>
//         <button onClick={toggleHandler}>
//           <input
//             className={yearIsActive ? classes.moveRight : ""}
//             type="radio"
//           />
//         </button>
//         <p className={yearIsActive ? classes.active : classes["remove-active"]}>
//           Yearly
//         </p>
//       </div>
//       <div className={classes.btnDiv}>
//         <div className={classes['btn-div']}>
//           <a href="#personnal">Go back</a>
//         </div>
//         <button onClick={goToNextHandler} className={classes.btn}>Next step</button>
//       </div>
//     </Wrapper>
//   );
// };
// export default Plan;

import React from 'react'
import classes from "./Plan.module.css";
import advance from "../../assests/images/icon-advanced.svg";
import pro from "../../assests/images/icon-pro.svg";
import arcade from "../../assests/images/icon-arcade.svg";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Layout/wrapper";
import {useContext} from 'react'
import FormContext from '../../store/form-context';
import NavBar from '../NavBar';
import Card from '../Layout/Card';

const Plan = (props) => {

  const ctx=useContext(FormContext)

  const navigate=useNavigate()
  
  const goBackHandler=()=>{
    navigate('/personal', {replace:true, state:{}})

  }
const goToNextHandler=()=>{
  navigate('/add', {replace:true, state:{}})
 
}
  return (
    <Card>
      <NavBar sP={ctx.selectPlanIsActive}/>
    <Wrapper>
      <div className={classes.textPerInfo}>
        <h3>select your Plan</h3>
        <p>You have the option of monthly or yearly biling</p>
      </div>
      <div className={classes[`per-plan-div`]}>
        <div
          className={
              ctx.arcDivClicked
              ?  `${classes[`child-plan-div`]}  ${classes[`active-div`]}` 
              : classes[`child-plan-div`]
          }
          onClick={ctx.onClickArcDiv}
        >
          <img src={arcade} alt="arcade-icon" />
          <div>
            <h4>Arcade</h4>
            {ctx.yearIsActive ? <p>$90/yr</p>: <p>$9/mo</p>}
            {ctx.yearIsActive && <p className={classes[`mon-free`]}>2 months free</p>}
          </div>
        </div>
        <div
          className={
            ctx.advDivClicked
              ?  `${classes[`child-plan-div`]}  ${classes[`active-div`]}` 
              : classes[`child-plan-div`]
          }
          onClick={ctx.onClickAdvDiv}
        >
          <img src={advance} alt="advace-svg" />
          <div>
            <h4>Advance</h4>
            {ctx.yearIsActive ? <p>$120/yr</p>: <p>$12/mo</p>}
            {ctx.yearIsActive && <p className={classes[`mon-free`]} >2 months free</p>}
          </div>
        </div>
        <div
          className={
            ctx.proDivClicked
              ?  `${classes[`child-plan-div`]}  ${classes[`active-div`]}` 
              : classes[`child-plan-div`]
          }
          onClick={ctx.onClickProDiv}
        >
          <img src={pro} alt="pro-svg" />
          <div>
            <h4>pro</h4>
            {ctx.yearIsActive ? <p>$150/yr</p> : <p>$15/mo</p>}
            {ctx.yearIsActive && <p  className={classes[`mon-free`]}>2 months free</p>}
          </div>
        </div>
      </div>
      <div className={classes[`toggle-div`]}>
        <p className={ctx.yearIsActive ? classes[`remove-active`] : classes.active}>
          Monthly
        </p>
        <button onClick={ctx.setYear}>
          <input
            className={ctx.yearIsActive ? classes.moveRight : ""}
            type="radio"
          />
        </button>
        <p className={ctx.yearIsActive ? classes.active : classes["remove-active"]}>
          Yearly
        </p>
      </div>
      <div className={classes.btnDiv}>
        <div className={classes['btn-div']}>
          <button className={classes.btn1} onClick={goBackHandler}>Go back</button>
        </div>
        <button onClick={goToNextHandler} className={classes.btn}>Next step</button>
      </div>
    </Wrapper>
    </Card>
  );
};
export default Plan;