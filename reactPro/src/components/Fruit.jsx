const Fruit = ({ name, price, color }) => {
  return (
      <>
        {price> 10 ? <li>{name}-{price}$-{color}</li> :  ""}
      </>
  );
};

export default Fruit;
