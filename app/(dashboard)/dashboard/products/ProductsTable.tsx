

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';



const products = [
    { id: '01', productImg: '', productName: 'Gentlemen,s Retreat', address: 'Anantara Downtown', status: 'live', categories: 'spa', partner: 'Dubai Hotel', type: 'collection', price: 'AE$ 899.00' },
    { id: '01', productImg: '', productName: 'Gentlemen,s Retreat', address: 'Anantara Downtown', status: 'live', categories: 'spa', partner: 'Dubai Hotel', type: 'collection', price: 'AE$ 899.00' },
    { id: '01', productImg: '', productName: 'Gentlemen,s Retreat', address: 'Anantara Downtown', status: 'live', categories: 'spa', partner: 'Dubai Hotel', type: 'collection', price: 'AE$ 899.00' },
    { id: '01', productImg: '', productName: 'Gentlemen,s Retreat', address: 'Anantara Downtown', status: 'live', categories: 'spa', partner: 'Dubai Hotel', type: 'collection', price: 'AE$ 899.00' },
    { id: '01', productImg: '', productName: 'Gentlemen,s Retreat', address: 'Anantara Downtown', status: 'live', categories: 'spa', partner: 'Dubai Hotel', type: 'collection', price: 'AE$ 899.00' },
]

type TProductTableProps={
    open: boolean,
    setOpen: ()=>void,
}
const ProductsTable = ({open,setOpen}:TProductTableProps) => {
    console.log(open)

    return (
        <div className='p-2'>
            <Table className='shadow-xl border'>
                <TableHeader>
                    <TableRow className="bg-[#014C4633] text-[#014C46E5] ">
                        <TableHead className="uppercase text-[#014C46E5]">Products</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">status</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">categories</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">partner</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">type</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='overflow-scroll'>
                    {products.map((item, index) => (
                        <TableRow onClick={()=>setOpen()} className='cursor-pointer hover:bg-gray-200' key={index}>
                            <TableCell className="font-medium text-xs flex items-center gap-2">
                                <div className='h-6 w-6 bg-gray-400 rounded-full '></div>
                                <div className='flex flex-col'>
                                    <span className='text-xs'>{item.productName} at </span>
                                    <span className='text-xs'>{item.address}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                <span className='text-[#28C76F] capitalize bg-[#28C76F29] px-2 py-1 rounded-md'>{item.status}</span>
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                <span className='text-[#686868] uppercase bg-[#68686829] px-2 py-1 rounded-md'>{item.categories}</span>
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                <div className='flex flex-col'>
                                    <span>{item.address}</span>
                                    <span>{item.partner}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="font-medium text-xs text-[#F09000] px-2 py-1 rounded-md bg-[#F0900029] capitalize"> {item.type}</span>
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                {item.price}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex rounded-md w-full items-center justify-end my-8">
                <button className={cn("flex gap-x-2 items-center justify-center  text-white p-2 cursor-pointer border bg-primary rounded-l-md border-primary font-semibold")}>
                    <span>Previous</span>
                </button>
                <button className={cn("flex gap-x-2 items-center justify-center px-4 py-2 cursor-pointer text-primary border border-[#014C461A] font-semibold")}>
                    <span>1</span>
                </button>
                <button className={cn("flex gap-x-2 items-center justify-center p-2 cursor-pointer text-primary border border-[#014C461A] rounded-r-md font-semibold")}>
                    <span>Next</span>
                </button>
            </div>
        </div>
    )
}

export default ProductsTable