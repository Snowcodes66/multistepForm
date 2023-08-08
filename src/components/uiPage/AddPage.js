
import Wrapper from "../Layout/wrapper";
import classes from "./AddPage.module.css";
import { useNavigate } from "react-router-dom";
import FormContext from "../../store/form-context";
import {useContext} from 'react'
import check from '../../assests/images/icon-checkmark.svg'
import NavBar from "../NavBar";
import Card from "../Layout/Card";
const AddOnPage = (props) => {
  const ctx=useContext(FormContext)
  console.log(ctx.pricePlan)
  const navigate=useNavigate()

    const goToNextHandler=()=>{
      navigate('/summary', {replace:true, state:{}})

    }
    const goBackHandler=()=>{
      navigate('/plan', {replace:true, state:{}})
  
    }
  return (
    <Card>
      <NavBar aD={ctx.addOnIsActive}/>

    <Wrapper>
      <div className={classes.textPerInfo}>
        <h3>Pick adds-on</h3>
        <p>add-on helps enhace your gaming experience</p>
      </div>
      <div className={classes["check-box-par-div"]}>
        <div className={ctx.boxChecked ? `${classes.innerDiv} ${classes['active-div']} `: classes.innerDiv}>
          <div className={classes["inner-div1"]}>
             <img className={ctx.boxChecked ?  `${classes.check2} ${classes.active}`:classes.check2  } src={check} alt="ckekbox"  onClick={ctx.setBoxIsChecked} />
            <div>
              <h4>Online Service</h4>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          {ctx.yearIsActive ? <p>$10/yr</p> : <p>$1/mo</p> }
        </div>
        <div className={ ctx.boxOneChecked ? `${classes.innerDiv} ${classes['active-div']}`: classes.innerDiv} >
        <div className={classes["inner-div1"]}>
             <img className={ctx.boxOneChecked ?  `${classes.check2} ${classes.active}`:classes.check2  } src={check} alt="ckekbox"  onClick={ctx.setBoxOneIsChecked} />
            <div>
              <h4>Larger Storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          {ctx.yearIsActive ? <p>$20/yr</p> : <p>$2/mo</p> }
        </div>
        <div className={ctx.boxTwoChecked ? `${classes.innerDiv} ${classes['active-div']}`: classes.innerDiv} >
        <div className={classes["inner-div1"]}>
            <img className={ctx.boxTwoChecked ?  `${classes.check2} ${classes.active}`:classes.check2  } src={check} alt="ckekbox" onClick={ctx.setBoxTwoIsChecked} />
            <div>
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          {ctx.yearIsActive ? <p>$20/yr</p> : <p>$2/mo</p> }
        </div>
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
export default AddOnPage;
