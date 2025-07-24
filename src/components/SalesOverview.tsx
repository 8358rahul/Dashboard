import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MoreVertical, ArrowUpRight, ArrowDownRight } from "lucide-react";

function StatCard({ label, value, change, positive }: { label: string; value: string; change: string; positive?: boolean }) {
  return (
    <Card className="bg-white border rounded-xl shadow-sm p-5 flex flex-col justify-between min-w-[220px] h-[120px]">
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm text-muted-foreground font-medium">{label}</span>
        <MoreVertical className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex items-end justify-between flex-1">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        <Badge
          className={`flex items-center gap-1 px-2 py-0.5 text-xs font-medium border-none ${positive === undefined ? '' : positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
          {positive === undefined ? null : positive ? (
            <ArrowUpRight className="w-3 h-3 text-green-500" />
          ) : (
            <ArrowDownRight className="w-3 h-3 text-red-500" />
          )}
          {change}
        </Badge>
      </div>
    </Card>
  );
}
 

export default function SalesOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <StatCard label="Today's revenue" value="$1,280" change="10%" positive />
      <StatCard label="Today's orders" value="14" change="12%" positive />
      <StatCard label="Avg. order value" value="$91.42" change="2%" positive={false} />
    </div>
  );
}
