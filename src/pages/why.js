import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Upfooter from '../mobilecomponents/Upfooter'
import Table from '@/components/table'

const Why = () => {
    return (
        <div className="md:ml-96 md:mr-96">
            <Navbar />
            <Table />
            <Upfooter />
            <Footer />
        </div>
    )
}

export default Why