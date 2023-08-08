import React from "react";

const FormContext = React.createContext({
  personalIsActive:true,
  selectPlanIsActive:true,
  addOnIsActive:true,
  summaryIsActive:true,
  setMon: () => {},
  yearSum:'',
  monthSum:'',
  pricePlan:'',
  data:'',
  dataVal:'',
  dataDetails:'',
  yearIsActive:'',
  setYear:()=>{},  
  boxChecked:'',
  setBoxIsChecked:()=>{} ,
  boxOneChecked:'',
  setBoxOneIsChecked:()=>{} ,
  boxTwoChecked:'',
  setBoxTwoIsChecked:()=>{} ,
  arcDivClicked:'',
  onClickArcDiv:()=>{},
  advDivClicked:'',
  onClickAdvDiv:()=>{},
  proDivClicked:'',
  onClickProDiv:()=>{}
});

export default FormContext;
