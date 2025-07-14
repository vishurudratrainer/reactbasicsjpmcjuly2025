export default function StudentTable(props) {
  if (props.students) {
    if (props.students.length > 0) {
      return (
        <table border={1}>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((student) => (
              <tr>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return (<div>No data</div>)
  }
  else
  {
        return (<div>No data</div>)

  }
}
