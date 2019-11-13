import AppolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new AppolloClient({
    uri:
        process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://mistygram-backend.herokuapp.com/",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});