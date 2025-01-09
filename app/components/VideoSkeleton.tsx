export default function VideoSkeleton() {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      {/* 视频缩略图骨架 */}
      <div className="relative aspect-video rounded-lg bg-gray-200 dark:bg-gray-700" />
      
      {/* 视频信息骨架 */}
      <div className="flex gap-3">
        {/* 头像骨架 */}
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
        <div className="flex-1">
          {/* 标题骨架 */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2" />
          {/* 统计信息骨架 */}
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
} 