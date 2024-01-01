import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from 'react-router-dom';

function Github(){

      const data = useLoaderData()

      // const [data, setdata] = useState({})
      // useEffect(()=>{
      //       fetch("https://api.github.com/users/ashutoshsabale")
      //       .then(res=>res.json())
      //       .then(res=>setdata(res))
      // })

      return(
            <div className="flex flex-wrap px-10 py-20">
                  <div className="w-1/2 flex justify-end items-center px-5">
                        <div className="w-1/3 rounded-[45%_55%_45%_55%]">
                        <img
                              className="object-cover rounded-full"
                              src={data.avatar_url} alt="" />
                        </div>
                  </div>

                  <div className="w-1/2 flex flex-col justify-center px-5 text-2xl font-medium" >
                        <h1>Name : {data.name}</h1>
                        <h1>Username : {data.login}</h1>
                        <h1>Followers : {data.followers}</h1>
                        <h1>ID : {data.id}</h1>
                        <Link to={data.html_url} target="_blank"><h1>URL : {data.html_url}</h1></Link>

                  </div>
            </div>
      )
}

export default Github


export const gitHubinfoLoader = async () =>{
      const response = await fetch('https://api.github.com/users/ashutoshsabale')
      return response.json()
}