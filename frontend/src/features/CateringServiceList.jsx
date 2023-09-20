import React from 'react'
import CateringServiceCard from '../components/CateringServiceCard'

const CateringServiceList = () => {
    const cateringServices = [
        {
            image: '',
            name: 'Paragon Catering Ltd.',
            location: 'Dhanmondi, Dhaka',
            items: '21'
        },
        {
            image: '',
            name: 'Hazi Catering Ltd.',
            location: 'Merul Badda, Dhaka',
            items: '10'
        }, 
        {
            image: '',
            name: 'Alpha Catering Service',
            location: 'Satmosjid Road, Dhaka',
            items: '25'
        }, 
        {
            image: '',
            name: 'Desh Catering Service',
            location: 'Jonson Road, Dhaka',
            items: '20'
        },
        {
            image: '',
            name: 'Salsa Catering Service',
            location: 'Satarkul, Dhaka',
            items: '21'
        },
        {
            image: '',
            name: 'Iqbal Catering',
            location: 'Mohammadpur, Dhaka',
            items: '21'
        },
        {
            image: '',
            name: 'Monsoon Catering',
            location: 'Badda, Dhaka',
            items: '10'
        },
        {
            image: '',
            name: 'Palmera Catering',
            location: 'Uttara, Dhaka',
            items: '25'
        },
        {
            image: '',
            name: 'Alomgir Catering Service',
            location: 'Khilgoan, Dhaka',
            items: '20'
        },
        {
            image: '',
            name: 'G.M.T Catering Services',
            location: 'Banani, Dhaka',
            items: '21'
        },
       

    ]
    return (
        <div>

            {
                cateringServices.map((cateringService) => (
                    <CateringServiceCard key={cateringService.name} cateringService={cateringService} />
                ))

            }    </div>
    )
}

export default CateringServiceList