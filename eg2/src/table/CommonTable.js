const CommonTable = ({ columns, data }) => (
  <table border={1}>
    <tr>
      {columns.map((column) => (
        <th>{column}</th>
      ))}
    </tr>
    {data.map((row) => (
      <tr>
        {columns.map((column) => (
          <td>{row[column]}</td>
        ))}
      </tr>
    ))}
  </table>
);
export default CommonTable