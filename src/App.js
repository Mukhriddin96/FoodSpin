import { useState } from "react";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Spinner from "./components/spinner/Spinner";
import { foods } from "./data";
function App(props) {
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(2);

  const increment = (e) => {
    setCounter((p) => p + 1);
    if (index <= 0) {
      setIndex(9);
    } else {
      setIndex((p) => p - 1);
    }
  };

  const decrement = () => {
    setCounter((p) => p - 1);

    if (index >= 9) {
      setIndex(0);
    } else {
      setIndex((p) => p + 1);
    }
  };

  return (
    <section className="section-hero">
      <Navbar />
      <Spinner counter={counter} index={index} />
      <Info
        food={foods[index]}
        increment={increment}
        decrement={decrement}
        index={index}
      />
    </section>
  );
}

export default App;
