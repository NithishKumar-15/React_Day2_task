import React from "react";

const data=[
    {
        title:"FREE",
        rate:"$0/month",
        featrures:[
            {title:"Single User", isValid:true},
            {title:"5GB Storage",isValid:true},
            {title:"Unlimited Public Projects",isValid:true},
            {title:"Community Access",isValid:true},
            {title:"Unlimited Private Projects",isValid:false},
            {title:"dedicated Phone Support",isValid:false},
            {title:"Free Subdomain",isValid:false},
            {title:"Monthly Status Report",isValid:false},
        ]
    },
    {
        title:"PLUS",
        rate:"$9/month",
        featrures:[
            {title:"5G User", isValid:true},
            {title:"50GB Storage",isValid:true},
            {title:"Unlimited Public Projects",isValid:true},
            {title:"Community Access",isValid:true},
            {title:"Unlimited Private Projects",isValid:true},
            {title:"dedicated Phone Support",isValid:true},
            {title:"Free Subdomain",isValid:true},
            {title:"Monthly Status Report",isValid:false},
        ]
    },
    {
        title:"PRO",
        rate:"$49/month",
        featrures:[
            {title:"Unlimited User", isValid:true},
            {title:"50GB Storage",isValid:true},
            {title:"Unlimited Public Projects",isValid:true},
            {title:"Community Access",isValid:true},
            {title:"Unlimited Private Projects",isValid:true},
            {title:"dedicated Phone Support",isValid:true},
            {title:"Free Subdomain",isValid:true},
            {title:"Monthly Status Report",isValid:true},
        ]
    }

]


let Card=function(){
    return(
        <div style={{background:"linear-gradient(to right, rgb(2,101,231) , rgb(49,171,254))",display:"flex",justifyContent:"space-around",padding:"20px",width:"1000px", margin:"100px",marginLeft:"300px"}}>
           {data.map((val,ind,ar)=>{
            return(
            <div key ={val.title} style={{backgroundColor:"rgb(255,255,255)", width:"300px",height:"500px",borderRadius:"10px"}}>
                <div style={{textAlign:"center"}}>
                    <p style={{color:"rgb(172,173,174)"}}>{val.title}</p>
                    <h1 style={{color:"rgb(33,36,42)"}}>{val.rate}</h1>
                </div>
                <hr style={{color:"rgb(237,237,237)"}}></hr>
                <div style={{padding:"10px"}}>
                    {val.featrures.map((val)=>{
                        return(     
                            <> 
                            {val.isValid&&<p key={val.title} style={{color:"rgb(116,113,112)"}}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"13px",marginRight:"10px"}}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            {val.title}</p> }  

                            {!val.isValid&&<p key={val.title} style={{color:"rgb(222,223,225)"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{width:"13px",marginRight:"10px",color:"rgb(222,223,225)"}}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            {val.title}</p> } 
                            </>
                        )
                    })}
                    <button style={{backgroundColor:"rgb(75,162,255)",borderStyle:"none",color:"rgb(238,251,255)", width:"270px",height:"40px", borderRadius:"20px",cursor:"pointer"}}>BUTTON</button>
                </div>               
             </div>
             )   
           })}
          
        </div>
    )
}

export default Card;