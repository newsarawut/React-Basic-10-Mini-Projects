// ------------------  Example 1 (IF) ------------------
// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }

//   return <InvalidPassword />;
// };

// function App() {
//   return (
//     <>
//       <Password isValid={false} />
//     </>
//   );
// }

// export default App;

// ------------------  Example 2 (&&) ------------------
// const Cart = () => {
//   const items = ["Laptop", "Smart Phone", "Airpods", "Smart Watch"];

//   return (
//     <>
//       <h1>Cart 🛒</h1>

//       { items.length > 0 && <h2>You have {items.length} items in your cart.</h2>}

//       <ul>
//         <h4>Products</h4>
//         {items.map((item) => (
//           <li key={Math.random() * 5}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <Cart />
//     </>
//   );
// }

// export default App;

// ------------------ Example 3 (Ternary Operator) ------------------
// condition ? true : false

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

function App() {
  return (
    <section>
      <Password isValid={false} />
    </section>
  );
}

export default App;
