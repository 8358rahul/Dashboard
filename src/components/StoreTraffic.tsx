"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// Chart data for different ranges
const data12m = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 309, mobile: 130 },
  { month: "Jun", desktop: 314, mobile: 140 },
  { month: "Jul", desktop: 350, mobile: 180 },
  { month: "Aug", desktop: 370, mobile: 200 },
  { month: "Sep", desktop: 400, mobile: 220 },
  { month: "Oct", desktop: 420, mobile: 240 },
  { month: "Nov", desktop: 440, mobile: 260 },
  { month: "Dec", desktop: 460, mobile: 280 },
];
const data3m = [
  { month: "Oct", desktop: 420, mobile: 240 },
  { month: "Nov", desktop: 440, mobile: 260 },
  { month: "Dec", desktop: 460, mobile: 280 },
];
const data30d = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  desktop: 300 + Math.round(Math.sin(i / 5) * 30 + Math.random() * 20),
  mobile: 150 + Math.round(Math.cos(i / 6) * 20 + Math.random() * 10),
}));
const data7d = Array.from({ length: 7 }, (_, i) => ({
  day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
  desktop: 350 + Math.round(Math.sin(i) * 20 + Math.random() * 10),
  mobile: 180 + Math.round(Math.cos(i) * 10 + Math.random() * 5),
}));
const data24h = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  desktop: 200 + Math.round(Math.sin(i / 3) * 20 + Math.random() * 10),
  mobile: 100 + Math.round(Math.cos(i / 4) * 10 + Math.random() * 5),
}));
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} as const;

export default function StoreTraffic() {
  return (
    <Card className="rounded-2xl border shadow-sm bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Store traffic</CardTitle>
        <Button variant="outline" size="sm">
          View report
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="12m" className="w-full">
          <TabsList className="mb-4 bg-transparent border-none shadow-none gap-1 flex">
            <TabsTrigger
              value="12m"
              className="rounded-md px-3 py-1.5 text-sm font-medium data-[state=active]:bg-[#f4f4f8] data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-none"
            >
              12 months
            </TabsTrigger>
            <TabsTrigger
              value="3m"
              className="rounded-md px-3 py-1.5 text-sm font-medium data-[state=active]:bg-[#f4f4f8] data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-none"
            >
              3 months
            </TabsTrigger>
            <TabsTrigger
              value="30d"
              className="rounded-md px-3 py-1.5 text-sm font-medium data-[state=active]:bg-[#f4f4f8] data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-none"
            >
              30 days
            </TabsTrigger>
            <TabsTrigger
              value="7d"
              className="rounded-md px-3 py-1.5 text-sm font-medium data-[state=active]:bg-[#f4f4f8] data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-none"
            >
              7 days
            </TabsTrigger>
            <TabsTrigger
              value="24h"
              className="rounded-md px-3 py-1.5 text-sm font-medium data-[state=active]:bg-[#f4f4f8] data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-none"
            >
              24 hours
            </TabsTrigger>
          </TabsList>
          <TabsContent value="12m">
            <ChartContainer
              config={chartConfig}
              className="w-full h-[260px] md:h-[320px]"
            >
              <BarChart data={data12m} barCategoryGap={24} barGap={2}>
                <CartesianGrid vertical={false} stroke="#f4f4f8" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 14, fill: "#888" }}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="#9e7ffa"
                  radius={[0, 0, 4, 4]}
                  maxBarSize={32}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="#e5e7eb"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="3m">
            <ChartContainer
              config={chartConfig}
              className="w-full h-[260px] md:h-[320px]"
            >
              <BarChart data={data3m} barCategoryGap={24} barGap={2}>
                <CartesianGrid vertical={false} stroke="#f4f4f8" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 14, fill: "#888" }}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="#9e7ffa"
                  radius={[0, 0, 4, 4]}
                  maxBarSize={32}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="#e5e7eb"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="30d">
            <ChartContainer
              config={chartConfig}
              className="w-full h-[260px] md:h-[320px]"
            >
              <BarChart data={data30d} barCategoryGap={8} barGap={2}>
                <CartesianGrid vertical={false} stroke="#f4f4f8" />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 12, fill: "#888" }}
                  minTickGap={8}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="#9e7ffa"
                  radius={[0, 0, 4, 4]}
                  maxBarSize={18}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="#e5e7eb"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={18}
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="7d">
            <ChartContainer
              config={chartConfig}
              className="w-full h-[260px] md:h-[320px]"
            >
              <BarChart data={data7d} barCategoryGap={24} barGap={2}>
                <CartesianGrid vertical={false} stroke="#f4f4f8" />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 14, fill: "#888" }}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="#9e7ffa"
                  radius={[0, 0, 4, 4]}
                  maxBarSize={32}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="#e5e7eb"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="24h">
            <ChartContainer
              config={chartConfig}
              className="w-full h-[260px] md:h-[320px]"
            >
              <BarChart data={data24h} barCategoryGap={8} barGap={2}>
                <CartesianGrid vertical={false} stroke="#f4f4f8" />
                <XAxis
                  dataKey="hour"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fontSize: 12, fill: "#888" }}
                  minTickGap={8}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar
                  dataKey="desktop"
                  stackId="a"
                  fill="#9e7ffa"
                  radius={[0, 0, 4, 4]}
                  maxBarSize={18}
                />
                <Bar
                  dataKey="mobile"
                  stackId="a"
                  fill="#e5e7eb"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={18}
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
