import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export default function SalesReport() {
  return (
    <div>
      <Tabs defaultValue="12m">
        <TabsList>
          <TabsTrigger value="12m">12 months</TabsTrigger>
          <TabsTrigger value="3m">3 months</TabsTrigger>
          <TabsTrigger value="30d">30 days</TabsTrigger>
          <TabsTrigger value="7d">7 days</TabsTrigger>
          <TabsTrigger value="24h">24 hours</TabsTrigger>
        </TabsList>
        <TabsContent value="12m">
          <div className="h-48 bg-gray-200 rounded-md" /> {/* Placeholder for chart */}
        </TabsContent>
        {/* Add more TabsContent for each */}
      </Tabs>
    </div>
  );
}