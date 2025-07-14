export default function StudentTable({students,color}) {//instead of using props everywhere u can make use of {property]}
  if (students) {
    if (students.length > 0) {
      return (
        <div>
          <table style={{backgroundColor:color}} border={1}>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <div>No data</div>;
  } else {
    return <div>No data</div>;
  }
}
