import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";

export default function FilterBar() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="flex flex-wrap gap-4">
      <Input placeholder="Search" className="w-64" />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Pick a date</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    </div>
  );
}