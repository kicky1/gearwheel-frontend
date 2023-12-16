"use client"

import {
  DropdownMenu,
  DropdownMenuItem,
  
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logoutUser, useAuthorizationStore } from "@/stores/useAuthorizationStore"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { LogOut } from "lucide-react"


export function UserDropDown() {

  const username = useAuthorizationStore((state) => state.user.username)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Avatar className="hover:cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt={`${username}`} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> 
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logoutUser()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
