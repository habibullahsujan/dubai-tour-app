import TablePageHeader from '@/components/TablePageHeader'
import React from 'react'
import CustomerTable from './CustomerTable'

const SingleCustomer = () => {
    return (
        <section>
            <TablePageHeader heading='' />
            <CustomerTable />
        </section>
    )
}

export default SingleCustomer