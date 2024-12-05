"use client"

import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../../../../../redux/store'
import OfferCard from "./OfferCard"

const OfferList = ({ offers }) => {
    return (
        <Provider store={store}>
            <div className='mt-[100px]'>
                {
                    offers?.map((offer) => {
                        return <OfferCard offer={offer} />
                    })
                }
            </div>
        </Provider>
    )
}

export default OfferList