const Fruit = ({ name, price, color, soldOut }) => {
  return (
      <>
        {<li>{name}-{price}$-{color} {soldOut ? "soldout " : "availble"}</li>}
      </>
  );
};

export default Fruit;
