import { useEffect, useReducer, useState } from "react";
import StudentForm from "./components/StudentForm";
import { studentReducer } from "./components/StudentReducer";
import StudentTable from "./components/StudentTable";
import "./index.css";

const App = () => {
  const [students, dispatch] = useReducer(studentReducer, [], () => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div className="app">
      <h1>Quản lý sinh viên</h1>
      <StudentForm dispatch={dispatch} editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
      <StudentTable students={students} dispatch={dispatch} setEditingStudent={setEditingStudent} />
    </div>
  );
};

export default App;
