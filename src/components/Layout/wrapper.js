import classes from "./Wrapper.module.css";
const Wrapper = (props) => {
  return <div className={` ${classes['right-div']}`}>{props.children}</div>;
};
export default Wrapper;
