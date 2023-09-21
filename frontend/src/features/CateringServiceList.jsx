import React from 'react'
import CateringServiceCard from '../components/CateringServiceCard'
import { useNavigate } from 'react-router-dom';
const CateringServiceList = () => {
    const cateringServices = [
        {
            image: 'catering/paragon.png',
            name: 'Paragon Catering Ltd.',
            location: 'Dhanmondi, Dhaka',
            items: '21'
        },
        {
            image: 'catering/hazi.png',
            name: 'Hazi Catering Ltd.',
            location: 'Merul Badda, Dhaka',
            items: '10'
        },
        {
            image: 'catering/alpha.png',
            name: 'Alpha Catering Service',
            location: 'Satmosjid Road, Dhaka',
            items: '25'
        },
        {
            image: 'catering/desh.png',
            name: 'Desh Catering Service',
            location: 'Jonson Road, Dhaka',
            items: '20'
        },
        {
            image: 'catering/salsa.png',
            name: 'Salsa Catering Service',
            location: 'Satarkul, Dhaka',
            items: '21'
        },
        {
            image: 'catering/iqbal.png',
            name: 'Iqbal Catering',
            location: 'Mohammadpur, Dhaka',
            items: '21'
        },
        {
            image: 'catering/monsoon.png',
            name: 'Monsoon Catering',
            location: 'Badda, Dhaka',
            items: '10'
        },
        {
            image: 'catering/palmera.png',
            name: 'Palmera Catering',
            location: 'Uttara, Dhaka',
            items: '25'
        },
        {
            image: 'catering/alomgir.png',
            name: 'Alomgir Catering Service',
            location: 'Khilgoan, Dhaka',
            items: '20'
        },
        {
            image: 'catering/gmt.png',
            name: 'G.M.T Catering Services',
            location: 'Banani, Dhaka',
            items: '21'
        },
    ];

    const navigate = useNavigate()

    const showFoodItems = () =>{
navigate('/foodmenu');
    }
    return (
        <div  className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
            {
                cateringServices.map((cateringService) => (
                    <button onClick={showFoodItems}>
                    <CateringServiceCard key={cateringService.name} cateringService={cateringService} />

                    </button>
                ))

            }    </div>
    )
}

export default CateringServiceList