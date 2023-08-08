// import useInput from '../hooks/use-Input'
// import classes from "./PersonalInfo.module.css";

// const emailIsValid = value=>value.includes("@");
// const inputNameIsValid=value=>value.trim()!==''

// const PersonalInfo = () => {

//   const {
//     onChangeHandler:nameChangeHandler,
//     value: nameValue,
//     inputBlurHandler:nameBlurHandler
//   } = useInput(inputNameIsValid);

//   const {
//     onChangeHandler:numberChangeHandler,
//     value: emailValue,
//     inputBlurHandler:numberBlurHandler
//   } = useInput(emailIsValid);

//   const {
//     onChangeHandler:emailChangeHandler,
//     value: numberValue,
//     inputBlurHandler:emailBlurHandler,
//   } = useInput();

//   const submitHandler = () => {
//     console.log("click");
//   };

//   return (
//     <div className={classes.perInDiv}>
//       <div className={classes.textPerInfo}>
//         <h3>Personnal info</h3>
//         <p>please provide your name , email Address, and phone number</p>
//       </div>
//       <form className={classes.form} onSubmit={submitHandler}>
//         <p>
//           <label>Name</label>
//         </p>
//         <input
//           type="text"
//           placeholder="e.g stephen king"
//           onChange={nameChangeHandler}
//           onBlur={nameBlurHandler}
//           value={nameValue}
//         />
//         <p>
//           <label>Email Address</label>
//         </p>
//         <input
//           type="text"
//           placeholder="e.g stephenking@lorem.com"
//           onChange={emailChangeHandler}
//           onBlur={emailBlurHandler}
//           value={emailValue}
//         />
//         <p>
//           <label>Phone Number</label>
//         </p>
//         <input placeholder="e.g 09053633563" type="number"
//           onChange={numberChangeHandler}
//           onBlur={numberBlurHandler}
//           value={numberValue}/>
//         <div className={classes.btnDiv}>
//           <div></div>
//           <button className={classes.btn}>Next step</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default PersonalInfo;

import { useState } from "react";
import classes from "./PersonalInfo.module.css";
import Wrapper from "../Layout/wrapper";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Card from "../Layout/Card";
import FormContext from "../../store/form-context";
import { useContext } from "react";

const PersonalInfo = () => {
  const ctx=useContext(FormContext)
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [enteredNum, setEnteredNum] = useState("");
  const [numIsTouched, setNumIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  const emailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;
  const numIsValid = enteredNum.length === 11;
  const numInputIsInvalid = !numIsValid && numIsTouched;
  let formIsValid = false;

  if (nameIsValid && emailIsValid && numIsValid) {
    formIsValid = true;
  }
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = () => {
    setNameIsTouched(true);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const numChangeHandler = (e) => {
    setEnteredNum(e.target.value);
  };

  const numInputBlurHandler = () => {
    setNumIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEmailIsTouched(true);
    setNameIsTouched(true);
    setNumIsTouched(true);
    if (!nameIsValid && !emailIsValid && !numIsValid) {
      return;
    }

    setEnteredEmail("");
    setEnteredName("");
    setEnteredNum("");

    setEmailIsTouched(false);
    setNumIsTouched(false);
    setNameIsTouched(false);
  };

  const nameInputClass = nameInputIsInvalid ? classes[`input-error`] : "";
  const emailInputClass = emailInputIsInvalid ? classes[`input-error`] : "";
  const numInputClass = numInputIsInvalid ? classes[`input-error`] : "";

  const goToNextHandler = () => {
    navigate("/plan", { replace: true, state: {} });
  };

  return (
    <Card>
      <NavBar iP={ctx.personalIsActive} />
      <Wrapper>
        <div className={classes.textPerInfo}>
          <h3>Personnal info</h3>
          <p>please provide your name , email Address, and phone number</p>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <p>
              <label>Name</label>
            </p>
            <input
              className={nameInputClass}
              type="text"
              placeholder="e.g Stephen king"
              onChange={nameChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
          </div>
          <div>
            <p>
              <label>Email Address</label>
            </p>
            <input
              className={emailInputClass}
              type="text"
              placeholder="e.g Stephenking@lorem.com"
              onChange={emailChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
            />
          </div>
          <div>
            <p>
              <label>Phone Number</label>
            </p>
            <input
              className={numInputClass}
              placeholder="e.g 09053633563"
              type="number"
              onChange={numChangeHandler}
              onBlur={numInputBlurHandler}
              value={enteredNum}
            />
          </div>
          <div className={classes.btnDiv}>
            <div></div>
            <button
              onClick={goToNextHandler}
              disabled={!formIsValid}
              className={classes.btn}
            >
              Next Step
            </button>
          </div>
        </form>
      </Wrapper>
    </Card>
  );
};
export default PersonalInfo;
