import { Component } from 'react';

class LoginStatus extends Component {
  state = {
      isLoggedIn: false,
    };

  toggleLoginStatus = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
      const loginText = 'Login', logoutText = 'Logout', welcomeMessage = 'Welcome, User!';

    const buttonStyle = {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: this.state.isLoggedIn ? '#ff6961' : '#4CAF50',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '1em',
    };

    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {this.state.isLoggedIn ? (
          <div>
            <h3>{welcomeMessage}</h3>
            <button style={buttonStyle} onClick={this.toggleLoginStatus}>
              {logoutText}
            </button>
          </div>
        ) : (
          <button style={buttonStyle} onClick={this.toggleLoginStatus}>
            {loginText}
          </button>
        )}
      </div>
    );
  }
}

export default LoginStatus;
