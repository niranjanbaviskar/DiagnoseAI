import React, { useState } from 'react';
import logo from '../img/zoom.png';

const doctors = [
  { id: 1, name: 'Dr. Samarth Joshi', specialization: 'Cardiologist' },
  { id: 2, name: 'Dr. Rohan Patil', specialization: 'Dermatologist' },
  { id: 3, name: 'Dr. Ajinkya Rane', specialization: 'Pediatrician' },
  { id: 4, name: 'Dr. Sandeep Kale', specialization: 'Orthopedic' },
  { id: 5, name: 'Dr. Vaibhav Mane', specialization: 'Neurologist' },
];

const ConnectWithDoctor = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setMessages([
      { text: `Hello, I am ${doctor.name}. How can I assist you today?`, sender: 'doctor' }
    ]); // Auto-message from doctor
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sender: 'patient' },
      ]);
      setInputMessage('');
      simulateDoctorReply();
    }
  };

  const simulateDoctorReply = () => {
    const replies = [
      "I'm here to help you!",
      "Can you tell me more about your symptoms?",
      "Let's discuss your treatment options.",
      "I recommend scheduling a follow-up.",
      "Don't worry, we'll get through this together.",
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: randomReply, sender: 'doctor' },
      ]);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Connect with a Doctor</h2>
      <div style={styles.doctorList}>
        {doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            style={{ ...styles.doctorCard, backgroundColor: styles.cardColors[index % styles.cardColors.length] }}
            onClick={() => handleDoctorSelect(doctor)}
          >
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <button style={styles.connectButton}>Connect</button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div style={styles.chatContainer}>
          <div style={styles.chatHeaderContainer}>
            <h3 style={styles.chatHeader}>Chat with {selectedDoctor.name}</h3>
            <div style={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
            </div>
          </div>
          <div style={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(msg.sender === 'patient' ? styles.patientMessage : styles.doctorMessage),
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              style={styles.input}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage} style={styles.sendButton}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFF8DC',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#007bff',
    textAlign: 'center',
  },
  doctorList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  doctorCard: {
    borderRadius: '10px',
    padding: '20px',
    width: '350px',
    hight: '350px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'transform 0.3s',
    color: 'white',
  },
  connectButton: {
    backgroundColor: '#E9967A',
    color: '#000000',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  chatContainer: {
    marginTop: '20px',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#E0FFFF',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  chatHeader: {
    color: '#007bff',
    textAlign: 'center',
  },
  messages: {
    maxHeight: '300px',
    overflowY: 'auto',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
  },
  message: {
    padding: '10px',
    borderRadius: '5px',
    margin: '5px 0',
    maxWidth: '75%',
  },
  patientMessage: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  doctorMessage: {
    backgroundColor: '#e3e3e3',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  sendButton: {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  chatHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'zoomInOut 2s infinite',
    backgroundColor: '#008B8B',
    // border: '1px',
    marginBottom: '12px',
    
  },
  logo: {
    width: '70%',
    height: '70%',
    objectFit: 'contain',
  },
  
  cardColors: ['#ff7675', '#74b9ff', '#55efc4', '#fdcb6e', '#a29bfe'],
  '@keyframes zoomInOut': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.2)' },
    '100%': { transform: 'scale(1)' },
  },
  '@global': {
    '@keyframes zoomInOut': {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.2)' },
      '100%': { transform: 'scale(1)' },
    },
    '.logoContainer': {
      animation: 'zoomInOut 5s infinite',
    },
  }
};


export default ConnectWithDoctor;
