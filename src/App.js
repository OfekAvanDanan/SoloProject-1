import { ReactSVG } from 'react-svg'
import {userProfile} from './userProfile.js';

import './App.css';

import profilePicture  from './images/profilePicture.jpeg';
import FacebookIcon  from './images/Facebook Icon.svg';
import gitHubIcon from './images/GitHub Icon.svg';
import instagramIcon from './images/Instagram Icon.svg';
import mailIcon from './images/Mail.svg';
import twitterIcon from './images/Twitter Icon.svg';
import LinkedinIcon from './images/Linked in.svg';


function App() {
  return (
    <div className="App">
      <div className="Window">
        <img src={profilePicture} className="profile-photo" alt="profile"/>
        <h1>{userProfile.name}</h1>
        <h3>{userProfile.proffesion}</h3>
        <h4>{userProfile.websiteAdress}</h4>
        <div className="buttons">
          <button id='butn Email'> <ReactSVG src={mailIcon} /> Email</button>
          <button id='button-LinkedIn'> <ReactSVG src={LinkedinIcon} /> Linkedin</button>
        </div>
        <div className='Description'>
          <h2>About</h2>
          <p>{userProfile.about}</p>
          <h2>Interests</h2>
          <p>{userProfile.interests}</p>
        </div>
        <div className='icons'>
          <ReactSVG src={twitterIcon} alt="twitter icon" />
          <ReactSVG src={FacebookIcon} alt="Facebook icon"/>
          <ReactSVG src={instagramIcon} alt="Instagram icon"/>
          <ReactSVG src={gitHubIcon} alt="GitHab icon"/>
        </div>
      </div>
    </div>
  );
}

export default App;
