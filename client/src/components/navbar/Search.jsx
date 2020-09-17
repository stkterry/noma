import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const exampleListOfFruit = [
  'apple',
  'banana',
  'orange',
  'kiwi',
  'tomato',
  'strawberry'
]

export default function Search ({...rest}) {

  const [active, setActive] = useState(false);

  const [searchItem, setSearchItem] = useState('');
  useEffect(() => {
    if (active === false) setSearchItem('');
  }, [active]);

  const results = !searchItem ?
    exampleListOfFruit :
    exampleListOfFruit.filter(fruit =>
      fruit.toLowerCase().includes(searchItem.toLocaleLowerCase())
    );

  return (
    active ? 
      <div className='searchbox'>
        <input
          autoFocus
          onBlur={() => setActive(false)}
          type='text'
          placeholder='Search'
          value={searchItem}
          onChange={event => setSearchItem(event.target.value)}
        />
        <ul className='searchbox-results'>
          {results.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    :
      <div className='searchbox-icon' {...rest} onClick={() => setActive(true)}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
  )

}