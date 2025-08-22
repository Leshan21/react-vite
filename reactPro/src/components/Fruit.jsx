const Fruit = ({ name, price, color }) => {
  return (
    <li>
      {name}-{price}$-{color}
    </li>
  );
};

export default Fruit;
