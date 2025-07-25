import {
  Home,
  LayoutDashboard,
  FileText,
  CheckSquare,
  Clock,
  Users,
  Settings,
  LifeBuoy,
  Globe,
  ExternalLink,
  Search,
  ChevronsUpDown,
  UserIcon,
  SettingsIcon,
  BookOpenCheck,
  Circle,
  LogOutIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import NavItem from "./NavItem";
import { ThemeToggle } from "./ThemeToggle";
import SideBarMenuChild from "./SideBarMenuChild";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-background border-r border-border h-screen px-4 py-6 flex flex-col justify-between overflow-y-auto">
      {/* top view */}
      <div>
        <div className="text-xl font-bold mb-6 flex items-center justify-between">
          <div className="flex items-center">
          <img
            src="/fav.svg"
            alt="Logo"
            className="h-7 w-auto"
            loading="lazy"
          />
           <span className="font-bold tracking-widest uppercase text-lg text-gray-900 dark:text-white mb-0.5 ml-0.5">
            PRISM
          </span> 
          </div>
          <ThemeToggle />
        </div>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-20 py-2 w-full rounded-md border border-border text-sm text-foreground bg-background cursor-pointer"
            disabled={true}
          />
          <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
        <nav className="space-y-2">
          <NavItem icon={<Home className="w-4 h-4" />} title="Home" hasChildren>
           <SideBarMenuChild data={["Analytics", "Team"]}/>
          </NavItem>
          <NavItem
            icon={<LayoutDashboard className="w-4 h-4" />}
            title="Dashboard"
            hasChildren
          >
           <SideBarMenuChild 
            data={[
              "Analytics",
              "Team",
              "Projects",
              "Billing",
              "Invoices",
              "Settings",
            ]}
           />
          </NavItem>
          <NavItem
            icon={<FileText className="w-4 h-4" />}
            title="Projects"
            hasChildren
          >
              <SideBarMenuChild 
                data={["Analytics", "Team", "Projects", "Billing", "Invoices", "Settings"]}
              />
            </NavItem>
          <NavItem
            icon={<CheckSquare className="w-4 h-4" />}
            title="Tasks"
            hasChildren
            badgeCount={8}
          >
            <SideBarMenuChild 
                data={[  
                  "Analytics",
                  "Team",
                  "Projects",
                  "Billing",
                  "Invoices",
                  "Settings",
                ]}
              />

            </NavItem>
          <NavItem
            icon={<Clock className="w-4 h-4" />}
            title="Reporting"
            hasChildren
          >
            <SideBarMenuChild data={["Analytics", "Team", "Projects", "Billing", "Invoices", "Settings"]} />

            </NavItem>
          <NavItem
            icon={<Users className="w-4 h-4" />}
            title="Users"
            hasChildren
          />
        </nav>
      </div>

      {/* bottom view */}
      <div className="space-y-2">
        <NavItem icon={<Settings className="w-4 h-4" />} title="Settings" />
        <NavItem
          icon={<LifeBuoy className="w-4 h-4" />}
          title="Support"
          hasChildren
          rightIcon={
            <Badge className="ml-auto h-6" variant="outline">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Online
            </Badge>
          }
        />
        <NavItem
          icon={<Globe className="w-4 h-4" />}
          title="Open in browser"
          hasChildren
          rightIcon={<ExternalLink className="w-4 h-4" />}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-full">
            <Button
              variant="outline"
              className="w-full justify-start py-6 px-2"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={"/userLogo.png"} />
                <AvatarFallback>OR</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="text-sm mb-1 font-medium leading-none text-foreground dark:text-foreground">
                  Olivia Rhye
                </div>
                <div className="text-xs leading-none text-muted-foreground">
                  olivia@untitledui.com
                </div>
              </div>
              <ChevronsUpDown className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            align="start"
            sideOffset={4}
            className="w-72 gap-1"
          >
            <DropdownMenuLabel className="flex items-center">
              <UserIcon className="mr-2 h-4 w-4" />
              View profile
              <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
                <span className="text-xs">⌘K→P</span>
              </kbd>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SettingsIcon className="mr-1 h-4 w-4" />
                Account settings
                <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
                  <span className="text-xs">⌘S</span>
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookOpenCheck className="mr-1 h-4 w-4" />
                Documentation
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Switch account</DropdownMenuLabel>
            <DropdownMenuItem>
              <Button
                variant="ghost"
                className="w-full justify-start py-6 px-2"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src={"/userLogo.png"} />
                  <AvatarFallback>OR</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <div className="text-sm mb-1 font-medium leading-none text-foreground dark:text-foreground">
                    Olivia Rhye
                  </div>
                  <div className="text-xs leading-none text-muted-foreground">
                    olivia@untitledui.com
                  </div>
                </div>
                <Avatar className="w-4 h-4">
                  <AvatarImage src={"/Checkbox.png"} />
                </Avatar>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant="ghost"
                className="w-full justify-start py-6 px-2"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src={"/secondUser.png"}/>
                  <AvatarFallback>OR</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <div className="text-sm mb-1 font-medium leading-none text-foreground dark:text-foreground">
                    Sienna Hewitt
                  </div>
                  <div className="text-xs leading-none text-muted-foreground">
                    sienna@untitledui.com
                  </div>
                </div>
                <Circle className="ml-13 h-4 w-4" />
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant="outline"
                className="w-full justify-center py-4 px-2"
              >
                + Add account
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <LogOutIcon className="h-4 w-4" />
              Sign out
              <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
                <span className="text-xs">
                  <span className="text-xs">⌘⬆Q</span>
                </span>
              </kbd>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
