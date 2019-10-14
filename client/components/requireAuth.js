import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router';

import { currentUser } from '../queries/queries';

export default (WrapperComponent) => {
    class RequireAuth extends Component {
        componentWillUpdate(nextProps) {
            if (!nextProps.data.loading && !nextProps.data.user) {
                hashHistory.push('/login');
            }
        }

        render() {
            return <WrapperComponent {...this.props} />
        }
    }

    return graphql(currentUser)(RequireAuth);
}