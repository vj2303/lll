// components/OfferAppliedBottomSheet.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeOfferAppliedBottomSheet } from '../../../../../../redux/cartSlice'; // Action to close bottom sheet

const OfferAppliedBottomSheet = () => {
  const dispatch = useDispatch();
  const { appliedOffer, isOfferAppliedBottomSheetVisible } = useSelector((state) => state.cart);

  const handleClose = () => {
    dispatch(closeOfferAppliedBottomSheet()); // Close the bottom sheet
  };

  if (!isOfferAppliedBottomSheetVisible || !appliedOffer) return null; // If the bottom sheet should not be visible or no offer applied, don't render

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
    {/* Black overlay */}
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={handleClose} />
  
    {/* Bottom Sheet */}
    <div className="fixed bottom-0 left-0 w-full rounded-t-lg bg-white p-4 text-black shadow-md z-50">
       
      <div className="flex justify-between">
        {/* <div className="font-semibold">{appliedOffer.title}</div> */}
        <h1 className='text-center font-semibold'>Offer Applied Successfully</h1>
        <div className="cursor-pointer  flex-end" onClick={handleClose}>X</div>
      </div>
      <p>{appliedOffer.code}</p>
      <p className='text-[12px]'>{appliedOffer.description}</p>
    </div>
  </div>
  
  );
};

export default OfferAppliedBottomSheet;
