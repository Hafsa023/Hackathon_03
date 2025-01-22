import Image from "next/image";
import Hero from "./components/hero";
import Running from "./components/running";
import Essentials from "./components/essentials";
import Miss from "./components/miss";
import Card from "./productListing/card";
import Gear from "./components/gear";

export default function Home() {
  return (
   <main>
    <Hero />
    <Card />
   <Running />
   <Gear />
   <Miss />
   <Essentials />
   </main>
  );
}




// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allproducts } from "@/sanity/lib/queries";
// import Image from "next/image";

// type Product = {
//   _id: string;
//   productName: string;
//   description: string;
//   imageUrl: string;
//   price: number;
// };

// export default async function Home() {
//   const products: Product[] = await sanityFetch({ query: allproducts });

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
//             key={product._id}
//           >
           
//             <Image
//               src={product.imageUrl}
//               alt={product.productName}
//               width={300}
//               height={300}
//               className="object-cover rounded-lg"
//             />
//             <h2 className="text-xl font-bold text-center mt-4">{product.productName}</h2>
//             <p className="text-center text-sm text-gray-600 mt-2">
//               {product.description}
//             </p>
//             <p className="text-center text-lg font-semibold mt-4">
//               ${product.price.toFixed(2)} 
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
