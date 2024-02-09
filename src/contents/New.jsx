import React, { useState } from 'react';

const New = () => {

    const [news, setNew] = useState('');
    const [select, setSelect] = useState('')

    return (
        <div>
            <span>Fundoo</span>
            <input type="text" placeholder='Name' name='user' value={news}  onChange={(e)=>{setNew(e.target.value)}}/>
            <button onClick={()=>setSelect("change")}>select</button>
            <span>{select}</span>
        </div>
    );
}

export default New;
