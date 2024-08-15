import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'

const CustomSelect = ({ control, name, label }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Select {...field} onValueChange={(value)=>field.onChange(value)}>
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
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomSelect