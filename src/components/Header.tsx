import { Button } from "./ui/button";

 

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Sales overview</h1>
      <div className="space-x-2">
        <Button variant="outline">Export report</Button>
        <Button>Invite</Button>
      </div>
    </div>
  );
}