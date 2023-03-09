import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Upfooter from '@/mobilecomponents/upfooter'
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