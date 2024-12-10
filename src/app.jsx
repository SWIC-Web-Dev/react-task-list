import useFetch from "./use-fetch";

export default function App() {
  const tasks = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <main>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </main>
  );
}
