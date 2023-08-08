import bgImage from "../assests/images/bg-sidebar-desktop.svg";
import mobileBg from '../assests/images/bg-sidebar-mobile.svg'
const NavBar = (props) => {
   
  
  return (
    <div>
      <div
        className="bg-img-div"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          
        }}      
      >
         <nav className="nav-div">
          <div className="parent-div">
            <div className={props.iP ? 'child-div active' : 'child-div'}> 1 </div>
            <div className="inner-div">
              <p>STEP 1</p>
              <h3>YOUR INFO</h3>
            </div>
          </div>
          <div className="parent-div">
            <div className={props.sP ? 'child-div active' : 'child-div'}> 2 </div>
            <div className="inner-div">
              <p>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </div>
          <div className="parent-div">
            <div className={props.aD ? 'child-div active' : 'child-div'}> 3 </div>
            <div className="inner-div">
              <p>STEP 3</p>
              <h3>ADD-ONS</h3>
            </div>
          </div>
          <div className="parent-div">
            <div className={props.sM ? 'child-div active' : 'child-div'}> 4 </div>
            <div className="inner-div">
              <p>STEP 4</p>
              <h3>SUMMARY</h3>
            </div>
          </div>
        </nav>
      </div>


        <div className="mobile-bg"
             style={{
                backgroundImage: `url(${mobileBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition:'center'
              }}
        >
        <nav className="nav-div">
          <div className="parent-div">
            <div className={props.iP ? 'child-div active' : 'child-div'}> 1 </div>
            <div className="inner-div">
              <p>STEP 1</p>
              <h3>YOUR INFO</h3>
            </div>
          </div>
          <div className="parent-div">
            
            <div className={props.sP ? 'child-div active' : 'child-div'}> 2 </div>
            <div className="inner-div">
              <p>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </div>
          <div className="parent-div">
            <div className={props.aD ? 'child-div active' : 'child-div'}> 3 </div>
            <div className="inner-div">
              <p>STEP 3</p>
              <h3>ADD-ONS</h3>
            </div>
          </div>
          <div className="parent-div">
            <div className={props.sM ? 'child-div active' : 'child-div'}> 4 </div>
            <div className="inner-div">
              <p>STEP 4</p>
              <h3>SUMMARY</h3>
            </div>
          </div>
        </nav>
        </div>
      ;
    </div>
  );
};
export default NavBar;
