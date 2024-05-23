// 👉 https://react-icons.github.io/react-icons
// 👉 npm install react-icons --save

import { FcBusinessman, FcCloseUpMode, FcMms } from "react-icons/fc";
import { BiAlarm, BiBriefcaseAlt } from "react-icons/bi";

function App() {
  return (
    <div>
      <ul>
        <li><FcBusinessman /></li>
        <li><FcCloseUpMode /></li>
        <li><FcMms /></li>
      </ul>
      <ul>
        <li><BiAlarm /></li>
        <li><BiBriefcaseAlt /></li>
      </ul>
    </div>
  );
}

export default App;
