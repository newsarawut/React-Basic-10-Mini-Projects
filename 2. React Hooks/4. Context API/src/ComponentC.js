import { Data, Data1 } from "./App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          // return <h1>My name is: {name}</h1>
          return (
            <Data1.Consumer>
              {(movie) => {
                return (
                  <h1>
                    My name is: {name} and Favorite movie is: {movie}
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
