//Week 6 - IMPORTED FROM WEEK 5
//Angelica Pekas CPRG-306-D
//000906248

'use client';

import { useState } from 'react';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  }
  return (
    <main className="text-center mt-1 bg-black-900">
      <h1 className="py-2 text-2xl text-white font-bold">SHOPPING LIST</h1>
      <ItemList items ={items} onAddItem={handleAddItem}/>
    </main>
  );
}