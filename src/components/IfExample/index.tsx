/*
 * @Date: 2023-06-30 15:05:35
 * @LastEditors: kenan
 * @LastEditTime: 2023-06-30 17:02:39
 */
import React from 'react'
function Test(){
    return <div>test</div>
}
const index=()=>{
    const auth=false;
    return(
        <div>
            {!auth && <Test />}
        </div>
    )

    
        // return (
        //     <div className="index">
        //        {auth?'认证通过':'认证不通过'}
        //     </div>
        // );

        // if(auth) return(<div>认证通过</div>)
        // return (<div>认证不通过</div>)

        



    }
export default index;