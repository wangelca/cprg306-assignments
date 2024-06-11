//Week 5 - IMPORTED FROM WEEK 3 with Improved CSS
//Angelica Pekas CPRG-306-D
//000906248

'use client';

import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  

  const sortedItems = items.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="w-3/4 mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6 text-center">
        <button
          onClick={() => setSortBy('name')}
          className={`button ${sortBy === 'name' && 'button-active'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`button ${sortBy === 'category' && 'button-active'}`}
        >
          Sort by Category
        </button>
      </div>
      <ul className="list-none p-0">
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
