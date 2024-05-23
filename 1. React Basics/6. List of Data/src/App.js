// Let's iterate over lists and render them to the DOM.

// Example 1
// function App() {
//   const numbers = [1,2,3,4,5];

//   return (
//     <>
//    {numbers.map((number) => (
//      <ul key={Math.random()*10 }>
//       <li>{number}</li>
//     </ul>
//    ))}
//    </>
//   )
// }

// export default App


// Example 2
// function App() {
//   const userInfo = [
//     {
//       username: "Sarawut",
//       email: "sarawut@email.com",
//       location: "TH"
//     },
//     {
//       username: "Dev",
//       email: "dev@email.com",
//       location: "US"
//     },
//     {
//       username: "John",
//       email: "john@email.com",
//       location: "UK"
//     },
//   ]

//   return (
//     <>
//     {userInfo.map(user => (
//       <ul key={Math.random() * 10}>
//         <li>{user.username}</li>
//         <li>{user.email}</li>
//         <li>{user.location}</li>
//       </ul>
//     ))}
//     </>
//   )
// }

// export default App

// Example 3
import "./Shopping.css";

const Shopping = ({ items }) => {
  return (
    <section>
      <ol>
        {items.map((item) => (
          <li key={Math.random() * 5}>{item}</li>
        ))}
      </ol>
    </section>
  );
};

const App = () => {
  return (
    <section>
      <Shopping
        items={["Laptop", "Smart Phone", "Airpods", "Smart Watch"]}
      />
    </section>
  );
};

export default App;