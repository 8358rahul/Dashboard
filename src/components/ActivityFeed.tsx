import { activityData } from "../data/activity";

interface ActivityItem {
  user: string;
  action: string;
  image: string;
  online?: boolean; // optional flag for green dot
}

export default function ActivityFeed() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Activity</h2>
        <button className="text-sm hover:underline">View All</button>
      </div>

      {/* Activity List */}
      <div className="overflow-y-auto space-y-4">
        {activityData.map((item: ActivityItem, i: number) => (
          <div key={i} className="flex items-start gap-3">
            {/* Profile Picture with optional online dot */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              /> 
            </div>

            {/* Name and action */}
            <div className="text-sm leading-tight">
              <div className="flex items-center gap-1 justify-between">
              <p className="font-semibold text-gray-900 dark:text-white">{item.user}</p>
               {item.online && (
                <span className="h-2.5 w-2.5 bg-green-500 rounded-full border border-white" />
              )}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Purchased{" "}
                <span className="text-purple-600 font-medium hover:underline cursor-pointer">
                  {item.action}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
