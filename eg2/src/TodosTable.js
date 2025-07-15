const TodosTable = ({ todos }) => (
  <table border={1}>
    <thead>
      <tr>
        <th>ID</th>
        <th>USERID</th>
        <th>TITLE</th>
        <th>COMPLETED</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((row) => (
        <tr>
          <td>{row.id}</td>
          <td>{row.userId}</td>
          <td>{row.title}</td>
          <td>{row.completed.toString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TodosTable;
