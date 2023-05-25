import React from "react";

const Menu = ({ menuItems }) => {
  const addToCart = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <h3>{menuItem.name}</h3>
            <p>Price: ${menuItem.price}</p>
            <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
