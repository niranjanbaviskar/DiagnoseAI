import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';

function Report() {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = auth.currentUser.uid;
        const userDoc = doc(db, 'patientDetails', userId);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setPatientData(docSnap.data());
        } else {
          alert('No data found');
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Patient Report</h1>
      {patientData ? (
        <div>
          <p>Age: {patientData.age}</p>
          <p>Weight: {patientData.weight}</p>
          <p>Disease: {patientData.disease}</p>
          <p>Year Started: {patientData.yearStarted}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Report;
