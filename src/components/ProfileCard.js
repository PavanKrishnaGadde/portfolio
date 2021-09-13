import '../styles/profileCard.scss';
import proPic from '../images/propic.JPG'

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="propic-wrapper">
          <img className="profile-pic" src={proPic} alt={"PK"}/>
      </div>
      <div className="profile-details">
          <strong>Pavan Krishna Gadde</strong>
          <div>Full Stack Developer</div>
          <div>Software Engineer at Oracle</div>
          <div>B.Tech from NIT Warangal</div>
      </div>
    </div>
  );
}
