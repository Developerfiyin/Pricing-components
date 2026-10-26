import "./App.css";
import image from "./assets/bg-top.svg";
import image1 from "./assets/bg-bottom.svg";
function App() {
  return (
    <>
      <section className="App bg-gray-100 min-h-screen flex items-center justify-center">
        <div>
          {" "}
          {/* THE PARENT DIV */}
          <div className="  ">
            <img
              src={image1}
              alt=""
              className="  fixed top-0 bottom-0 left-0 right-0 w-50 h-auto "
            />
            <div>
              <img
                src={image}
                alt=""
                className="fixed top-0 right-0 w-50 h-auto "
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
