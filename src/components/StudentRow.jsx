import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const StudentRow = ({ student, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{student.id}</td>
      <td style={{ fontWeight: 500 }}>{student.name}</td>
      <td style={{ color: 'var(--text-secondary)' }}>{student.email}</td>
      <td>{student.major}</td>
      <td>{student.year}</td>
      <td>
        <span className={`badge ${student.status === 'Active' ? 'badge-active' : 'badge-inactive'}`}>
          {student.status}
        </span>
      </td>
      <td>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            className="btn-icon btn-ghost" 
            style={{ color: 'var(--accent-primary)' }}
            onClick={() => onEdit(student)}
            title="Edit Student"
          >
            <Edit2 size={18} />
          </button>
          <button 
            className="btn-icon btn-ghost" 
            style={{ color: 'var(--danger-color)' }}
            onClick={() => onDelete(student.id)}
            title="Delete Student"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
