import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../img/img4.png'; // Adjust the path based on your folder structure
import videoSrc from '../img/vid2.mp4';
import logo from '../img/logo34.png'; // Adjust the path to your logo

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

        {/* Logo on Top of the Video */}
        <div
          style={{
            position: 'absolute',
            top: '3px', // Adjust the top distance for logo positioning
            left: '3px', // Adjust the left distance for logo positioning
            zIndex: '1', // Ensures the logo appears above the video
          }}
        >
          <img src={logo} alt="Logo" style={{ width: '110px', height: 'auto' }} /> {/* Adjust logo size */}
        </div>

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
              transition: 'all 0.3s ease',
            }}
          >
            RuralCare AI
          </h1>
          <p
            style={{
              fontSize: '1.7rem',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
              transition: 'all 0.3s ease',
            }}
          >
            Analysis and Unique Features for Traveling Doctors
          </p>
        </div>
      </div>

      {/* Navbar and Transparent Section */}
      <div>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '7rem', marginTop: '0rem' }}>
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
        </nav>
      </div>

      {/* Section with Background Image */}
      <div
        style={{
          padding: '2rem',
          textAlign: 'center',
          backgroundImage: `url(${image1})`,
          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2rem',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '900px',
            textAlign: 'center',
            marginBottom: '2rem',
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
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0056b3';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#007bff';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Get Started
            </button>
          </Link>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2rem',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '900px',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem' }}>Manage Patient Data</h2>
          <p>
            Click below to view and manage patient details, medical images, and diagnostic history.
          </p>
          <Link to="/patient-data">
            <button
              style={{
                backgroundColor: '#28a745',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#218838';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#28a745';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Get Started
            </button>
          </Link>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2rem',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '900px',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem' }}>Bone fracture detection</h2>
          <p>
            Click below to upload and analyze X-ray images for bone fractures. Our AI-powered system provides accurate diagnostics, highlights fracture details, and more....
          </p>
          <Link to="/imageai">
            <button
              style={{
                backgroundColor: '#D2691E',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#D2691E';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#D2691E';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Get Started
            </button>
          </Link>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2rem',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '900px',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem' }}>Get Nearest Hospital</h2>
          <p>
            Click below and Get the Nearest location of hospital that help to get the fast treatment to the patient 
          </p>
          <Link to="/HospitalLocator">
            <button
              style={{
                backgroundColor: '#0056b3',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0056b3';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#007bff';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '2rem',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '900px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem' }}>Connect With Doctor</h2>
          <p>
          Instantly connect with doctors for expert medical advice, quick consultations, and real-time health guidance anytime, anywhere with ease. Click below! 
          </p>
          <Link to="/ConectWithDoctor">
            <button
              style={{
                backgroundColor: '#0056b3',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0056b3';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#007bff';
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
