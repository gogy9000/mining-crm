"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    date: string
    place: string
    description: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "date",
        header: () => <div className="text-left">Дата</div>,

        // cell: ({ row }) => {

        //     const amount = parseFloat(row.getValue("amount"))

        //     const formatted = new Intl.NumberFormat("en-US", {
        //         style: "currency",
        //         currency: "USD",
        //     }).format(amount)

        //     return <div className="text-left font-medium">{formatted}</div>
        // },
    },
    {
        accessorKey: "place",
        header: "Наименование участка работ",
    },
    {
        accessorKey: "description",
        header: "Содержание указания",
        // cell: ({ row }) => {
        //     return (
        //         <span>{row.original.id}</span>
        //     )
        // }
    },
]
