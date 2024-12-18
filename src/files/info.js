import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Info() {
  const [infoDetails, setInfoDetails] = useState({
    age: '',
    weight: '',
    disease: '',
    yearStarted: '',
    mri: '',
    ctscan: '',
    sonography: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfoDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmission = async () => {
    try {
      const patientCollection = collection(db, 'patientDetails');
      await addDoc(patientCollection, infoDetails);
      alert('Information submitted successfully');
      navigate('/report');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Patient Information</h1>
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={infoDetails.age}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Weight"
        name="weight"
        value={infoDetails.weight}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Disease"
        name="disease"
        value={infoDetails.disease}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Year Disease Started"
        name="yearStarted"
        value={infoDetails.yearStarted}
        onChange={handleInputChange}
      />
      <input
        type="file"
        name="mri"
        onChange={(e) => setInfoDetails({ ...infoDetails, mri: e.target.files[0]?.name })}
      />
      <input
        type="file"
        name="ctscan"
        onChange={(e) => setInfoDetails({ ...infoDetails, ctscan: e.target.files[0]?.name })}
      />
      <input
        type="file"
        name="sonography"
        onChange={(e) => setInfoDetails({ ...infoDetails, sonography: e.target.files[0]?.name })}
      />
      <button onClick={handleSubmission}>Submit</button>
    </div>
  );
}

export default Info;
