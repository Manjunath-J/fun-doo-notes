import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const [news, setNew] = useState("");
  const [select, setSelect] = useState("");
  let time;

  const navigate = useNavigate();

    const handleNavigate= ()=>{
        navigate("/hello")
    }



  useEffect(() => {
    const fetchData = async () => {
      print();
    };
    fetchData();
    return clearInterval(time)
  }, []);

  const print = async () => {
   
         time=await setInterval(() => {
            console.log('a');
          },1000)

  };

  

  return (
    <div>
      <h1 >Fundoo</h1>
      <input
        type="text"
        placeholder="Name"
        name="user"
        value={news}
        onChange={(e) => {
          setNew(e.target.value);
        }}
      />
      <button onClick={handleNavigate}>select</button>
      <span>{select}</span>
    </div>
  );
};

export default New;
