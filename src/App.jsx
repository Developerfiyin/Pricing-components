import "./App.css";
import image from "./assets/bg-top.svg";
import image1 from "./assets/bg-bottom.svg";
function App() {
  return (
    <>
      <section className=" bg-gray-100 min-h-screen  ">
        <div className=" ">

{/* THE DIV WITH PRICING AND BUTTONS IS BELOW THIS COMMENT */}
          <div className="flex flex-col items-center justify-center gap-6"> 

            <h2 className=" text-3xl font-semibold text-gray-600 "> Our Pricing </h2>

            <div className="flex gap-4"> 

           <button> Annually</button>
           <div className="flex justify-center gap-2 bg-gray-300"> 
          <button className="w-9 h-9 bg-gray-300 rounded-lg"> 
          <button className="w-5 h-5 bg-red-500 rounded-full ">  </button>
    
          </button>
           </div>

            </div>
             </div>
          {" "}
          {/* THE PARENT DIV For the images  */} 
          <div>  

       
          <div className="  ">
            <img
              src={image1}
              alt="Background Bottom Left Image"
              className="fixed left-0 bottom-0 w-70 h-auto "
            /> 
                </div>

      
            <div>
              <img
                src={image}
                alt="Background Top Right Image"
                className="fixed top-0 right-0 w-70 h-auto "
              /> 
            </div>{" "}
            {/* THE FIRST DIV */}
      {" "} 

   </div>

          {/* THE FIRST DIV */}
        </div>{" "}
        {/* THE PARENT DIV */}
      </section>
    </>
  );
}

export default App;
