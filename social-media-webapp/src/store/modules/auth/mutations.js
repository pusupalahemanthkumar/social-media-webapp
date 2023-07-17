export default{
    setUser(state,payload){
        console.log("user",payload);
        state.user = payload;
    }
}