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
        accessorKey: "amount",
        header: () => <div className="text-left">Amount</div>,
        cell: ({ row }) => {

            const amount = parseFloat(row.getValue("amount"))

            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-left font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "actions",
        header: "actions",
        cell: ({ row }) => {

            return (
                <span>{row.original.id}</span>
            )
        }
    },
]
