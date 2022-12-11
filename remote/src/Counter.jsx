import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);
  return (
    <div className="flex justify-center items-center  flex-col ">
      <div>Count {count()}</div>
      <button onClick={() => setCount(count() + 1)}>Add more </button>
    </div>
  );
};
