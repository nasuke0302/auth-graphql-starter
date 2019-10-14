import gql from 'graphql-tag';

export const currentUser = gql`
    {
        user {
            id
            email
        }
    }
`;