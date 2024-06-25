//Week 7 - IMPORTED FROM WEEK 6
//Angelica Pekas CPRG-306-D
//000906248

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-3 m-6 max-w-m justify-center bg-blue-900 rounded-lg shadow-md"
      onClick={() => onSelect(name)}
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <p className="text-base font-semibold">Buy {quantity} in {category}</p>
    </li>
  );
}