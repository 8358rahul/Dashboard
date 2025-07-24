import { Calendar as CalendarIcon, ListFilter, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";

export default function FilterBar() {
  const [tab, setTab] = useState("default");

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: new Date(2024, 0, 30),
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


  return (
    <div className="flex flex-wrap items-center justify-between gap-4 w-full">
      {/* Segmented control */}
      <Tabs value={tab} onValueChange={setTab} className="w-auto">
        <TabsList className="border border-input bg-white rounded-lg overflow-hidden p-0 h-10 min-w-[320px]">
          <TabsTrigger
            value="default"
            className="rounded-none border-r border-input h-10 px-4 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-foreground font-medium"
          >
            Default
          </TabsTrigger>
          <TabsTrigger
            value="saved"
            className="rounded-none border-r border-input h-10 px-4 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-foreground font-medium"
          >
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              Saved view
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="sdr"
            className="rounded-none h-10 px-4 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:text-foreground font-medium"
          >
            SDR view
          </TabsTrigger>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-none h-10 px-3 border-l border-input"
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
              className="w-full sm:w-[280px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatRange()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[90vw] max-w-[95vw] sm:max-w-[700px] p-4 rounded-2xl shadow-2xl bg-white">
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="text-lg font-semibold">Select Date</div>

              {/* Calendars */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={handleSelect}
                  defaultMonth={date?.from}
                  numberOfMonths={1}
                  className="rounded-lg border shadow-sm sm:flex-1"
                />
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={handleSelect}
                  defaultMonth={nextMonth}
                  numberOfMonths={1}
                  className="rounded-lg border shadow-sm sm:flex-1 hidden sm:block"
                />
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Apply
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button variant="outline" className="flex items-center gap-2">
          <ListFilter className="w-4 h-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
