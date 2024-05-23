const User = ({img, name, hobbies, someData}) => {
  // console.log(props)
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h3>Hobbies: {hobbies}</h3>
      <h5>{someData.favorite}</h5>
    </section>
  );
};

export default User;