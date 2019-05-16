import React from 'react'
import { connect } from 'react-redux';
import { login } from '../actions';
import Loader from 'react-loader-spinner';
import './Login.css'


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials)
        this.props.login(this.state.credentials)
        console.log(this.props.history)
        window.location='/protected';
      };

    render() {
        return (
            <div>
                <div className="login-container">
                    <h1>Login Form</h1>
                    <form className="form" onSubmit={this.login}>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                        <button>
                            {this.props.isLoggingIn ? (
                                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                            ) : (
                                    'Submit'
                                )}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});

export default connect(
    mapStateToProps,
    { login }
)(Login);