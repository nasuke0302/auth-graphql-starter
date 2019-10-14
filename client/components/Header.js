import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { currentUser } from '../queries/queries'
import { logout } from '../mutations/mutations'

class Header extends Component {

    handleClick() {
        this.props.mutate({
            refetchQueries: [{ query: currentUser }],
        });
    }

    renderButtons() {
        const { loading, user } = this.props.data;

        if (loading) { return <div></div> };

        if (user) {
            return <li><a onClick={this.handleClick.bind(this)}>Logout</a></li>
        } else {
            return (
                <div>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </div>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo left'>Home</Link>
                    <ul className='right'>
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default graphql(logout)(graphql(currentUser)(Header));