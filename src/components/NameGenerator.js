import * as React from 'react';
import name from '../Data/name.json';
import locale from '../Data/language.json';
import './NameGenerator.scss';

const NameGenerator = (props) => {
  const { language, gender, handlePrefix, handleSuffix, prefix, suffix } = props;
  const PREFIX_ARRAY = Object.keys(name.prefix).filter(item => item.includes(language) && item.includes(gender));
  const SUFFIX_ARRAY = Object.keys(name.suffix).filter(item => item.includes(language) && item.includes(gender));

  const handlePrefixChange = (e) => {
    handlePrefix(e.target.value);
  };
  const handleSuffixChange = (e) => {
    handleSuffix(e.target.value);
  };
  const randomizer = () => {
    const prefixLength = PREFIX_ARRAY.length;
    const suffixLength = SUFFIX_ARRAY.length;
    const randomPrefixNumber = Math.floor(Math.random() * prefixLength);
    const randomSuffixNumber = Math.floor(Math.random() * suffixLength);
    handlePrefix(name.prefix[PREFIX_ARRAY[randomPrefixNumber]]);
    handleSuffix(name.suffix[SUFFIX_ARRAY[randomSuffixNumber]]);
  };

  return (
    <div className="name-generator-container">
      <div className="name-options-container">
        <div className="prefix-container">
          <label htmlFor="prefix">{locale[language].modifier}</label>
          <select
            onChange={handlePrefixChange}
            name="prefix"
            id="prefix"
          >
            {
              PREFIX_ARRAY.map(item => {
                const value = name.prefix[item];
                return (
                  <option
                    value={value}
                    key={value}
                  >
                    {value}
                  </option>
                );
              })
            }
          </select>
        </div>
        <div className="suffix-container">
          <label htmlFor="suffix">{locale[language].heroic}</label>
          <select
            onChange={handleSuffixChange}
            name="suffix"
            id="suffix"
          >
            {
              SUFFIX_ARRAY.map(item => {
                const value = name.suffix[item];
                return (
                  <option
                    value={value}
                    key={value}
                  >
                    {value}
                  </option>
                );
              })
            }
          </select>
        </div>
      </div>
      <button onClick={randomizer}>
        {locale[language].generate}
      </button>
      <h1>
        {prefix} {suffix}
      </h1>
    </div>
  );
};

export default NameGenerator;
