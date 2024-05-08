import PropTypes from 'prop-types';
import { useState } from 'react';
import './WeatherForm.css';

function WeatherForm({ onSubmit }) {
  const [inputLocation, setInputLocation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputLocation);
  };

  return (
    <form className='locationform' onSubmit={handleSubmit}>
      <div className='locationform__elements'>
        <label htmlFor='location'>Enter location:</label>
        <input
          id='location'
          type='text'
          value={inputLocation}
          onChange={e => setInputLocation(e.target.value)}
          placeholder='City,state code (if USA),country code'
        />
        <input type='submit' value='Submit' />
      </div>
      {/*  */}
    </form>
  );
}

WeatherForm.propTypes = {
  onSubmit: PropTypes.func
};

export default WeatherForm;
