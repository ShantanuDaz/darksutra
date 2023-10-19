import React, { useEffect } from "react";
import { pocketBase } from "../../api/pocketbase";

export default function Home() {
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const pb = await pocketBase().getPbConn();
      const records = await pb.collection("Category").getFullList({
        sort: "-created",
      });
      console.log(records);
    } catch (error) {
      if (error.message === "Token expired") {
        await pocketBase().refreshToken();

        // Reattempt to fetch records after refreshing the token
        const records = await pb
          .collection("Category")
          .getFullList({ sort: "-created" });
        console.log(records);
        // return records;
      } else {
        throw error;
      }
    }
  };

  return <div>Home</div>;
}
