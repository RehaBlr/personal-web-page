import { useSelector } from "react-redux";

export default function Profile() {
  const profil_text = useSelector((state) => state.source);
  return (
    <>
      <div className="containerProfile top-line">
        <div>
          <h2>{profil_text.profileText}</h2>
        </div>
        <div className="profile-text">
          <div className="profile-item">
            <div>
              <h3>{profil_text.profileText}</h3>
            </div>
            {/* <div className="pro"> */}
            <div className="pro">
              <div className="birthday">
                <h4>{profil_text.birthday}</h4>
                <p>{profil_text.birthdayText}</p>
              </div>
              <div className="birthday">
                <h4>{profil_text.residence}</h4>
                <p>{profil_text.residenceText}</p>
              </div>
              <div className="birthday">
                <h4>{profil_text.education}</h4>
                <p>{profil_text.educationText}</p>
              </div>
              <div className="birthday">
                <h4>{profil_text.preferredRole}</h4>
                <p>{profil_text.preferredRoleText}</p>
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
            <h3>{profil_text.aboutMe}</h3>
            <p>{profil_text.aboutMeText1}</p>
            <p>{profil_text.aboutMeText2}</p>
          </div>
        </div>
        <div className="lll"></div>
      </div>
    </>
  );
}
