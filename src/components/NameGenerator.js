import * as React from 'react';
import name from '../Data/name.json';

const NameGenerator = (props) => {
  const {language, gender} = props;
  const PREFIX_ARRAY = Object.keys(name.prefix).filter(item => item.includes("english"));
  const SUFFIX_ARRAY = Object.keys(name.suffix).filter(item => item.includes("english"));

  const [prefix, setPrefix] = React.useState('');
  const [suffix, setSuffix] = React.useState('');
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
  }

  return (
    <div className='nameGeneratorContainer'>
      <select onChange={handlePrefixChange}>
        {PREFIX_ARRAY.map(item => {
          return (<option value={name.prefix[item]} key={name.prefix[item]}>{name.prefix[item]}</option>)
        })}
      </select>
      <select onChange={handleSuffixChange}>
        {SUFFIX_ARRAY.map(item => {
          return (<option value={name.suffix[item]} key={name.suffix[item]}>{name.suffix[item]}</option>)
        })}
      </select>
      <button onClick={randomizer}>
        Generate Random Name
      </button>
      <h1>
        {prefix} {suffix}
      </h1>
    </div>
  )
}

export default NameGenerator;