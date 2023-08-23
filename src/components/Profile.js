export default function Profile() {
  return (
    <>
      <div className="containerProfile top-line">
        <div>
          <h2>Profile</h2>
        </div>
        <div className="profile-text">
          <div className="profile-item">
            <div>
              <h3>Profile</h3>
            </div>
            {/* <div className="pro"> */}
            <div className="pro">
              <div className="birthday">
                <h4>Birthday</h4>
                <p>24.03.1995</p>
              </div>
              <div className="birthday">
                <h4>Residence</h4>
                <p>Ankara</p>
              </div>
              <div className="birthday">
                <h4>Education</h4>
                <p>Hacettepe Üni. Biyoloji Lisans, 2016</p>
              </div>
              <div className="birthday">
                <h4>Preferred Role</h4>
                <p>Frontend, UI</p>
              </div>
            </div>
            {/* <div className="pro1">
                <div>Birthday</div>
                <div>Residence</div>
                <div>Education</div>
                <div>Preferred Role</div>
              </div>
              <div className="pro1">
                <div>24.03.1995</div>
                <div>Ankara</div>
                <div>Hacettepe Üni. Biyoloji Lisans,2016</div>
                <div>Frontend, UI</div>
              </div> */}
            {/* </div> */}
          </div>
          <div className="profileAbout">
            <h3>About Me</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.{" "}
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
        <div className="lll"></div>
      </div>
    </>
  );
}
