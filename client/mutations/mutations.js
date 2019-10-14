import gql from 'graphql-tag';

export const logout = gql`
    mutation {
        logout {
            id
            email
        }
    }
`;

export const login = gql`
mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
        id
        email
    }
}`;

export const signup = gql`
mutation signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
        id
        email
    }
}`;