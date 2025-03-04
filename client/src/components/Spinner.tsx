import { Loader2 } from "lucide-react";
interface SpinnerProps {
  text?: string;
}

export default function Spinner({ text = "Loading..." }: SpinnerProps) {
  return (
    <div className="fixed inset-0 z-[9999] bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-green-600" />
          <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-green-600/30" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {text}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Please wait while we process your request
          </span>
        </div>
      </div>
    </div>
  );
}