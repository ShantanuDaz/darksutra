import PocketBase from "pocketbase";

//Initializing pocketbase
const pb = new PocketBase(import.meta.env.VITE_PB_URL);

export const pocketBase = () => {
  //Function to get pocketbase connection and setting authToken in authStore
  async function getPbConn() {
    const authData = await pb
      .collection("users")
      .authWithPassword(
        import.meta.env.VITE_PB_USERNAME,
        import.meta.env.VITE_PB_PASSWORD
      );

    // Saving the token in the authStore
    pb.authStore.save(authData.token, null);

    return pb;
  }

  //Function to refresh authToken
  async function refreshToken() {
    const newToken = await pb.collection("users").authRefresh();

    // Saving the token in the authStore
    pb.authStore.save(newToken, null);
  }

  return {
    getPbConn,
    refreshToken,
  };
};
