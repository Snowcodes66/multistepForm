import Wrapper from "../Layout/wrapper";
import classes from "./Summary.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import FormContext from "../../store/form-context";
import Card from "../Layout/Card";
import NavBar from "../NavBar";

const Summary = (props) => {
  const ctx = useContext(FormContext);
  const { dataDetails } = useContext(FormContext);

  const navigate = useNavigate();

  const goToNextHandler = () => {
    navigate("/thanks", { replace: true, state: {} });
  };
  const goBackHandler = () => {
    navigate("/add", { replace: true, state: {} });
  };
  const opMontly = ctx.boxChecked && !ctx.yearIsActive ? 1 : 0;
  const lspMonthly = ctx.boxOneChecked && !ctx.yearIsActive ? 2 : 0;
  const cpMonthly = ctx.boxTwoChecked && !ctx.yearIsActive ? 2 : 0;

  const opYearly = ctx.boxChecked && ctx.yearIsActive ? 10 : 0;
  const lspYearly = ctx.boxOneChecked && ctx.yearIsActive ? 20 : 0;
  const cpYearly = ctx.boxTwoChecked && ctx.yearIsActive ? 20 : 0;

  const totalMonthly = dataDetails.monthly + opMontly + lspMonthly + cpMonthly;
  const totalYearly = dataDetails.yearly + opYearly + lspYearly + cpYearly;

  return (
    <Card>
      <NavBar sM={ctx.summaryIsActive}/>
      <Wrapper>
        <div className={classes.textPerInfo}>
          <h3>Finishing Up</h3>
          <p>add-on helps enhace your gaming experience</p>
        </div>

        <div className={classes["parent-plan"]}>
          <div className={classes.plan}>
            <div>
              <h3>
                {ctx.dataVal}
                <span>('{ctx.yearIsActive ? "Yearly" : "Monthly"}')</span>
              </h3>
              <Link href="/plan">change</Link>
            </div>
            <div>
              {ctx.yearIsActive ? (
                <p>${dataDetails.yearly}/yr</p>
              ) : (
                <p> ${dataDetails.monthly}/mo</p>
              )}
            </div>
          </div>
          <div className={classes[`parent-plan1`]}>
            <div className={classes.plan1}>
              {ctx.boxChecked ? <p>online Service</p> : ""}
              {ctx.yearIsActive && ctx.boxChecked ? <p>$10/yr</p> : ""}
              {!ctx.yearIsActive && ctx.boxChecked ? <p>$1/mo</p> : ""}
            </div>
            <div className={classes.plan1}>
              {ctx.boxOneChecked ? <p>Larger Storage</p> : ""}
              {ctx.yearIsActive && ctx.boxOneChecked ? <p>$20/yr</p> : ""}
              {!ctx.yearIsActive && ctx.boxOneChecked ? <p>$2/mo</p> : ""}
            </div>
            <div className={classes.plan1}>
              {ctx.boxTwoChecked ? <p>customizable profile</p> : ""}
              {ctx.yearIsActive && ctx.boxTwoChecked ? <p>$20/yr</p> : ""}
              {!ctx.yearIsActive && ctx.boxTwoChecked ? <p>$2/mo</p> : ""}
            </div>
          </div>
        </div>
        <div className={classes.total}>
          <h4>Total per ({ctx.yearIsActive ? "year" : "month"})</h4>
          {ctx.yearIsActive ? (
            <p>${totalYearly}/yr</p>
          ) : (
            <p>${totalMonthly}/mo</p>
          )}
        </div>
        <div className={classes.btnDiv}>
          <div className={classes["btn-div"]}>
            <button className={classes.btn1} onClick={goBackHandler}>
              Go back
            </button>
          </div>
          <button onClick={goToNextHandler} className={classes.btn}>
            Confirm
          </button>
        </div>
      </Wrapper>
    </Card>
  );
};
export default Summary;
