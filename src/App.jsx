import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';

const App = () => {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('studentRecords');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 'STU-1001', name: 'Alex Johnson', email: 'alex.j@university.edu', major: 'Computer Science', year: '3rd Year', status: 'Active' },
      { id: 'STU-1002', name: 'Sarah Williams', email: 's.williams@university.edu', major: 'Business Admin', year: '2nd Year', status: 'Active' },
      { id: 'STU-1003', name: 'Michael Chen', email: 'm.chen@university.edu', major: 'Engineering', year: '4th Year', status: 'Inactive' },
    ];
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('studentRecords', JSON.stringify(students));
  }, [students]);

  const handleAddStudent = () => {
    setStudentToEdit(null);
    setIsFormOpen(true);
  };

  const handleEditStudent = (student) => {
    setStudentToEdit(student);
    setIsFormOpen(true);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleSaveStudent = (studentData) => {
    if (studentToEdit) {
      setStudents(students.map(s => s.id === studentData.id ? studentData : s));
    } else {
      setStudents([...students, studentData]);
    }
    setIsFormOpen(false);
  };

  const activeStudents = students.filter(s => s.status === 'Active').length;

  return (
    <div className="app-container">
      <Header />
      
      <div className="dashboard-stats">
        <div className="glass-panel stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
            <Users size={20} />
            <span className="stat-title">Total Students</span>
          </div>
          <span className="stat-value">{students.length}</span>
        </div>
        
        <div className="glass-panel stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success-color)' }}>
            <GraduationCap size={20} />
            <span className="stat-title">Active Students</span>
          </div>
          <span className="stat-value">{activeStudents}</span>
        </div>

        <div className="glass-panel stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}>
            <BookOpen size={20} />
            <span className="stat-title">Majors</span>
          </div>
          <span className="stat-value">{new Set(students.map(s => s.major)).size}</span>
        </div>
        
        <div className="glass-panel stat-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ec4899' }}>
            <Award size={20} />
            <span className="stat-title">Graduating Year</span>
          </div>
          <span className="stat-value">{students.filter(s => s.year === '4th Year' || s.year === 'Graduate').length}</span>
        </div>
      </div>

      <StudentList 
        students={students} 
        onAdd={handleAddStudent} 
        onEdit={handleEditStudent} 
        onDelete={handleDeleteStudent} 
      />

      {isFormOpen && (
        <StudentForm 
          onClose={() => setIsFormOpen(false)} 
          onSave={handleSaveStudent}
          studentToEdit={studentToEdit}
        />
      )}
    </div>
  );
};

export default App;
