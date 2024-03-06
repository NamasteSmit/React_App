const Shimmer = () =>{

    return (
        <>

           <div className="shimmer">
           {  
                  Array(10).fill("").map((element,index)=>{
                     return (
                         <div className="shimmer-card" key={index}>
                              
                            
                        </div>
                     )
                  })
              }
           </div>
        
        </>
    )
}

export default Shimmer;