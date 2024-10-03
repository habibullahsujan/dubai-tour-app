import React from 'react'
import CustomersListTable from './CustomersListTable'
import TablePageHeader from '@/components/TablePageHeader'

const Customers = () => {
    return (
        <section>
            <TablePageHeader/>
            <CustomersListTable />
        </section>
    )
}

export default Customers