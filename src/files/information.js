import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

function Info() {
  const { userId } = useParams();
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [disease, setDisease] = useState('');
  const [durationofDisease, setDurationofDisease] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [mri, setMri] = useState('');
  const [ctscan, setCtscan] = useState('');
  const [sonography, setSonography] = useState('');
  const [bloodTestReport, setBloodTestReport] = useState('');
  const [previousDrReceipt, setPreviousDrReceipt] = useState('');
  const [billingInformationReceipt, setBillingInformationReceipt] = useState('');
  const [qrData, setQrData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'patientDetails', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setAge(data.age);
        setWeight(data.weight);
        setDisease(data.disease);
        setDurationofDisease(data.durationofDisease);
        setBloodPressure(data.BloodPressure);
        setMedicalHistory(data.MedicalHistory);
        setMri(data.mri);
        setCtscan(data.ctscan);
        setSonography(data.sonography);
        setBloodTestReport(data.BloodTestReport);
        setPreviousDrReceipt(data.PriviousDrRecipt);
        setBillingInformationReceipt(data.BillingInformationRecipt);
        setQrData(JSON.stringify(data));
      }
    };
    fetchData();
  }, [userId]);

  const handleSubmission = async () => {
    try {
      const userId = auth.currentUser.uid;
      const infoDetails = {
        age, weight, disease, durationofDisease,
        BloodPressure: bloodPressure, MedicalHistory: medicalHistory,
        mri, ctscan, sonography,
        BloodTestReport: bloodTestReport,
        PriviousDrRecipt: previousDrReceipt,
        BillingInformationRecipt: billingInformationReceipt,
      };
      await setDoc(doc(collection(db, 'patientDetails'), userId), infoDetails);
      alert('Information submitted successfully!');
      setQrData(JSON.stringify(infoDetails));
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '1.5rem', textAlign: 'center', minHeight: '90vh', backgroundColor: '#ADD8E6' }}>
      <h1>Patient Information</h1>
      {[['Age', age, setAge], ['Weight', weight, setWeight], ['Disease', disease, setDisease],
        ['Duration of Disease', durationofDisease, setDurationofDisease],
        ['Blood Pressure', bloodPressure, setBloodPressure],
        ['Medical History', medicalHistory, setMedicalHistory],
        ['MRI Report Link', mri, setMri], ['CT Scan', ctscan, setCtscan], ['Sonography', sonography, setSonography],
        ['Blood Test Report Link', bloodTestReport, setBloodTestReport],
        ['Previous Dr. Receipt Link', previousDrReceipt, setPreviousDrReceipt],
        ['Billing Information Receipt Link', billingInformationReceipt, setBillingInformationReceipt]
      ].map(([label, value, setter], index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <h4>{label}</h4>
          <input
            type="text"
            placeholder={`Enter ${label}`}
            value={value}
            onChange={(e) => setter(e.target.value)}
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
      ))}
      <button onClick={handleSubmission} style={{ padding: '0.75rem 2rem', cursor: 'pointer' }}>Save</button>
      {qrData && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Your QR Code:</h3>
          <QRCodeCanvas value={qrData} size={256} />
        </div>
      )}
    </div>
  );
}

export default Info;
