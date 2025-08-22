import Fruit from "./Fruit.jsx";

const Fruits = () => {
  //const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];
  const fruits = [
    {
      name: "Apple",
      color: "Red",
      price: 10,
    },
    {
      name: "Mango",
      color: "Yellow",
      price: 15,
    },
    {
      name: "Banana",
      color: "Yellow",
      price: 5,
    },
    {
      name: "Orange",
      color: "Orange",
      price: 8,
    },
    {
      name: "Pineapple",
      color: "Brown",
      price: 12,
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
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
