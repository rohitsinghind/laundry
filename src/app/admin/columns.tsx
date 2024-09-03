"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Moment from 'react-moment';

interface UserData {
    _id: string;
    email: string;
    name: string;
    phone: string;
    message: string;
    createdAt?: Date;
  }

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "studentId",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            S.No
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "phone",
    header: "Phone"
  },
  {
    accessorKey: "message",
    header: "Message"
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => {
    const user = row.original
    return (
        <Moment format="DD/MM/YYYY">{user?.createdAt}</Moment>
    )
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original
      return (
       <Link href={`/admin/${user?._id}`} target="_blank" className="text-blue-700 hover:text-blue-500 font-medium">View</Link>
      )
    },
  },
]