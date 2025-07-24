import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export default function SalesOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card>
        <CardHeader>Today's Revenue</CardHeader>
        <CardContent>
          $1,280 <Badge variant="secondary">+10%</Badge>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Today's Orders</CardHeader>
        <CardContent>
          14 <Badge variant="secondary">+12%</Badge>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Avg. Order Value</CardHeader>
        <CardContent>
          $91.42 <Badge variant="destructive">-2%</Badge>
        </CardContent>
      </Card>
    </div>
  );
}