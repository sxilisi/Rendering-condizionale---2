import Age from "./Age";

export default function Welcome({ name, age }) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <Age age={age} />
    </div>
  );
}
