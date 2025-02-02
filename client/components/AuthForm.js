import React, { Component } from 'react'

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: '' };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className='row'>
                <form
                    className='col s4'
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <div className='input-field'>
                        <input
                            placeholder='Email'
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className='input-field'>
                        <input
                            placeholder='Password'
                            type='password'
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div className='errors'>
                        {this.props.errors.map(e => <div key={e}>{e}</div>)}
                    </div>

                    <button className='btn'>Submit</button>
                </form>
            </div>
        );
    };
};

export default AuthForm;