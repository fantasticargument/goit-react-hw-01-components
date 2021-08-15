import PropTypes from 'prop-types';
import Profile from './Profile';
// import user from './userProfil.json';

function UserProfile({ user }) {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object,
};

export default UserProfile;
