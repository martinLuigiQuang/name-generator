import * as React from 'react';
import name from '../Data/name.json';
import './NameGenerator.scss';

const NameGenerator = (props) => {
  const { language, gender } = props;
  const PREFIX_ARRAY = Object.keys(name.prefix).filter(item => item.includes("english"));
  const SUFFIX_ARRAY = Object.keys(name.suffix).filter(item => item.includes("english"));

  const [prefix, setPrefix] = React.useState(name.prefix[PREFIX_ARRAY[0]]);
  const [suffix, setSuffix] = React.useState(name.suffix[SUFFIX_ARRAY[0]]);
  const handlePrefixChange = (e) => {
    setPrefix(e.target.value);
  };
  const handleSuffixChange = (e) => {
    setSuffix(e.target.value);
  };
  const randomizer = () => {
    const prefixLength = PREFIX_ARRAY.length;
    const suffixLength = SUFFIX_ARRAY.length;
    const randomPrefixNumber = Math.floor(Math.random() * prefixLength);
    const randomSuffixNumber = Math.floor(Math.random() * suffixLength);
    setPrefix(name.prefix[PREFIX_ARRAY[randomPrefixNumber]]);
    setSuffix(name.suffix[SUFFIX_ARRAY[randomSuffixNumber]]);
  };

  return (
    <div className="name-generator-container">
      <div className="name-options-container">
        <div className="prefix-container">
          <label htmlFor="prefix">Pick your modifier</label>
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
                    selected={prefix === value}
                  >
                    {value}
                  </option>
                );
              })
            }
          </select>
        </div>
        <div className="suffix-container">
          <label htmlFor="suffix">Pick your heroic name</label>
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
                    selected={suffix === value}
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
        Generate Random Name
      </button>
      <h1>
        {prefix} {suffix}
      </h1>
    </div>
  );
};

export default NameGenerator;
