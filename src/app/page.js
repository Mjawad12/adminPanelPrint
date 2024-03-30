import { ordersData } from "@/Consonants";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#FAFAFA] min-h-screen ">
      <Navbar />
      <div className="flex flex-wrap gap-8  p-10 gap-y-10 small:p-5 smallest:px-3">
        {ordersData.map((it) => (
          <ProductCard
            name={it.orderItems[0].productName}
            totalA={it.totalAmount}
            des={it.discounts}
            img={it.img}
            slug={it.slug}
            Titems={it.orderItems.length}
          />
        ))}
      </div>
    </div>
  );
}

const ProductCard = ({ name, img, totalA, des, slug, Titems }) => {
  return (
    <Link
      className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-xl"
      href={"/orders/" + slug}
    >
      <div className="relative mx-3 mt-3 flex justify-center items-center h-60 overflow-hidden rounded-xl">
        <img
          className="h-max w-max max-h-full scale-[0.9]"
          src={img}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {((des / totalA) * 100).toFixed(0)}% OFF
        </span>
      </div>
      <div className="mt-4 px-5 py-5 border-t border-gray-200 ">
        <h5 className="text-xl small:text-[1.1rem] tracking-tight text-slate-900">
          {name}
        </h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl small:text-2xl font-bold text-slate-900">
              {totalA}$
            </span>
          </p>
          <div className="flex items-center gap-1">
            <p className="text-sm">No of products : </p>
            <span className=" rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {Titems}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md bg-Pn-default-500 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-Pn-light-400 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Details
        </div>
      </div>
    </Link>
  );
};
