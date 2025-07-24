import { activityData } from "../data/activity";

 

export default function ActivityFeed() {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Activity</h2>
      <div className="max-h-64 overflow-y-auto space-y-2">
        {activityData.map((item:any, i:number) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-full bg-purple-200" />
            <p>
              <span className="font-medium">{item.user}</span> {item.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}