//Week 3 - Build the Page Component
//Angelica Pekas CPRG-306-D
//000906248

import ItemList from './item-list';

export default function Page() {
    return (
        <main style={{ textAlign: 'center', marginTop: '1px', background:'gray'}}>
            <h1 className='pt-2 text-2xl text-white font-bold text-center'>SHOPPING LIST</h1>
            <ItemList/>
        </main>
    )
}