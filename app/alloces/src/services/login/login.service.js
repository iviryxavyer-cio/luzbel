import { authHeader} from "../../helpers/auth-header";
import gql from 'graphql-tag';
import {useApolloClient, useMutation} from "@apollo/react-hooks";

const loginQuery = gql`
    mutation LoginUsuario($user: String!, $pass: String!) {
        loginUsuario(user: $user contrasena: $pass) {
            token
        }
    }
`;
function login(username , password) {
    /*const client = useApolloClient()
    const [loginUsuario, { loading, error }] = useMutation(loginQuery, {
        onCompleted({ login }) {
            localStorage.setItem('token', login);
            client.writeData({data: {isLoggedIn: true}})
        }
    });*/
    console.log(username);
    console.log(password);
}

function logout() {
    console.log('Se mando llamar el logout')
}

const LoginService = {
    login,
    logout,
};

export default LoginService;
