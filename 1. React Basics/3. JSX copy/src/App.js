// ********** JSX RULES **********

// 1. Return a single root element
// To return multiple elements from a component, wrap them with a single parent tag.

// ERROR
// const App = () => {
//     return (
//         <section id="section">
//         </section>
//         <h1>Welcome To React</h1> ***
//       );
// }

// 2. Close all the tags
// JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

// Error
// const App = () => {
//     return (
//         <section id="section">
//           <img > 
//         </section>
//       );
// }

// 3. className
// open your DevTools and read the error message
// const App = () => {
//   return (
//     <section class="section">
//         {/* class => className */}
//       <h1 class="title">Hello React World.</h1>
//        {/* class => className */}
//     </section>
//   );
// };

// 4. forHTML
// open your DevTools and read the error message
const App = () => {
  return (
    <section class="section">
      <form>
        <label for="name">Name</label>
         {/* for => HTMLfor */}
        <input type="text" placeholder="Enter Your Name" id="name" />
        {/* class => className */}
      </form>
    </section>
  );
};

export default App;