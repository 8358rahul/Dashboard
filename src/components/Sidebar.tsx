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

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 h-screen border-r px-4 py-6 flex flex-col justify-between overflow-y-auto">
      {/* top view */}
      <div>
        <div className="text-xl font-bold mb-6">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-20 py-2 w-full rounded-md border text-sm cursor-pointer bg-background"
            disabled={true}
          />
          <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
        <nav className="space-y-2">
          <NavItem icon={<Home className="w-4 h-4" />} title="Home" />
          <NavItem
            icon={<LayoutDashboard className="w-4 h-4" />}
            title="Dashboard"
            hasChildren
          >
            <div className="font-semibold text-sm leading-trim-none tracking-normal py-1.5 text-gray-700 dark:text-gray-300">
              Analytics
            </div>
            <div className="font-semibold text-sm leading-trim-none tracking-normal py-1.5 text-gray-700 dark:text-gray-300">
              Team
            </div>
          </NavItem>
          <NavItem
            icon={<FileText className="w-4 h-4" />}
            title="Projects"
            hasChildren
          />
          <NavItem
            icon={<CheckSquare className="w-4 h-4" />}
            title="Tasks"
            hasChildren
            badgeCount={8}
          />
          <NavItem
            icon={<Clock className="w-4 h-4" />}
            title="Reporting"
            hasChildren
          />
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
                <div className="text-sm mb-1 font-medium leading-none text-gray-900 dark:text-gray-100">
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
                Documentation</DropdownMenuItem>
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
                <div className="text-sm mb-1 font-medium leading-none text-gray-900 dark:text-gray-100">
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
                <AvatarImage src={"/secondUser.png"} />
                <AvatarFallback>OR</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="text-sm mb-1 font-medium leading-none text-gray-900 dark:text-gray-100">
               Sienna Hewitt
                </div>
                <div className="text-xs leading-none text-muted-foreground">
                  sienna@untitledui.com
                </div>
              </div>
              <Circle className="ml-auto h-4 w-4" />
            </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Button
              variant="outline"
              className="w-full justify-center py-5 px-2"
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
