import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function Info() {
  const { userId } = useParams();
  const [infoDetails, setInfoDetails] = useState({
    age: '',
        weight: '',
        disease: '',
        durationofDisease: '',
        BloodPressure: '',
        MedicalHistory: '',
        mri: '',
        ctscan: '',
        sonography: '',
        BloodTestReport: '',
        PriviousDrRecipt: '',
        BillingInformationRecipt: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'patientDetails', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setInfoDetails(docSnap.data());
      }
    };

    fetchData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfoDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmission = async () => {
    try {
      const userId = auth.currentUser.uid; // Get the logged-in user's UID
      const patientCollection = collection(db, 'patientDetails');
      const userDoc = doc(patientCollection, userId); // Create/Update document with userId as the key
      await setDoc(userDoc, infoDetails); // Save infoDetails object
      alert('Information submitted successfully!');
      setInfoDetails({
        age: '',
        weight: '',
        disease: '',
        durationofDisease: '',
        BloodPressure: '',
        MedicalHistory: '',
        mri: '',
        ctscan: '',
        sonography: '',
        BloodTestReport: '',
        PriviousDrRecipt: '',
        BillingInformationRecipt: '',

      }); // Reset the form
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{  padding: '1.5rem',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #d4fc79, #96e6a1)',
      // backgroundColor: '#00ff00', // Light gray background for the whole form
      minHeight: '90vh', }}>
      <h1 style={{ color: 'black', fontSize: '3rem' }}>Patient Information</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          margin: '2rem 0',
        }}
      >
        {[
          { label: 'Age', type: 'number', name: 'age', value: infoDetails.age },
          { label: 'Weight', type: 'number', name: 'weight', value: infoDetails.weight },
          { label: 'Disease', type: 'text', name: 'disease', value: infoDetails.disease },
          { label: 'Duration of Disease(days)', type: 'text', name: 'durationofDisease', value: infoDetails.durationofDisease },
          { label: 'Blood Pressure', type: 'number', name: 'Bloodpressure', value: infoDetails.Bloodpressure },
          { label: 'Medical History', type: 'text', name: 'Medicalhistory', value: infoDetails.Medicalhistory },
        ].map((field, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFB6C1',
              border: '1px solid #ddd',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ color: 'black', marginBottom: '0.5rem' }}>{field.label}</h4>
            <input
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={handleInputChange}
              style={{
                width: '90%',
                padding: '0.5rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
          </div>
        ))}
        {[
  { label: 'MRI', name: 'mri' },
  { label: 'CT Scan', name: 'ctscan' },
  { label: 'Sonography', name: 'sonography' },
  { label: 'Blood Test Report', name: 'Blood Test Report' },
  { label: 'Privious Dr. Recipt', name: 'Privious Dr. Recipt' },
  { label: 'Billing Information Recipt', name: 'Billing Information Recipt' },
].map((field, index) => (
  <div
    key={index}
    style={{
      backgroundColor: '#87CEFA',
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '8px',
    }}
  >
    <h4 style={{ color: 'black', marginBottom: '0.5rem' }}>{field.label}</h4>
    <input
      type="url"
      placeholder={`Enter ${field.label} link`}
      name={field.name}
      value={infoDetails[field.name]}
      onChange={(e) =>
        setInfoDetails((prev) => ({
          ...prev,
          [field.name]: e.target.value,
        }))
      }
      style={{
        width: '90%',
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        
      }}
    />
  </div>
))}

      </div>
      <button
        onClick={handleSubmission}
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Info;
