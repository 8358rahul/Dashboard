import { Calendar as CalendarIcon, ListFilter, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import StatusFilterModal from "./StatusFilterModal";

export default function FilterBar() {
  const [tab, setTab] = useState<string>("default");
  const [filters, setFilters] = useState<string[]>([])
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 6, 20),
    to: new Date(2025, 6, 30),
  });

  const nextMonth = new Date(date?.from ?? new Date());
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  const handleSelect = (range: DateRange | undefined) => {
    setDate(range);
  };

  const formatRange = () => {
    if (!date?.from || !date?.to) return "Pick a date";
    return `${format(date.from, "LLL dd, y")} - ${format(
      date.to,
      "LLL dd, y"
    )}`;
  };

  const getDateRange = (label: string): DateRange => {
    const now = new Date();
    const today = new Date(now);
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);

    switch (label) {
      case "Today":
        return { from: today, to: today };
      case "Yesterday":
        return { from: yesterday, to: yesterday };
      case "This week": {
        const start = new Date(now);
        start.setDate(now.getDate() - now.getDay());
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return { from: start, to: end };
      }
      case "Last week": {
        const start = new Date(now);
        start.setDate(now.getDate() - now.getDay() - 7);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return { from: start, to: end };
      }
      case "This month": {
        const start = new Date(now.getFullYear(), now.getMonth(), 1);
        const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        return { from: start, to: end };
      }
      case "Last month": {
        const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const end = new Date(now.getFullYear(), now.getMonth(), 0);
        return { from: start, to: end };
      }
      case "This year": {
        const start = new Date(now.getFullYear(), 0, 1);
        const end = new Date(now.getFullYear(), 11, 31);
        return { from: start, to: end };
      }
      case "Last year": {
        const start = new Date(now.getFullYear() - 1, 0, 1);
        const end = new Date(now.getFullYear() - 1, 11, 31);
        return { from: start, to: end };
      }
      case "All time": {
        return { from: new Date(2000, 0, 1), to: now };
      }
      default:
        return { from: today, to: today };
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 w-full">
      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="w-auto">
        <TabsList className="border border-input bg-white dark:bg-zinc-900 dark:border-zinc-800 rounded-lg overflow-hidden p-0 h-10 min-w-[320px]">
          <TabsTrigger
            value="default"
            className="rounded-none border-r border-input dark:border-zinc-800 h-10 px-4 font-medium cursor-pointer
                 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900
                 data-[state=active]:text-foreground dark:data-[state=active]:text-white
                 data-[state=active]:shadow-none"
          >
            Default
          </TabsTrigger>

          <TabsTrigger
            value="saved"
            className="rounded-none border-r border-input dark:border-zinc-800 h-10 px-4 font-medium cursor-pointer
                 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900
                 data-[state=active]:text-foreground dark:data-[state=active]:text-white
                 data-[state=active]:shadow-none"
          >
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              Saved view
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="sdr"
            className="rounded-none h-10 px-4 font-medium cursor-pointer
                 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900
                 data-[state=active]:text-foreground dark:data-[state=active]:text-white
                 data-[state=active]:shadow-none"
          >
            SDR view
          </TabsTrigger>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-none h-10 px-3 border-l border-input dark:border-zinc-800 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </TabsList>
      </Tabs>

      {/* Date range and filter */}
      <div className="flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="justify-start text-left font-normal"
            >
              <CalendarIcon className="h-4 w-4" />
              {formatRange()}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[90vw] max-w-[95vw] sm:max-w-[700px] p-4 rounded-2xl shadow-2xl bg-white dark:bg-zinc-900 dark:text-white">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Sidebar */}
              <div className="sm:w-[160px] flex flex-col gap-1 text-sm">
                {[
                  "Today",
                  "Yesterday",
                  "This week",
                  "Last week",
                  "This month",
                  "Last month",
                  "This year",
                  "Last year",
                  "All time",
                ].map((label) => (
                  <button
                    key={label}
                    onClick={() => setDate(getDateRange(label))}
                    className="px-3 py-2 text-left rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Calendars */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={handleSelect}
                  defaultMonth={date?.from}
                  numberOfMonths={1}
                  className="rounded-lg border shadow-sm sm:flex-1 custom-calendar dark:border-zinc-800 dark:bg-zinc-900"
                />
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={handleSelect}
                  defaultMonth={nextMonth}
                  numberOfMonths={1}
                  className="rounded-lg border shadow-sm sm:flex-1 hidden sm:block custom-calendar dark:border-zinc-800 dark:bg-zinc-900"
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between gap-2 mt-4">
              <div className="flex gap-2">
                <Button variant="outline">
                  {date?.from?.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Button>
                <Button variant="outline">
                  {date?.to?.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-purple-600 text-white dark:bg-purple-500"
                  onClick={() => setOpen(false)}
                >
                  Apply
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Filters Button */}
      <StatusFilterModal onApply={setFilters} button={
          <Button variant="outline" className="flex items-center gap-2">
          <ListFilter className="w-4 h-4" />
         <span className="hidden sm:inline">Filters</span>
        </Button>
      }/>

      </div>
    </div>
  );
}
