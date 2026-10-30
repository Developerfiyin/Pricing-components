import "./App.css";
import image from "./assets/bg-top.svg";
import image1 from "./assets/bg-bottom.svg";
function App() {
  return (
    <>
      <section className=" bg-gray-100 min-h-screen  ">
        ? {/* THE DIV WITH PRICING AND BUTTONS IS BELOW THIS COMMENT */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className=" text-3xl p-4 font-semibold text-gray-600 ">
            {" "}
            Our Pricing{" "}
          </h2>

          <div className="flex gap-4">
            <button className=" cursor-pointer text-sm font-semibold text-gray-600 hover:text-gray-400">
              {" "}
              Annually
            </button>
            <div className="flex gap-2 bg-[hsl(238,63%,64%)] rounded-2xl px-1 py-1">
              <button className="w-5 h-5 bg-white rounded-full"> </button>
              <button className="w-5 h-5 bg-lavender rounded-full ">
                {" "}
              </button>{" "}
            </div>
            <button className=" cursor-pointer text-sm font-semibold text-gray-600 hover:text-gray-400">
              {" "}
              Monthly
            </button>
          </div>
        </div>{" "}
        {/* THE PARENT DIV For the images with stripes  */}
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
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* <!-- Pricing cards container --> */}
          <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div class="bg-white rounded-lg shadow-xl shadow-indigo-100/50 p-7 text-center">
              <h2 class="text-lg font-bold text-[#6b6f8d] mb-5">Basic</h2>

              <h3 class="text-4xl lg:text-5xl font-bold text-[#494b60] mb-7">
                <span class="text-2xl">$</span>199.99
              </h3>

              <div class="border-t border-gray-200 py-4 text-sm font-semibold text-[#6b6f8d]">
                500 GB Storage
              </div>
              <div class="border-t border-gray-200 py-4 text-sm font-semibold text-[#6b6f8d]">
                2 Users Allowed
              </div>
              <div class="border-t border-gray-200 py-4 text-sm font-semibold text-[#6b6f8d]">
                Send up to 3 GB
              </div>

              <button class="w-full rounded-md bg-gradient-to-r from-[hsl(237,73%,79%)] to-[hsl(238,63%,64%)] py-3 text-xs font-bold tracking-widest text-white">
                LEARN MORE
              </button>
            </div>

            <div class="relative z-10 bg-gradient-to-br from-[hsl(237,73%,79%)] to-[hsl(238,63%,64%)] rounded-lg shadow-xl shadow-indigo-200/50 p-7 text-center md:py-12">
              <h2 class="text-lg font-bold text-white mb-5">Professional</h2>

              <h3 class="text-4xl lg:text-5xl font-bold text-white mb-7">
                <span class="text-2xl">$</span>249.99
              </h3>

              <div class="border-t border-white/30 py-4 text-sm font-semibold text-white">
                1 TB Storage
              </div>
              <div class="border-t border-white/30 py-4 text-sm font-semibold text-white">
                5 Users Allowed
              </div>
              <div class="border-t border-white/30 py-4 text-sm font-semibold text-white">
                Send up to 10 GB
              </div>

              <button class="w-full rounded-md bg-white py-3 text-xs font-bold tracking-widest text-[hsl(238,63%,64%)]">
                LEARN MORE
              </button>
            </div>

            <div class="bg-white rounded-lg shadow-xl shadow-indigo-100/50 p-7 text-center">
              <h2 class="text-lg font-bold text-[#6b6f8d] mb-5">Master</h2>

              <h3 class="text-4xl lg:text-5xl font-bold text-[#494b60] mb-7">
                <span class="text-2xl">$</span>399.99
              </h3>

              <div class="border-t border-gray-200 py-4 text-sm font-semibold text-[#6b6f8d]">
                2 TB Storage
              </div>
              <div class="border-t border-gray-200 py-4 text-sm font-semibold text-[#6b6f8d]">
                10 Users Allowed
              </div>
              <div class="border-t border-gray-200 py-4 text-sm font-semibold text-[#6b6f8d]">
                Send up to 20 GB
              </div>

              <button class="w-full rounded-md bg-gradient-to-r from-[hsl(237,73%,79%)] to-[hsl(238,63%,64%)] py-3 text-xs font-bold tracking-widest text-white">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        {/* THE PARENT DIV */}
      </section>
    </>
  );
}

export default App;
