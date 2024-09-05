import React from "react";
import { Menu, MenuItem } from "@/components/main/navbar";

export const Navbar = () => {    
    return(
      <Menu>
        <MenuItem item="Services" href={"/services"}/>
        <MenuItem item="Products" href={"/products"}/>
        <MenuItem item="Pricing" href={"/pricing"}/>
        <MenuItem item="Contact" href={"/contact"}/>              
      </Menu>
    )
}