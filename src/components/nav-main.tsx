import { IconMail, type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2"></SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <Link href={item.url} key={item.title}>
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={` ${
                    currentRoute === item.url
                      ? "bg-[#3845FF]"
                      : "bg-transparent"
                  }  text-[17px] mt-6 cursor-pointer hover:bg-[#3845FF]`}
                >
                  <span className="text-xl text-white">
                    {item.icon && <item.icon />}
                  </span>
                  <span className="text-white">{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
