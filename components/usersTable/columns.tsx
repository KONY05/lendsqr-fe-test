"use client";

import { getStatusColor } from "@/utils/helper";
import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserTable = {
  id?: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Pending" | "Active" | "Inactive" | "Blacklisted";
};

export const columns: ColumnDef<UserTable>[] = [
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "dateJoined",
    header: () => <div className="text-left">Date Joined</div>,
    cell: ({ row }) => {
      const dateJoined = formatDate(row.getValue("dateJoined"), "PPpp");

      return <div className="">{dateJoined}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div
          className={`rounded-[100px] px-[13px] py-[7px] text-center text-sm font-normal ${getStatusColor(status)}`}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="space-y-2.5 py-5 pr-[50px] pl-[21px]"
          >
            <DropdownMenuItem>
              <Image
                src="/icons/viewDetails.svg"
                alt="view details icon"
                width={15}
                height={10}
              />{" "}
              <span className="text-sm font-medium text-[#545F7D]">
                View Details
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image
                src="/icons/blacklistUser.svg"
                alt="blacklist user icon"
                width={15}
                height={10}
              />{" "}
              <span className="text-sm font-medium text-[#545F7D]">
                Blacklist User
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image
                src="/icons/activateUser.svg"
                alt="activate user icon"
                width={15}
                height={10}
              />{" "}
              <span className="text-sm font-medium text-[#545F7D]">
                Activate User
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
