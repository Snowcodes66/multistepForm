import mark from "../../assests/images/icon-thank-you.svg";
import classes from "./Finished.module.css";
import Card from "../Layout/Card";
import Wrapper from "../Layout/wrapper";
import NavBar from "../NavBar";
import { useContext } from "react";
import FormContext from "../../store/form-context";
const Finished = () => {
  const ctx = useContext(FormContext);
  return (
    <Card>
      <NavBar sM={ctx.summaryIsActive} />
      <Wrapper>
        <div className={classes['finish-par-div']}>
          <img className={classes.mark} src={mark} alt="checkmark" />
          <h1>Thank You</h1>
          <p>
            Thanks for confirming your subscription , we hope you had fun while
            using our platform. if you ever need support plese feel free to
            emalm us at <a href="/#">support@loremgaming.com</a>
          </p>
        </div>
      </Wrapper>
    </Card>
  );
};
export default Finished;
