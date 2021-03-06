import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['All', ...new Set(items.map( (item) => item.category ))];

function App() {
  const [menuItem,setMenuItem] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === 'All') {
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItem(newItem);
  }
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h4>Our Menu</h4>
      <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItem={filterItem}/>
      <Menu menuItem={menuItem} />
    </section>
  </main>;
}

export default App;
