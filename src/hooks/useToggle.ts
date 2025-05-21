import { useState } from "react";

export default function useToggle() {
  const [state, setState] = useState(false);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  const toggle = () => {
    setState((prev) => !prev);
  };

  return {
    state,
    setTrue,
    setFalse,
    toggle,
  };
}
