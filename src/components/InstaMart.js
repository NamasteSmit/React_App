import { useState } from "react"

const Section = ({title,description,isVisible,setIsVisible}) =>{
     return(
        <div className="insta-box">
           <h3>{title}</h3>
           {
              isVisible ? 
              <button className="insta-btn" onClick={()=>{
                setIsVisible(false);
              }}>Hide</button> 
              :
              <button className="insta-btn" onClick={()=>{
                setIsVisible(true);
              }}>show</button>
           } 
            
           {isVisible && <p>{description}</p>}
        </div>
      
    )
}


const InstaMart = () =>{
    const[visibleSection , setVisibleSection] = useState("about");
    return(
       <>
         <div className="insta-mart">
            <h1>InstaMart</h1>
            <Section title={"About InstaMart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?lit. Delectus, quas."}
            isVisible = {visibleSection === "about"}
            setIsVisible = {(e)=>{
               e ? setVisibleSection("about") : setVisibleSection("")
                
            }
                
            }
            />

            <Section title={"Team of InstaMart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas."}
            isVisible = {visibleSection === "Team"}
            setIsVisible = {(e)=> {
           
                e ? setVisibleSection("Team") : setVisibleSection("");
                  
            } }
            
            />

            <Section title={"Carrer of InstaMart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas."}
            isVisible = {visibleSection === "Carrer"}
            setIsVisible = {(e)=> {
                e ? setVisibleSection("Carrer"):setVisibleSection("")
            }}
           
            />

            <Section title={"Products of InstaMart"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error est consequatur minima rerum obcaecati quos, quasi quo, consectetur quas dolorem beatae modi laborum vero totam. Eum eius et at commodi numquam voluptatum officia vero porro ipsa, sint quod provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas."}
            isVisible = {visibleSection === "Products"}
            setIsVisible = {(e)=> {
                e ? setVisibleSection("Products") : setVisibleSection("")
            } }
            />

         </div>       
       </>
    )
}

export default InstaMart;
