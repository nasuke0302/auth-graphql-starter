import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import { login } from '../mutations/mutations';
import { currentUser } from '../queries/queries';
import AuthForm from './AuthForm';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [] };
    }

    handleSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: currentUser }],
        }).catch(error => {
            const errors = error.graphQLErrors.map(e => e.message);
            this.setState({ errors });
        });
    }

    componentWillUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('dashboard')
        }
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.handleSubmit.bind(this)}
                />
            </div>
        )
    }
}

export default graphql(currentUser)(graphql(login)(LoginForm));