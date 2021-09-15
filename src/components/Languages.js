import * as React from 'react';

const LanguageSelector = (props) => {
  const { handleLanguageSelector } = props;

  return (
    <div onChange={handleLanguageSelector}>
      <label htmlFor="language">Language</label>
      <label htmlFor="english">English</label>
      <input type="radio" id='english' name='language' value='english'/>
      <label htmlFor="spanish">Spanish</label>
      <input type="radio" id='spanish' name='language' value='spanish' />
      <label htmlFor="portuguese">Portuguese</label>
      <input type="radio" id='portuguese' name='language' value='portuguese' />
    </div>
  )
};

export default LanguageSelector;
