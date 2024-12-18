import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import img4 from '../img/img5.jpg'; // Image import

function PatientData() {
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [patientDetails, setPatientDetails] = useState({
    email: '',
    password: '',
    name: '',
    mobile: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegistration = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, patientDetails.email, patientDetails.password);
      const userId = userCredential.user.uid;

      alert('Account created successfully!');
      navigate(`/information/${userId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, patientDetails.email, patientDetails.password);
      const userId = userCredential.user.uid;

      // Check if patient information exists
      const docRef = doc(db, 'patientDetails', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        alert('Login successful');
        navigate(`/information/${userId}`);
      } else {
        alert('No information found. Please complete your profile.');
        navigate(`/information/${userId}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundImage: `url(${img4})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          padding: '3rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h1 style={{ marginBottom: '2rem' }}>Patient {isNewPatient ? 'Registration' : 'Login'}</h1>
        {isNewPatient ? (
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={patientDetails.name}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={patientDetails.email}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={patientDetails.password}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={patientDetails.mobile}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
            <button onClick={handleRegistration} style={buttonStyle}>
              Register
            </button>
            <p>
              Already have an account?{' '}
              <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setIsNewPatient(false)}>
                Login
              </span>
            </p>
          </div>
        ) : (
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={patientDetails.email}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={patientDetails.password}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
            <button onClick={handleLogin} style={buttonStyle}>
              Login
            </button>
            <p>
              New Patient?{' '}
              <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setIsNewPatient(true)}>
                Register
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  boxSizing: 'border-box',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#4299e1',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginBottom: '16px',
};

export default PatientData;
