import React from "react";

const Menu = ({ menuItems, addToCart }) => {
  const handleSelectMenu = (menuItem) => {
    addToCart(menuItem);
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <h3>{menuItem.name}</h3>
            <p>Price: ${menuItem.price}</p>
            <button onClick={() => handleSelectMenu(menuItem)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
