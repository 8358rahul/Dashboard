
import {
    ChevronDown,
    ChevronRight
} from "lucide-react";
import { useState } from 'react';
import { Badge } from "./ui/badge";

export interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  hasChildren?: boolean;
  badgeCount?: number;
  children?: React.ReactNode;
}

const NavItem = ({ icon, title, hasChildren = false, badgeCount, children }: NavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-1">
      <button
        className="flex items-center justify-between w-full text-left py-1.5"
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <span className="flex items-center gap-3">
          {icon}
          <span className="font-semibold text-sm leading-trim-none tracking-normal text-gray-900 dark:text-gray-100">
            {title}
          </span>
        </span>
        <div className="flex items-center gap-1">
          {badgeCount && (
            <Badge className="text-xs" variant="secondary">
              {badgeCount}
            </Badge>
          )}
          {hasChildren && (
            isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          )}
        </div>
      </button>

      {isExpanded && children && (
        <div className="pl-7 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavItem;