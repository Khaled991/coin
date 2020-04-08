import React from 'react';


/**
 * Fetch error helper
 * 
 * @param {object} response 
 */



export const handleRespons = (response) =>{
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
        });
}

export const renderChange = (percent)=>{
    if(percent > 0) {
    return <span className='percent-raised'>{percent}% &uarr;</span>
    }else if(percent < 0){
    return <span className='percent-fallen'>{percent}% &uarr;</span>
    }else{
        return<span>percent</span>
    }

}
