import { useMemo } from "react";

const StudentTable = ({ students, dispatch, setEditingStudent }) => {
  const classAverage = useMemo(() => {
    if (students.length === 0) return 0;
    const totalAvg = students.reduce((sum, student) => sum + parseFloat(student.avg), 0);
    return (totalAvg / students.length).toFixed(2);
  }, [students]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Toán</th>
            <th>Lý</th>
            <th>Anh</th>
            <th>Điểm TB</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.scores.math}</td>
              <td>{student.scores.physics}</td>
              <td>{student.scores.english}</td>
              <td>{student.avg}</td>
              <td>
                <button onClick={() => setEditingStudent(student)}>Sửa</button>
                <button onClick={() => dispatch({ type: "DELETE", payload: student.id })}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Điểm trung bình lớp: {classAverage}</h3>
    </div>
  );
};

export default StudentTable;
