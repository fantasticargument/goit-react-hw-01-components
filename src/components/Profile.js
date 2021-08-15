import PropTypes from 'prop-types';

export default function Profile(props) {
  const { name, tag, location, avatar, stats } = props;
  const stat = Object.entries(stats);
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        {stat.map((element, id) => (
          <li key={id}>
            <span class="label">{element[0]} </span>
            <span class="quantity">{element[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
