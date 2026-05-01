import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const StudentForm = ({ onClose, onSave, studentToEdit }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    major: '',
    year: '1st Year',
    status: 'Active'
  });

  useEffect(() => {
    if (studentToEdit) {
      setFormData(studentToEdit);
    } else {
      setFormData({
        id: 'STU-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
        name: '',
        email: '',
        major: '',
        year: '1st Year',
        status: 'Active'
      });
    }
  }, [studentToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{ margin: 0 }}>{studentToEdit ? 'Edit Student' : 'Add New Student'}</h2>
          <button className="btn-icon btn-ghost" onClick={onClose} type="button">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label" htmlFor="id">Student ID</label>
              <input 
                type="text" 
                id="id" 
                name="id" 
                className="form-input" 
                value={formData.id} 
                readOnly 
                style={{ opacity: 0.7, cursor: 'not-allowed' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Jane Doe"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="jane.doe@university.edu"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="major">Major / Course</label>
              <input 
                type="text" 
                id="major" 
                name="major" 
                className="form-input" 
                value={formData.major} 
                onChange={handleChange} 
                required 
                placeholder="Computer Science"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="year">Year of Study</label>
                <select 
                  id="year" 
                  name="year" 
                  className="form-select" 
                  value={formData.year} 
                  onChange={handleChange}
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Graduate">Graduate</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="status">Status</label>
                <select 
                  id="status" 
                  name="status" 
                  className="form-select" 
                  value={formData.status} 
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Graduated">Graduated</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {studentToEdit ? 'Save Changes' : 'Add Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
