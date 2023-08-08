import { useState } from "react";

const useInput=(validateFn)=>{
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const hasError = !enteredValue && isTouched;
  const isValid = validateFn(enteredValue)

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  
  return {
    value:enteredValue,
    inputBlurHandler,
    onChangeHandler,
    hasError,
    isValid,
  };
};

export default useInput;




// import { useState } from "react";

// const useInput = (validateFn) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);
//   const [submit, setCanSubmit] = useState(false);

//   const hasError = isTouched && !enteredValue;
//   const isValid = validateFn(enteredValue);

//   const onchangeHandler = (e) => {
//     setEnteredValue(e.target.value);
//   };

//   function onBlurHandler(e) {
//     setIsTouched(true);
//   }

//   function submitHandler(e) {
//     e.preventDefault();
//     if (!isValid) {
//       setIsTouched(true);
//       // alert('provide a valid email try including @ symbol')
//       return;
//     }
//     setIsTouched(false);
//     setCanSubmit(true);
//   }

//   const resetInput = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };
//   const closeModalHandler = () => {
//     setCanSubmit(false);

//     resetInput();
//   };

//   return {
//     hasError,
//     isValid,
//     onchangeHandler,
//     onBlurHandler,
//     enteredValue,
//     submitHandler,
//     closeModalHandler,
//     submit,
//   };
// };
// export default useInput;
