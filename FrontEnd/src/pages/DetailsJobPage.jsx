import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ListJob } from '../components/ListJob'
import { DetailsJob } from '../components/DetailsJob'

export const DetailsJobPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <>
            <Header/>
            <div className='bg-[#f5edff] min-h-[795px] pt-10 px-[40px] flex gap-4 pb-10'>
                <ListJob setSelectedItem={setSelectedItem}/>
                {selectedItem !== null && (
                    <DetailsJob selectedItem={selectedItem}/>
                )}
            </div>
            <Footer/>
        </>
    )
}
