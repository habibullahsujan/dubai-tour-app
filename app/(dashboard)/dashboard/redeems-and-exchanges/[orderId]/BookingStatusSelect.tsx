import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function BookingStatusSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Booking Status</SelectLabel>
          <SelectItem value="apple">Waiting</SelectItem>
          <SelectItem value="banana">Pending</SelectItem>
          <SelectItem value="blueberry">Cancelled</SelectItem>
          <SelectItem value="grapes">Confirmed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
