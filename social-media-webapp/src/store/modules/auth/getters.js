export default{
    getUser(state){
        return state.user;
    },
    isAuthenticated(state){
        return state.user != null;
    }
}