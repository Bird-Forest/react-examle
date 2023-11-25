import React, { useMemo, useState } from 'react';

const initalFriends = [
  'Carleigh Hodge',
  'Sonia Hester',
  'Cash Winters',
  'Elsie Melton',
  'Roberto Camacho',
  'Nick Chavez',
  'Efrain Ballard',
  'Derick Archer',
  'Gabriel Horton',
  'Hadley Barr',
  'Anabel Underwood',
  'Leila Kerr',
  'Ross Carney',
  'Amber Rowe',
  'Nathen Franklin',
  'Oliver Harvey',
  'Gavin Torres',
  'Scott Lambert',
  'Zane Hardy',
  'Cody Waller',
  'Angelique Shannon',
  'Nathaly Mckenzie',
  'Kaylee Pittman',
  'Gracelyn Suarez',
];

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initalFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    console.log('Фильтруем друзей ' + Date.now());
    return friends.filter(friend => friend.toLowerCase().includes(filter));
  }, [filter, friends]);

  //   const visibleFriends = friends.filter(friend =>
  //     friend.toLowerCase().includes(filter)
  //   );
  return (
    <div>
      <h2>Friends</h2>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <hr />
      <input onChange={e => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
