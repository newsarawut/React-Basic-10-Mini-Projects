const User = ({img, name, hobbies, someData, children}) => {
  // console.log(props)
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h3>Hobbies: {hobbies}</h3>
      <h5>{someData.favorite}</h5>
      {children}
    </section>
  );
};

export default User;