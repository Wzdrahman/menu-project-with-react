import React from 'react';

const Menu = ({menuItem}) => {
  return (
  <div className='section-center'>
    {
      menuItem.map((items) => {
        const {id,title,desc,img,price} = items;
        
        return( <article key={id} className='menu-item'>
          <img src={img} alt={title} className='photo' />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
            </header>
            <p className="item-">{desc}</p>
          </div>

        </article>
        );

      })
    }
  </div>
   );
};

export default Menu;
