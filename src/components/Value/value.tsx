"use client";
import Logo from "../../assets/world.png";
import Logo2 from "../../assets/world2.png";
import Logo3 from "../../assets/face.png";
import Logo4 from "../../assets/food.png";
// const Trust = () => {
//   return (
//     <div className="w-full h-[45em]">
//       <div className="items-center justify-center text-center">
//         <div className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 w-fit mx-auto mb-4">
//           <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//           <h1 className="">Why should you trust us?</h1>
//         </div>
//         <p>
//           We don’t compromise on quality. What you get is premium, farm-fresh
//           produce, <br /> exported straight from our hands to yours.
//         </p>
//       </div>
//       <div className="flex items-center justify-center space-x-60 mt-20 ml-4">
//         <div className="border border-gray-100 rounded-lg px-8 py-8">
//           <img src={Logo} alt="Logo" />
//           <h1 className="font-medium text-2xl">We Know Our Food’s Origins</h1>
//           <p className="font-light text-[14px]">
//             We work closely with farmers; so, we know exactly what we’re
//             selling.
//           </p>
//         </div>
//         <div className="border border-gray-100 rounded-lg px-7 py-8">
//           <img src={Logo2} alt="Logo" />
//           <h1 className="font-medium text-2xl">Global-Standard Quality</h1>
//           <p className="font-light text-[14px]">
//             Every product is clean, fresh, and meets international export
//             requirements.
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center justify-center space-x-60 mt-5">
//         <div className="border border-gray-100 rounded-lg px-4 py-8">
//           <img src={Logo3} alt="Logo" />
//           <h1 className="font-medium text-2xl">We Create Opportunities</h1>
//           <p className="font-light text-[14px]">
//             By linking small-scale farmers to global buyers, we strengthen
//             communities.
//           </p>
//         </div>
//         <div className="border border-gray-100 rounded-lg px-4 py-8">
//           <img src={Logo4} alt="Logo" />
//           <h1 className="font-medium text-2xl">Freshness You Can Taste</h1>
//           <p className="font-light text-[14px]">
//             We ensure minimal handling and maximum quality from the farm to your
//             table.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trust;

export default function ValueProposition() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 bg-[#FFFFFF] border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333]   transition-colors">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Why should you trust us?
          </button>
          <p className="mt-4 text-xl md:text-xl text-[#1A1A1A] leading-8">
            We don’t compromise on quality. What you get is premium, farm-fresh
            produce, <br /> exported straight from our hands to yours.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* We Build from the Ground Up */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo} alt="Logo" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000]">
                  We Know Our Food’s Origins
                </h3>
                <p className="mt-2 text-[#767676]">
                  We work closely with farmers; so, we know exactly what we’re
                  selling.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo2} alt="Logo2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000]">
                  Global-Standard Quality
                </h3>
                <p className="mt-2 text-[#767676]">
                  Every product is clean, fresh, and meets international export
                  requirements.
                </p>
              </div>
            </div>
          </div>

          {/* We Sell Homes & Investments */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo3} alt="Logo3" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000]">
                  We Create Opportunities
                </h3>
                <p className="mt-2 text-[#767676]">
                  By linking small-scale farmers to global buyers, we strengthen
                  communities.
                </p>
              </div>
            </div>
          </div>

          {/* We Manage Shortlets */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo4} alt="Logo4" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000]">
                  Freshness You Can Taste
                </h3>
                <p className="mt-2 text-[#767676]">
                  We ensure minimal handling and maximum quality from the farm
                  to your table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
