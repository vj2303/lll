"use client";

import React from 'react';
import { ChevronRight, CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { clearOffer } from '../../../../../../redux/cartSlice'; // Adjust path based on your structure

const ChooseOffer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const appliedOffer = useSelector((state) => state.cart.appliedOffer); // Access applied offer from Redux

  // Handler to clear the applied offer
  const handleRemoveOffer = () => {
    dispatch(clearOffer()); // Dispatch the action to clear the offer
  };

  return (
    <div
      className='py-2 flex mt-2 m-2 p-2 rounded-xl justify-between bg-white items-center'
      onClick={() => {
        if (!appliedOffer) {
          router.push("cart/offers"); // Navigate to select offers if no offer is applied
        }
      }}
    >
      <div className='text-[14px]'>
        {appliedOffer ? (
          <>
            <p>Offer Applied</p>
            <p>{appliedOffer.code}</p>
          </>
        ) : (
          <p>Choose Offer</p>
        )}
      </div>
      {appliedOffer ? (
        <CircleX onClick={handleRemoveOffer} className="cursor-pointer text-red-400" />
      ) : (
        <ChevronRight />
      )}
    </div>
  );
};

export default ChooseOffer;