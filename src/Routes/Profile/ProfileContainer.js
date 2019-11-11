import React from "react";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_USER } from "./ProfileQueries";
import ProfilePresenter from "./ProfilePresenter";


export const LOG_OUT = gql`
    mutation logUserOut {
        logUserOut @client
    }
`;

export default withRouter(({ match: { params: { username } } }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { userName: username } });
    const logOut = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
});