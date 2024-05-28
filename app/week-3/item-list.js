//Week 3 - Build the ItemList Component
//Angelica Pekas CPRG-306-D
//000906248

import Item from './item';

const item1 = {
  name: 'MILK, 4 L 🥛',
  quantity: 1,
  category: 'DAIRY',
};

const item2 = {
  name: 'BREAD 🍞',
  quantity: 2,
  category: 'BAKERY',
};

const item3 = {
  name: 'EGGS, DOZEN 🥚',
  quantity: 2,
  category: 'DAIRY',
};

const item4 = {
  name: 'BANANAS 🍌',
  quantity: 6,
  category: 'PRODUCE',
};

const item5 = {
  name: 'BROCCOLI 🥦',
  quantity: 3,
  category: 'PRODUCE',
};

const item6 = {
  name: 'CHICKEN BREAST, 1 KG 🍗',
  quantity: 1,
  category: 'MEAT',
};

const item7 = {
  name: 'PASTA SAUCE 🍝',
  quantity: 3,
  category: 'CANNED GOODS',
};

const item8 = {
  name: 'SPAGHETTI, 454 G 🍝',
  quantity: 2,
  category: 'DRY GOODS',
};

const item9 = {
  name: 'TOILET PAPER, 12 PACK 🧻',
  quantity: 1,
  category: 'HOUSEHOLD',
};

const item10 = {
  name: 'PAPER TOWELS, 6 PACK',
  quantity: 1,
  category: 'HOUSEHOLD',
};

const item11 = {
  name: 'DISH SOAP 🍽️',
  quantity: 1,
  category: 'HOUSEHOLD',
};

const item12 = {
  name: 'HAND SOAP 🧼',
  quantity: 4,
  category: 'HOUSEHOLD',
};

const ItemList = () => {
  return (
    <ul style={{ listStyle: '60%', width: '10%', margin:'auto', background:'black' }} className="divide-y divide-white-100">
      <Item {...item1} />
      <Item {...item2} />
      <Item {...item3} />
      <Item {...item4} />
      <Item {...item5} />
      <Item {...item6} />
      <Item {...item7} />
      <Item {...item8} />
      <Item {...item9} />
      <Item {...item10} />
      <Item {...item11} />
      <Item {...item12} />
    </ul>
  );
};

export default ItemList;