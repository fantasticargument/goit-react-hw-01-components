import ReactDOM from 'react-dom';
import user from './userProfil.json';

// {
//   /* <Profile
//   name={user.name}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />; */
// }

// consol.log(user);

const element = (
  <div class="profile">
    <div class="description">
      <img src={user.avatar} alt={user.name} class="avatar" />
      <p class="name">{user.name}</p>
      <p class="tag">{user.tag}</p>
      <p class="location">{user.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{user.stats.Followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{user.stats.Views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{user.stats.Views}</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
//=============================================================================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
