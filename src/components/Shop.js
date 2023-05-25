import { useState } from "react";
import Menu from "./Menu";

const Shop = () => {
  const shops = [
    {
      id: 1,
      name: "Restaurant A",
      cuisine: "Italian",
      deliveryTime: "30 minutes",
      menu: [
        { id: 1, name: "Pizza", price: 10 },
        { id: 2, name: "Pasta", price: 8 },
        { id: 3, name: "Salad", price: 6 },
      ],
    },
    {
      id: 2,
      name: "Restaurant B",
      cuisine: "Chinese",
      deliveryTime: "45 minutes",
      menu: [
        { id: 4, name: "Fried Rice", price: 12 },
        { id: 5, name: "Sweet and Sour Chicken", price: 15 },
        { id: 6, name: "Egg Rolls", price: 5 },
      ],
    },
    {
      id: 3,
      name: "Restaurant C",
      cuisine: "Indian",
      deliveryTime: "40 minutes",
      menu: [
        { id: 7, name: "Chicken Tikka Masala", price: 14 },
        { id: 8, name: "Naan Bread", price: 3 },
        { id: 9, name: "Vegetable Biryani", price: 11 },
      ],
    },
  ];
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleSelectRest = (shop) => {
    setSelectedShop(shop);
    setSelectedMenu(null);
  };

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (menuItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, menuItem]);
  };

  return (
    <div>
      <div>
        <h2>Shops</h2>
        <ul>
          {shops.map((shop) => (
            <li key={shop.id}>
              <h3>{shop.name}</h3>
              <p>Cuisine: {shop.cuisine}</p>
              <p>Delivery Time: {shop.deliveryTime}</p>
              <button onClick={() => handleSelectRest(shop)}>Select</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {selectedShop && !selectedMenu && (
          <Menu menuItems={selectedShop.menu} addToCart={() => addToCart()} />
        )}
      </div>
    </div>
  );
};

export default Shop;
