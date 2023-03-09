import React, { useState } from 'react';
import GuildCard from '../GuildCard';

function GuildApplicationForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guildName, setGuildName] = useState('');
  const [logo, setLogo] = useState('');
  const [description, setDescription] = useState('');
  const [showDiscord, setShowDiscord] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
  const [discord, setDiscord] = useState('');
  const [youtube, setYoutube] = useState('');

  const handleDiscordChange = (event) => {
    setDiscord(event.target.value);
  };

  const handleYoutubeChange = (event) => {
    setYoutube(event.target.value);
  };

  const handleShowDiscordChange = (event) => {
    setShowDiscord(event.target.checked);
  };

  const handleShowYoutubeChange = (event) => {
    setShowYoutube(event.target.checked);
  };

  return (
    <form action="https://formsubmit.co/hammerhammond23@gmail.com" method="POST" className='guildApp r-background' enctype='multipart/form-data'>
      <div className='guildAppHeader'>Guild Application</div>
      <div className='guildAppCont'>

      <div className='guildForm'>
        <div>
          <label htmlFor='name'>Applicant name:</label>
          <input
            id='name'
            type='text'
            name='applicantName'
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='email'>Your email:</label>
          <input
            id='email'
            type="email" 
            name="applicantEmail" 
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required>
          </input>
        </div>

        <div>
          <label htmlFor='guildName'>Guild Name:</label>
          <input
            id='guildName'
            type='text'
            name='guildName'
            placeholder="Guild Name"
            value={guildName}
            onChange={(event) => setGuildName(event.target.value)}
            required
          />
        </div>

        <div>
          <label for="picture">Upload a logo (PNG or JPG only):</label>
          <input
            id="picture"
            type="file"
            name='guildLogo'
            accept="image/png, image/jpeg"
            onChange={(event) => {
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setLogo(reader.result);
              };
            }}
          />
        </div>

        <div>
        <label htmlFor="has-discord">
          Does your guild have a Discord?
        </label>
        <input
          id="has-discord"
          type="checkbox"
          name="has-discord"
          checked={showDiscord}
          onChange={handleShowDiscordChange}
        />
        {showDiscord && (
          <input
            id="discord"
            type="text"
            name="discord"
            value={discord}
            onChange={handleDiscordChange}
            required
          />
        )}
      </div>
      <div>
        <label htmlFor="has-youtube">
          Does your guild have a YouTube?
        </label>
        <input
          id="has-youtube"
          type="checkbox"
          name="has-youtube"
          checked={showYoutube}
          onChange={handleShowYoutubeChange}
        />
        {showYoutube && (
          <input
            id="youtube"
            type="text"
            name="youtube"
            value={youtube}
            onChange={handleYoutubeChange}
            required
          />
        )}
      </div>

        <div>
          <label htmlFor='description'>
            Write a 1-2 sentence description about your guild:
          </label>
          <textarea
            id='description'
            type='text'
            name='description'
            placeholder='Guild description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <input type="hidden" name="_autoresponse" value="Hey there!
        Thank you for submitting a guild application for Mirandus Hub. After reviewed, an email will be sent to the provided email with your guild's approval status. 
        Regardless, have a fantastic day!
        -HammerHammond23"></input>

        </div>

        <div className='guildCardCont'>
        <GuildCard
          name={guildName}
          imageUrl={logo}
          description={description}
          discord={discord}
          youtube={youtube}
         />
      </div>

        <button className='guildAppSubmitBtn' type='submit'>Submit</button>

      </div>
    </form>
  );
}

export default GuildApplicationForm;