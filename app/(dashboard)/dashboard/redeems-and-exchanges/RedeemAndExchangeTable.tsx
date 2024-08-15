import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { redeemsAndExchangesTable } from "@/db";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SlOptionsVertical } from "react-icons/sl";




export function RedeemAndExchangeTable() {
  return (
    <>
      <Table className="mt-8 shadow-xl p-2 border">
        <TableHeader>
          <TableRow className="bg-[#014C4633] text-[#014C46E5] ">
            <TableHead className="w-[100px] uppercase text-[#014C46E5]">order id</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Date</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Customer</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Product</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Status</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {redeemsAndExchangesTable.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium  text-nowrap">
                <div>
                  <Link href={`/dashboard/redeems-and-exchanges/${item.id}`}>{item.orderId}</Link>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col text-[#2F2B3D]">
                  <span>
                    {item.date}
                  </span>
                  <span>{item.time}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span>{item.customer.name}</span>
                  <span className="text-[#2F2B3DB2] text-sm">{item.customer.email}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">

                <div className="flex flex-col">
                  <span className={cn(item.product.serviceName === 'Default' && "text-[#686868] bg-[#68686829]", 'border rounded-sm text-sm cursor-pointer p-0.5', item.product.serviceName === 'Processing' && 'text-[#28C76F] bg-[#28C76F29]', item.product.serviceName === 'Staycation' && 'bg-[#AB329729] text-[#AB3297]', item.product.serviceName === 'Collection' && 'bg-[#316AC129] text-[#316AC1]', 'text-center w-28')}>{item.product.serviceName}</span>
                  <span>{item.product.serviceDescription}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1">
                  <div className={cn("w-4 h-4 rounded-full",
                    item.status === 'Received' && 'bg-[#2F2B3D]',
                    item.status === 'Processing' && 'bg-[#F09000]',
                    item.status === 'Booking' && 'bg-[#005928]',
                    item.status === 'Cancelled' && 'bg-[#CF0000]',
                  )}></div>
                  <span>{item.status}</span>
                </div>

              </TableCell>
              <TableCell className="font-medium">
                <div className="flex justify-end cursor-pointer">
                  <SlOptionsVertical className="size-6" />
                </div>
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
    </>
  )
}
