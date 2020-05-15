import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    getUser{
        name
        username
        email
      }
  }
`

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser ( input: { email: $email, password: $password }){
        token
    }
}
  `

export const VIEW_USERS = gql`
  query ($id: Int){
    getUserInfo(id: $id) {
      id,
      name,
      job_title,
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($name: String!, $username: String!, $email: String!, $password: String!) {
    createUser ( input: {name: $name, username: $username, email: $email, password: $password }){
        name
    }
  }
`