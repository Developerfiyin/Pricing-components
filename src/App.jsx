import "./App.css";
import image from "./assets/bg-top.svg";
import image1 from "./assets/bg-bottom.svg";
function App() {
  return (
    <>
      <section className="App bg-gray-100 min-h-screen flex items-center justify-center ">
        <div className=" ">


          <div className="flex flex-col items-center justify-center gap-4">

            <h2> Our Pricing </h2>

            <div className="flex items-center justify-center gap-4"> 

           <button> Annually</button>
                <button className="w-7 h-7 border-2 border-gray-300 rounded-lg  "> </button>

            </div>
             </div>
          {" "}
          {/* THE PARENT DIV For the images  */} 
          <div className="  ">
            <img
              src={image1}
              alt="Background Bottom Left Image"
              className="fixed left-0 bottom-0 w-70 h-auto "
            /> 

      
            <div>
              <img
                src={image}
                alt="Background Top Right Image"
                className="fixed top-0 right-0 w-70 h-auto "
              /> 
            </div>{" "}
            {/* THE FIRST DIV */}
          </div>{" "} 


          {/* THE FIRST DIV */}
        </div>{" "}
        {/* THE PARENT DIV */}
      </section>
    </>
  );
}

export default App;
