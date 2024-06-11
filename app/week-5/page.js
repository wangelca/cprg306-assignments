//Week 5 - IMPORTED FROM WEEK 3 with Improved CSS
//Angelica Pekas CPRG-306-D
//000906248

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="text-center mt-1 bg-black-900">
      <h1 className="py-2 text-2xl text-white font-bold">SHOPPING LIST</h1>
      <ItemList />
    </main>
  );
}
