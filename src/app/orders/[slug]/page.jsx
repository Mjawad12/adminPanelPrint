"use client";
import { arrowDown, ordersData } from "@/Consonants";
import Navbar from "@/components/Navbar";
import { motion, useAnimate, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

function page(props) {
  const orderDeatils = ordersData.filter(
    (it) => it.slug === props.params.slug
  )[0];
  console.log(orderDeatils);
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="flex flex-col w-full px-9 small:px-5 smallest:px-3">
        <h1 className="font-pm text-3xl font-bol">Order Details :</h1>
        <div>
          <Order
            img={orderDeatils.img}
            name={orderDeatils.name}
            totalPrice={orderDeatils.totalAmount}
            des={orderDeatils.discounts}
            Tproduct={orderDeatils.orderItems.length}
            tax={orderDeatils.taxes}
            customerAddress={orderDeatils.customerDetails.address}
            customerName={orderDeatils.customerDetails.name}
            orderid={orderDeatils.orderId}
            slug={orderDeatils.slug}
          />
        </div>
      </div>
    </div>
  );
}

const Order = ({
  orderid,
  img,
  name,
  totalPrice,
  des,
  Tproduct,
  tax,
  customerName,
  customerAddress,
  slug,
}) => {
  const [open, setopen] = useState(false);
  const [scope, animate] = useAnimate();
  return (
    <div className="py-8 small:py-5">
      <div className="max-w-6xl mx-auto px-4 small:px-0">
        <div className="flex small:flex-col -mx-4">
          <div className="flex-1 px-4">
            <div className="h-[460px] rounded-lg  mb-4 flex justify-center items-center border boder-gray-200 ">
              <img className="p-5" src={img} alt="Product Image" />
            </div>
            <div className="flex justify-center items-center -mx-2 mb-4">
              <div className="w-1/2 mob:w-full px-2">
                <Link
                  href={"/invoice/" + slug}
                  className="w-full bg-Pn-default-500 text-white py-2 px-4 rounded-full font-bold hover:bg-Pn-light-400 block text-center"
                >
                  Print Invoice
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4">
            <h2 className="text-2xl mob:text-[1.2rem] font-bold text-gray-800 mb-2">
              Product Name : {name}
            </h2>
            <div className="mb-2">
              <span className="font-bold text-gray-700 ">Order Id :</span>
              <span className="text-gray-600 ">${orderid}</span>
            </div>
            <div className="flex mb-2 gap-4 flex-wrap">
              <div>
                <span className="font-bold text-gray-700 ">Price :</span>
                <span className="text-gray-600 ">${totalPrice}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">Discount :</span>
                <span className="text-gray-600 ">${des}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">
                  No. of product :
                </span>
                <span className="text-gray-600 ">{Tproduct}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 ">Taxes :</span>
              <span className="text-gray-600 ">${tax}</span>
            </div>
            <motion.div
              ref={scope}
              initial={{ height: 45 }}
              className="flex flex-col overflow-hidden border-y pt-2  border-gray-400 "
            >
              <div
                onClick={() => {
                  open &&
                    animate(
                      scope.current,
                      { height: "50px" },
                      { duration: 0.5, ease: "backInOut" }
                    );
                  !open &&
                    animate(
                      scope.current,
                      { height: scope.current.scrollHeight + "px" },
                      { duration: 0.5, ease: "backInOut" }
                    );
                  setopen(!open);
                }}
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-bold text-gray-700 text-[1.2rem] ">
                  Customer Details
                </span>
                <div
                  className={`transition-all ${
                    open ? "rotate-[180deg]" : "rotate-[0deg]"
                  }`}
                >
                  {arrowDown}
                </div>
              </div>
              <div className="flex flex-col px-3 py-4 gap-2">
                <div>
                  <span className="font-bold text-gray-700 ">
                    Coustomer Name :
                  </span>
                  <span className="text-gray-600 "> {customerName}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Coustomer Address :
                  </span>
                  <span className="text-gray-600 "> {customerAddress}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
