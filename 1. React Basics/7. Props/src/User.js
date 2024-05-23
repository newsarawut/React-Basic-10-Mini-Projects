const User = (props) => {
    // console.log(props)
    return (
      <section>
        <img src={props.img} alt={props.name} />
        <h1>Name: {props.name}</h1>
        <h3>Hobbies: {props.hobbies}</h3>
        <h5>{props.someData.favorite}</h5>
      </section>
    );
  };

export default User;

