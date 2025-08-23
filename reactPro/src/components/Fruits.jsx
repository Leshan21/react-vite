import Fruit from "./Fruit.jsx";

const Fruits = () => {
  //const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];
  const fruits = [
    {
      name: "Apple",
      color: "Red",
      price: 10,
      soldOut: false,
    },
    {
      name: "Mango",
      color: "Yellow",
      price: 15,
      soldOut: false
    },
    {
      name: "Banana",
      color: "Yellow",
      price: 5,
      soldOut: true
    },
    {
      name: "Orange",
      color: "Orange",
      price: 8,
      soldOut: true
    },
    {
      name: "Pineapple",
      color: "Brown",
      price: 12,
      soldOut: false
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            color={fruit.color}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
