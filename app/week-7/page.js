//Week 7 - IMPORTED FROM WEEK 6
//Angelica Pekas CPRG-306-D
//000906248

'use client';

import React, { useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedItemName);
    setSelectedIngredient(cleanedItemName.toLowerCase()); 
  };

  return (
    <main className="text-center mt-1 bg-black-900 flex">
      <div className="w-1/2">
        <h1 className="py-2 text-2xl text-white font-bold">SHOPPING LIST</h1>
        <ItemList items={items} onAddItem={handleAddItem} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedIngredient} />
      </div>
    </main>
  );
}
