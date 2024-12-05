"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Provider, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import store from '../../../../../../../redux/store';
import { applyOffer } from '../../../../../../../redux/cartSlice';

const OfferCard = ({ offer }) => {
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (divRef.current) {
      // Update the height whenever the component renders
      setDivHeight(divRef.current.offsetHeight);
    }
  }, []);

  const handleApplyOffer = () => {
    dispatch(applyOffer(offer)); // Dispatch the complete offer
    alert("Offer applied and you have received " + offer.discount_percentage + "% discount");
  
    // Redirect to the cart page
    router.push(`/partner-details/${offer.partnerId}/service-details/${offer.serviceId}/cart`);
  };
  

  return (
    <Provider store={store}>
      <div className='border p-2 m-2 rounded-r-xl ml-[50px] relative' ref={divRef}>
        <p className='-rotate-90 absolute top-[70px] left-[-110px] font-bold text-white bg-blue-300 w-full border-black text-center py-2' style={{ width: `${divHeight}px` }}>{offer.code}</p>
        <div className='flex justify-between'>
          <div>
            <h1 className='font-semibold'>{offer.title}</h1>
            {/* <p className='text-[14px] text-green-600 font-bold'>20% Discount + 10% cashback</p> */}
          </div>
          <div className='font-bold cursor-pointer text-blue-400' onClick={handleApplyOffer}>
            APPLY
          </div>
        </div>

        <p className='text-[12px]'>
          {offer.luzo_offers_validities.length === 7 ? "Valid on all days" : <>
            {"Valid on " +
              offer.luzo_offers_validities.map((ele, i) => " " + (i === (offer.luzo_offers_validities.length - 1) ? "and " : "") + ele.working_day)
            }
          </>}
        </p>
        <p className='text-[14px]'>{offer.description}</p>
        <p className='border-b border-blue-400 text-blue-400 text-[12px] font-semibold max-w-[12%] flex-1 items-start text-left'>T&C +</p>
      </div>
    </Provider>
  )
}

export default OfferCard;
