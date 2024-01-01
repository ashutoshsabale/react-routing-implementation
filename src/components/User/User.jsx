import React from "react";
import { useParams } from "react-router-dom";

function User(){
      const {userId} = useParams()
      return (
            <div className="flex justify-center items-center bg-gray-700 text-white p-4 h-screen text-3xl">
                  User : {userId}
            </div>
      )
}

export default User