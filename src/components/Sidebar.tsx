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
  ChevronDown,
  Search, 
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
  const isMac = navigator.platform.toUpperCase().includes('MAC');

  return (
    <div className="h-screen flex">
      <aside className="w-64 bg-white dark:bg-gray-800 h-screen border-r px-4 py-6 lg:block flex flex-col justify-between overflow-y-auto">
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
              <span className="text-xs">{isMac ? '⌘' : 'Ctrl'}</span>K
            </kbd>
          </div>
          <nav className="space-y-3">
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
            <NavItem icon={<FileText className="w-4 h-4" />} title="Projects" hasChildren />
            <NavItem 
              icon={<CheckSquare className="w-4 h-4" />} 
              title="Tasks" 
              hasChildren
              badgeCount={8}
            />
            <NavItem icon={<Clock className="w-4 h-4" />} title="Reporting" hasChildren />
            <NavItem icon={<Users className="w-4 h-4" />} title="Users" hasChildren />
          </nav>
        </div>

        {/* bottom view */}
        <div className="mt-auto">
          <div className="space-y-3">
            <NavItem icon={<Settings className="w-4 h-4" />} title="Settings" />
            <NavItem 
              icon={<LifeBuoy className="w-4 h-4" />} 
              title="Support"
              badgeCount={0}
            >
              <Badge className="ml-auto" variant="outline">
                Online
              </Badge>
            </NavItem>
            <NavItem icon={<Globe className="w-4 h-4" />} title="Open in browser" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button variant="ghost" className="w-full justify-start p-2">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src={"/userLogo.png"} />
                    <AvatarFallback>OR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
                      Olivia Rhye
                    </div>
                    <div className="text-xs leading-none text-muted-foreground">
                      olivia@untitledui.com
                    </div>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                <DropdownMenuLabel>View profile</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Account settings</DropdownMenuItem>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Switch account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src={"/userLogo.png"} />
                    <AvatarFallback>OR</AvatarFallback>
                  </Avatar>
                  Olivia Rhye
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/avatars/sienna.jpg" />
                    <AvatarFallback>SH</AvatarFallback>
                  </Avatar>
                  Sienna Hewitt
                </DropdownMenuItem>
                <DropdownMenuItem>+ Add account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>
    </div>
  );
}


