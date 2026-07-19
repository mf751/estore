import { useStore } from "./store";

export default function App() {
  const { state, dispatch } = useStore();
  return <div>{state.mode}</div>;
}
