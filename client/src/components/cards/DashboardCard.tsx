import { ReactNode } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: number;
  trendLabel?: string;
  className?: string;
}

export function DashboardCard({
  title,
  value,
  icon,
  trend,
  trendLabel,
  className
}: DashboardCardProps) {
  const isPositiveTrend = trend && trend > 0;

  return (
    <div className={`
      relative overflow-hidden rounded-xl border bg-white p-6
      shadow-sm transition-all hover:shadow-lg dark:bg-gray-800
      ${className}
    `}>
      <div className="flex justify-between gap-2">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold mt-2">{value}</p>
          
          {trend && (
            <div className="mt-3 flex items-center gap-1">
              {isPositiveTrend ? (
                <ArrowUp className="text-green-500" size={16} />
              ) : (
                <ArrowDown className="text-red-500" size={16} />
              )}
              <span className={`text-sm ${
                isPositiveTrend ? 'text-green-500' : 'text-red-500'
              }`}>
                {Math.abs(trend)}%
              </span>
              {trendLabel && (
                <span className="text-sm text-gray-500">
                  {trendLabel}
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className="rounded-full bg-gray-100/80 p-3 dark:bg-gray-900/80">
          {icon}
        </div>
      </div>
    </div>
  );
}