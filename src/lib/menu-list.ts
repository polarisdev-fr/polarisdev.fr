import { Role } from "@prisma/client";
import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    LucideIcon,
    Ticket
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon
    submenus: Submenu[];
    role?: Role[];
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  
  export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname.includes("/dashboard"),
            icon: LayoutGrid,
            submenus: [],
            role: [Role.USER, Role.HELPER, Role.MODERATOR, Role.ADMIN, Role.FOUNDER]
          }
        ]
      },
      {
        groupLabel: "Products",
        menus: [
          {
            href: "/products",
            label: "Products",
            active: pathname.includes("/products"),
            icon: Bookmark,
            submenus: [],
            role: [Role.ADMIN, Role.FOUNDER]
          },
          {
            href: "/products/admin",
            label: "New Product",
            active: pathname.includes("/products/new"),
            icon: SquarePen,
            submenus: [],
            role: [Role.ADMIN, Role.FOUNDER]
          }
        ]
      },
      /*{
        groupLabel: "Contents",
        menus: [
          {
            href: "",
            label: "Posts",
            active: pathname.includes("/posts"),
            icon: SquarePen,
            submenus: [
              {
                href: "/posts",
                label: "All Posts",
                active: pathname === "/posts"
              },
              {
                href: "/posts/new",
                label: "New Post",
                active: pathname === "/posts/new"
              }
            ]
          },
          {
            href: "/categories",
            label: "Categories",
            active: pathname.includes("/categories"),
            icon: Bookmark,
            submenus: []
          },
          {
            href: "/tags",
            label: "Tags",
            active: pathname.includes("/tags"),
            icon: Tag,
            submenus: []
          }
        ]
      },*/
      {
        groupLabel: "Settings",
        menus: [
          {
            href: "/users",
            label: "Users",
            active: pathname.includes("/users"),
            icon: Users,
            role: [Role.ADMIN, Role.FOUNDER],
            submenus: []
          },
          {
            href: "/account",
            label: "Account",
            active: pathname.includes("/account"),
            icon: Settings,
            role: [Role.USER, Role.HELPER, Role.MODERATOR, Role.ADMIN, Role.FOUNDER],
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Support",
        menus: [
          {
            href: "/dashboard/tickets",
            label: "Tickets",
            active: pathname.includes("/tickets"),
            icon: Ticket,
            submenus: [],
            role: [Role.MODERATOR, Role.ADMIN, Role.FOUNDER]
          },
        ]
      }
    ];
  }