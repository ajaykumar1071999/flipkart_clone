import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PropTypes from 'prop-types'; 

import "./style.css"
export default function Profile({ profileOpen, handleProfileOpen }) {
  return (
    <div>
      <div
        style={{ rotate: profileOpen ? "180deg" : "" }}
        onClick={handleProfileOpen}
      >
        <KeyboardArrowDownOutlinedIcon />
      </div>
      {profileOpen && <ProfileTab/>}
    </div>
  );
}

Profile.propTypes={
    profileOpen:PropTypes.bool.isRequired,
    handleProfileOpen:PropTypes.func.isRequired
}


export const ProfileTab = () => {
  return <div className="tab-container">Hello</div>;
};
