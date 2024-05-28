//Week 3 - Build the Item Component
//Angelica Pekas CPRG-306-D
//000906248

export default function Item({ name, quantity, category }) {
    return (
      <li className='p-3 m-6 max-w-sm justify-center'>
        <div>
          <h2 className = 'text-xl bold'>{name}</h2>
        </div>
        <h2 className = 'text-m bold'> BUY {quantity} IN {category}  </h2>
      </li>
    );
  }