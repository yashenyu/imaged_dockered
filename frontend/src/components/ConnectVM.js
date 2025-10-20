import React, { useState } from 'react';
import axios from 'axios';
import './ConnectVM.css';

const ConnectVM = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShowLogin = () => {
    setShowLoginForm(true);
    setErrorMessage('');
  };

  const handleCancelLogin = () => {
    setShowLoginForm(false);
    setCredentials({ username: '', password: '' });
    setErrorMessage('');
  };

  const connectToVM = async (e) => {
    e.preventDefault();
    setIsConnecting(true);
    setErrorMessage('');

    try {
      const response = await axios.post('/api/connect', {
        username: credentials.username,
        password: credentials.password
      });
      // Open the Guacamole client in a new tab
      window.open(response.data.clientUrl, '_blank');
      // Reset form after successful connection
      setShowLoginForm(false);
      setCredentials({ username: '', password: '' });
    } catch (error) {
      console.error('Connection error:', error);
      setErrorMessage(
        error.response?.data?.error || 
        error.response?.data?.details || 
        'Failed to connect. Please check your credentials and try again.'
      );
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <section id="connect" className="connect-vm section">
      <div className="container">
        <h2 className="section-title">Try It Yourself</h2>
        <p className="section-subtitle">
          Access the live demo environment
        </p>

        <div className="connect-content">
          <div className="connect-card">
            <div className="connect-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            
            <h3>Demo Environment</h3>
            <p>
              Access the ImAged system through our live demo environment.
            </p>

            {errorMessage && (
              <div className="error-message">
                <div className="error-icon">⚠</div>
                <div className="error-text">{errorMessage}</div>
              </div>
            )}

            {!showLoginForm ? (
              <>
                <button
                  className="btn btn-primary btn-large connect-btn"
                  onClick={handleShowLogin}
                >
                  Launch Demo Environment
                </button>

                <div className="connect-note">
                  <small>
                    Opens in new tab
                  </small>
                </div>
              </>
            ) : (
              <form onSubmit={connectToVM} className="login-form">
                <div className="form-group">
                  <label htmlFor="username">Guacamole Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                    placeholder="Enter username"
                    required
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Guacamole Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    required
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancelLogin}
                    disabled={isConnecting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`btn btn-primary ${isConnecting ? 'connecting' : ''}`}
                    disabled={isConnecting}
                  >
                    {isConnecting ? (
                      <>
                        <div className="loading"></div>
                        Connecting...
                      </>
                    ) : (
                      'Connect'
                    )}
                  </button>
                </div>

                <div className="connect-note">
                  <small>
                    Your credentials are used only for this session
                  </small>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectVM;