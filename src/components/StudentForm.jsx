import { useEffect, useRef, useState } from "react";

const StudentForm = ({ dispatch, editingStudent, setEditingStudent }) => {
  const [name, setName] = useState("");
  const [scores, setScores] = useState({ math: "", physics: "", english: "" });
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setScores(editingStudent.scores);
    } else {
      setName("");
      setScores({ math: "", physics: "", english: "" });
    }
  }, [editingStudent]);

  const handleSubmit = e => {
    e.preventDefault();
    const scoreValues = Object.values(scores).map(Number);

    // Kiểm tra nếu điểm không hợp lệ
    if (scoreValues.some(score => score < 0 || score > 10 || isNaN(score))) {
      setError("Điểm phải từ 0 đến 10");
      return;
    }
    setError(null);

    const newStudent = {
      id: editingStudent ? editingStudent.id : Date.now(),
      name,
      scores,
      avg: (scoreValues.reduce((a, b) => a + b, 0) / 3).toFixed(2),
    };

    if (editingStudent) {
      dispatch({ type: "EDIT", payload: newStudent });
      setEditingStudent(null);
    } else {
      dispatch({ type: "ADD", payload: newStudent });
    }

    setName("");
    setScores({ math: "", physics: "", english: "" });
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Tên sinh viên"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      {["math", "physics", "english"].map(subject => (
        <input
          key={subject}
          type="number"
          placeholder={subject}
          value={scores[subject]}
          min="0"
          max="10"
          required
          onChange={e => setScores(prev => ({ ...prev, [subject]: e.target.value }))}
        />
      ))}
      <button id="add" type="submit">{editingStudent ? "Cập nhật" : "Thêm"}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default StudentForm;
