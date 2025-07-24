import { useState } from 'react'
import { 
  Bell, 
  Calendar, 
  ChevronDown, 
  Home, 
  Menu, 
  Search, 
  Settings, 
  Users 
} from 'lucide-react'
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "./ui/avatar"
import { 
  Button 
} from "./ui/button"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "./ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "./ui/dialog"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu"
import { 
  Input 
} from "./ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table"

type Sale = {
  id: string
  customer: string
  date: string
  product: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
}

export default function SalesDashboard() {
  const [dateRange] = useState('Jan 10, 2025 - Jan 16, 2025')
  const [view, setView] = useState('Default')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const salesData: Sale[] = [
    { id: '1', customer: 'Alex Johnson', date: 'Jan 16, 2025', product: 'Premium Plan', amount: 99, status: 'completed' },
    { id: '2', customer: 'Maria Garcia', date: 'Jan 15, 2025', product: 'Basic Plan', amount: 49, status: 'completed' },
    { id: '3', customer: 'James Smith', date: 'Jan 14, 2025', product: 'Enterprise Plan', amount: 199, status: 'pending' },
    { id: '4', customer: 'Sarah Williams', date: 'Jan 13, 2025', product: 'Premium Plan', amount: 99, status: 'completed' },
    { id: '5', customer: 'David Lee', date: 'Jan 12, 2025', product: 'Basic Plan', amount: 49, status: 'failed' },
  ]

  const metrics = [
    { name: "Today's revenue", value: "$1,450", change: "+12% from yesterday" },
    { name: "Today's orders", value: "24", change: "+4 from yesterday" },
    { name: "Avg. order value", value: "$60.42", change: "+2% from yesterday" },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold text-indigo-600">PRISM</h1>
          ) : (
            <h1 className="text-xl font-bold text-indigo-600">P</h1>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              {sidebarOpen && <span>Home</span>}
            </Button>
            <Button variant="secondary" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              {sidebarOpen && <span>Dashboard</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              {sidebarOpen && <span>Settings</span>}
            </Button>
          </div>

          {sidebarOpen && (
            <div className="mt-8 px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-2 space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  Documentation
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Switch account
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>OR</AvatarFallback>
                </Avatar>
                {sidebarOpen && <span className="text-sm font-medium">Olivia Rhye</span>}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Sales overview</h1>
              <p className="text-gray-500">Your current sales summary and activity.</p>
            </div>

            <div className="flex items-center space-x-3">
              <Select value={view} onValueChange={setView}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Saved view">Saved view</SelectItem>
                  <SelectItem value="SDR view">SDR view</SelectItem>
                </SelectContent>
              </Select>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {dateRange}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>Today</DropdownMenuItem>
                  <DropdownMenuItem>Yesterday</DropdownMenuItem>
                  <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                  <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                  <DropdownMenuItem>Custom range</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline">Filters</Button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {metrics.map((metric) => (
              <Card key={metric.name}>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-gray-500">
                    {metric.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-sm text-green-500">{metric.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="h-80">
              <CardHeader>
                <CardTitle>Sales Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
                  Line Chart Placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="h-80">
              <CardHeader>
                <CardTitle>Monthly Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
                  Bar Chart Placeholder
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Sales */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Sales</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add Agent</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Agent</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Add agent form would go here</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesData.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.customer}</TableCell>
                      <TableCell>{sale.date}</TableCell>
                      <TableCell>{sale.product}</TableCell>
                      <TableCell>${sale.amount}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          sale.status === 'completed' ? 'bg-green-100 text-green-800' :
                          sale.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {sale.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 px-6">
          <p className="text-sm text-gray-500">© 2024 PRISM. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}