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
          <li key={fruit.name}>
            {fruit.name} - {fruit.color} - ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
