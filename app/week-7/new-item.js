//Week 7 - Imported from Week 6
//Angelica Pekas CPRG-306-D
//000906248

'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  function handleSubmit(e) {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log('new item', item);
    onAddItem(item);
    setName('');
    setQuantity(1);
    setCategory('produce');
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-gray-200 rounded shadow-md'>
      <h2 className='text-3xl font-bold mb-4 text-center text-black'>Add To List</h2>
      <div className='mb-4'>
        <label className='block text-gray-700 text-lg font-bold mb-2 text-center' htmlFor='name'>
          Item Name:
        </label>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 text-lg font-bold mb-2 text-center' htmlFor='quantity'>
          Quantity:
        </label>
        <input
          type='number'
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          min='1'
          max='99'
          required
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 text-lg font-bold mb-2 text-center' htmlFor='category'>
          Category:
        </label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          <option value='produce'>Produce</option>
          <option value='dairy'>Dairy</option>
          <option value='bakery'>Bakery</option>
          <option value='meat'>Meat</option>
          <option value='frozenFoods'>Frozen Foods</option>
          <option value='cannedGoods'>Canned Goods</option>
          <option value='dryGoods'>Dry Goods</option>
          <option value='beverages'>Beverages</option>
          <option value='snacks'>Snacks</option>
          <option value='household'>Household</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <button
        type='submit'
        className='bg-blue-300 hover:bg-blue-700 text-lg text-white font-bold py-2 px-4 rounded'
      >
        Add Item(s)
      </button>
    </form>
  );
}