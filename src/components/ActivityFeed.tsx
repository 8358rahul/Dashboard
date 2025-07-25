import { activityData } from "../data/activity";

interface ActivityItem {
  user: string;
  action: string;
  image?: string;
  online?: boolean; 
}

export default function ActivityFeed() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Activity
        </h2>
        <button className="text-sm hover:underline">View All</button>
      </div>

      {/* Activity List */}
      <div className="space-y-4 ">
        {activityData.map((item: ActivityItem, i: number) => (
          <div key={i} className="flex items-start gap-3"> 
            <div className="relative">
              <img
                src={item?.image ? item.image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
            </div>
 
            <div className="text-sm leading-tight">
              <p className="font-semibold text-gray-900 dark:text-white">
                {item.user}
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                Purchased{" "}
                <span className="text-purple-600 font-medium hover:underline cursor-pointer">
                  {item.action}
                </span>
              </p>
            </div>
            {item.online && (
              <div
                className="h-2 w-2 bg-green-500 rounded-full
                 
                "
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
