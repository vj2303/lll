// pages/cart/Page.js
"use client";
import React from 'react';
import Navbar from '../../../../../../components/Navbar';
import Footer from '../../../../../../components/Footer';
import BillDetails from './BillDetails';
import Offers from './Offers';
import ChooseOffers from './ChooseOffer';
import LocationSupport from './LocationSupport';
import BottomSheet from './BottomSheet';
import OfferAppliedBottomSheet from './OfferAppliedBottomSheet'// Import the new bottom sheet
import { Provider } from "react-redux";
import store from "../../../../../../redux/store";

const Page = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className="bg-gray-100">
          <LocationSupport />
          <ChooseOffers />
          <BillDetails />
          <Offers />
          <BottomSheet />
          
          {/* Show the Offer Applied Bottom Sheet */}
          <OfferAppliedBottomSheet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Page;
