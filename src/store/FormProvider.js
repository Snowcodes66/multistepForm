import { useReducer, useState } from "react";
import FormContext from "./form-context";

const initialFormState = {
  arc: true,
  monthly: 9,
  yearly: 90,
};
const initialAddState = {
  name: "online",
  monthly: 1,
  yearly: 10,
};

const setPlanReducer = (state, action) => {
  if (action.type === "arc") {
    return { arc: true, monthly: 9, yearly: 90 };
  }
  if (action.type === "adv") {
    return { adv: true, monthly: 12, yearly: 120 };
  }
  if (action.type === "pro") {
    return { pro: true, monthly: 15, yearly: 150 };
  }
};

const setAddReducer = (state, action) => {
  if (action.type === "on") {
    return { name: "online", monthly: 1, yearly: 10 };
  }
  if (action.type === "lar") {
    return { name: "larger", monthly: 2, yearly: 20 };
  }
  if (action.type === "cus") {
    return { name: "cusmizable", monthly: 2, yearly: 20 };
  }
};

// const initialStepIsAct={
//   personalInfo:true
//}
// const isActiveReducerFn=(state, action)=>{
//   if (action.type==='personal') {
//     return{personalInfo:true}
//   }
//   if (action.type==='plan') {
//     return{plan:true}
//   }
//   if (action.type==='add') {
//     return{addOn:true}
//   }
//   if (action.type==='summary') {
//     return{summary:true}
//   }
// }
const personal=true
const setPlan=true
const addOn=true
const summary=true

const FormProvider = (props) => {
  const [year, setYear] = useState(false);
  const [arcDivClick, setArcDivClicked] = useState(true);
  const [advDivClick, setAdvDivClicked] = useState(false);
  const [proDivClick, setProDivClicked] = useState(false);
  const [boxChecked, setBoxChecked] = useState(true);
  const [boxOneChecked, setBoxOneChecked] = useState(true);
  const [boxTwoChecked, setBoxTwoChecked] = useState(false);
  const [value, setValue] = useState("Arcade");
  const [data, setData] = useReducer(setPlanReducer, initialFormState);
  const [planDetails, setDetails] = useReducer(setAddReducer, initialAddState);
  // const [stepIsActive , dispatchStepIsActive]=useReducer(isActiveReducerFn, initialStepIsAct)

  const totalHandler = () => {
    setDetails({ type: "sum" });
  };
  const setYearHandler = () => {
    setYear(!year);
  };

  // checkbox
  const boxIsCheckedHandler = () => {
    setDetails({ type: "on" });
    setBoxChecked(!boxChecked);
  };

  const boxOneIsCheckedHandler = (action) => {
    setDetails({ type: "lar" });
    setBoxOneChecked(!boxOneChecked);
  };

  const boxTwoIsCheckedHandler = () => {
    setDetails({ type: "cus" });
    setBoxTwoChecked(!boxTwoChecked);
  };


  //plan
  const arcDivHandler = () => {
    setData({ type: "arc" });
    setValue("Arcade");
    setAdvDivClicked(false);
    setProDivClicked(false);
    setArcDivClicked(!arcDivClick);
  };
  const advDivHandler = () => {
    setData({ type: "adv" });
    setValue("Advance");
    setArcDivClicked(false);
    setProDivClicked(false);
    setAdvDivClicked(!advDivClick);
  };
  const proDivHandler = () => {
    setData({ type: "pro" });
    setValue("Professional");
    setArcDivClicked(false);
    setAdvDivClicked(false);
    setProDivClicked(!proDivClick);
  };

  const formContext = {
    personalIsActive:personal,
    selectPlanIsActive:setPlan,
    addOnIsActive:addOn,
    summaryIsActive:summary,
    pricePlan: planDetails,
    onGetTotal: totalHandler,
    yearIsActive: year,
    setYear: setYearHandler,
    dataVal: value,
    dataDetails: data,
    boxChecked: boxChecked,
    setBoxIsChecked: boxIsCheckedHandler,
    boxOneChecked: boxOneChecked,
    setBoxOneIsChecked: boxOneIsCheckedHandler,
    boxTwoChecked: boxTwoChecked,
    setBoxTwoIsChecked: boxTwoIsCheckedHandler,
    arcDivClicked: arcDivClick,
    onClickArcDiv: arcDivHandler,
    advDivClicked: advDivClick,
    onClickAdvDiv: advDivHandler,
    proDivClicked: proDivClick,
    onClickProDiv: proDivHandler,
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};
export default FormProvider;
