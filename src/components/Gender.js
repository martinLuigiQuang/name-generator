import * as React from 'react';

const GenderSelector = (props) => {
  const {language, handleGenderSelection} = props;

  return (
    <div onChange={handleGenderSelection}>
      <label htmlFor="gender">Gender</label>
      <label htmlFor="male">Male</label>
      <input type="radio" id='male' name='gender' value='male'/>
      <label htmlFor="female">Female</label>
      <input type="radio" id='female' name='gender' value='female' />
      <label htmlFor="neutral">Neutral</label>
      <input type="radio" id='neutral' name='gender' value='neutral' />
    </div>
  )
};

export default GenderSelector;