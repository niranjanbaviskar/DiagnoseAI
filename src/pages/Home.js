import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../img/img2.jpg'; // Adjust the path based on your folder structure
import videoSrc from '../img/vid2.mp4'; // Import video

function Home() {
  return (
    <div style={{ margin: '0', padding: '0', fontFamily: 'Arial, sans-serif', height: '100vh', overflow: 'auto' }}>
      {/* Top Section with Video Background */}
      <div style={{ position: 'relative', height: '30vh', width: '100%' }}>
        {/* Background Video */}
        <video
  autoPlay
  loop
  muted
  style={{
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
    filter: 'blur(8px)',
  }}
>
  <source src={videoSrc} type="video/mp4" />
  Your browser does not support the video tag.
</video>

        {/* Heading Overlay */}
        <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '5rem',
            margin: '0',
            textShadow: '4px 4px 6px rgba(255, 248, 220, 0.8), -2px -2px 6px rgba(0, 0, 0, 0.9)',
            transition: 'all 0.3s ease', // Transition for gesture effect
          }}
        >
          DiagnoseAI
        </h1>
        <p
          style={{
            fontSize: '1.7rem',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
            transition: 'all 0.3s ease', // Transition for gesture effect
          }}
        >
          Precision Diagnosis, Powered by Intelligence
        </p>
      </div>

      {/* CSS for Hover Gesture */}
      <style>
        {`
        //   h1:hover {
        //     transform: scale(1.1); /* Slightly enlarge the text */
        //     color: #007bff; /* Change text color on hover */
        //   }

          p:hover {
            transform: scale(1.05); /* Slightly enlarge the text */
            color: #ff6347; /* Change text color on hover */
          }
        `}
      </style>
    </div>

      {/* Navbar and Transparent Section */}
      <div
        // style={{
        //   backgroundColor: 'rgba(255, 255, 255, 0.8)',
        //   padding: '1rem',
        //   boxShadow: '0px -4px 10px rgba(0,0,0,0.2)',
        //   position: 'sticky',
        //   top: '0',
        // }}
      >
        <nav style={{ display:'flex', justifyContent: 'center', gap: '7rem', marginTop: '0rem' }}>
  <Link
    to="/"
    style={{
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '0.5rem 1rem',
      border: '2px solid lightgrey',
      borderRadius: '5px',
      backgroundColor: 'rgba(211, 211, 211)',
      transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.backgroundColor = '#007bff';
      e.target.style.color = 'white';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.backgroundColor = 'rgba(211, 211, 211)';
      e.target.style.color = 'black';
    }}
  >
    Home
  </Link>
  <Link
    to="/about"
    style={{
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '0.5rem 1rem',
      border: '2px solid lightgrey',
      borderRadius: '5px',
      backgroundColor: 'rgba(211, 211, 211)',
      transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.backgroundColor = 'green';
      e.target.style.color = 'white';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.backgroundColor = 'rgba(211, 211, 211)';
      e.target.style.color = 'black';
    }}
  >
    About
  </Link>
  <Link
    to="/add-yourself"
    style={{
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '0.5rem 1rem',
      border: '2px solid lightgrey',
      borderRadius: '5px',
      backgroundColor: 'rgba(211, 211, 211)',
      transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.backgroundColor = 'red';
      e.target.style.color = 'white';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.backgroundColor = 'rgba(211, 211, 211)';
      e.target.style.color = 'black';
    }}
  >
    Contact Us
  </Link>
  {/* <Link
    to="/patient-data"
    style={{
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '0.5rem 1rem',
      border: '2px solid black',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.backgroundColor = 'black';
      e.target.style.color = 'white';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
      e.target.style.color = 'black';
    }}
  >
    Patient Dat
  </Link> */}
</nav>

      </div>

      {/* Section with Background Image */}
      <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundImage: `url(${image1})`, // Set background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        minHeight: '60vh', // Full-screen height for the section
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      {/* Semi-Transparent Overlay for Text */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with 60% opacity
          padding: '2rem',
          borderRadius: '10px',
          width: '80%',
          maxWidth: '900px',
          textAlign: 'center',
          marginBottom: '2rem', // Space between boxes
        }}
      >
        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem' }}>Welcome to HealthCare AI</h2>
        <p>
        Click below and ask your health-related questions. Our AI is here to provide quick and accurate answers to guide you through your healthcare concerns.
        </p>
        <Link to="/upload-analyze">
          <button
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for the button
              transition: 'transform 0.3s ease, background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0056b3'; // Darker blue on hover
              e.target.style.transform = 'scale(1.05)'; // Slight scaling effect
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#007bff'; // Reset background color
              e.target.style.transform = 'scale(1)';
            }}
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Patient Section */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with 60% opacity
          padding: '2rem',
          borderRadius: '10px',
          width: '80%',
          maxWidth: '900px',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem'  }}>Manage Patient Data</h2>
        <p>
          Click below to view and manage patient details, medical images, and diagnostic history.
        </p>
        <Link to="/patient-data">
          <button
            style={{
              backgroundColor: '#28a745', // Green button
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for the button
              transition: 'transform 0.3s ease, background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#218838'; // Darker green on hover
              e.target.style.transform = 'scale(1.05)'; // Slight scaling effect
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#28a745'; // Reset background color
              e.target.style.transform = 'scale(1)';
            }}
          >
            Get Started
          </button>
        </Link>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with 60% opacity
          padding: '2rem',
          borderRadius: '10px',
          width: '80%',
          maxWidth: '900px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem'  }}>Bone fracture detection</h2>
        <p>
        Click below to upload and analyze X-ray images for bone fractures. Our AI-powered system provides accurate diagnostics, highlights fracture details and more....
        </p>
        <Link to="/imageai">
          <button
            style={{
              backgroundColor: '#D2691E', // Green button
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for the button
              transition: 'transform 0.3s ease, background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#D2691E'; // Darker green on hover
              e.target.style.transform = 'scale(1.05)'; // Slight scaling effect
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#D2691E'; // Reset background color
              e.target.style.transform = 'scale(1)';
            }}
          >
            Get Started
          </button>
        </Link>
      </div>

    </div>
    
    

     
     </div>
     
     

  );
  
}

export default Home;
