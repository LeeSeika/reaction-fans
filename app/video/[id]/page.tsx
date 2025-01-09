import Image from "next/image";

// 模拟视频详情数据
const videoDetail = {
  id: 1,
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // 示例视频URL
  title: "如何制作美味寿司 | 日本料理教程",
  views: "12万",
  timestamp: "2024年3月1日",
  likes: "1.2万",
  channel: {
    name: "美食频道",
    avatar: "https://picsum.photos/seed/avatar1/40/40",
    subscribers: "50万"
  },
  description: "在这个视频中，我们将学习如何制作正宗的日本寿司。包括醋饭的调制、食材的选择和处理、以及卷寿司的技巧。希望这个教程能帮助你在家制作出美味的寿司。\n\n时间轴：\n0:00 开场白\n1:30 材料准备\n5:00 醋饭制作\n10:00 寿司卷制技巧\n15:00 摆盘展示",
};

// 模拟评论数据
const comments = [
  {
    id: 1,
    user: {
      name: "美食爱好者",
      avatar: "https://picsum.photos/seed/comment1/40/40"
    },
    content: "非常详细的教程，学到了很多！",
    likes: 234,
    timestamp: "3天前",
    replies: 12
  },
  // ... 更多评论
];

// 模拟推荐视频数据
const recommendedVideos = [
  {
    id: 2,
    thumbnail: "https://picsum.photos/seed/2/360/200",
    title: "日式拉面制作教程 | 从汤底到配料的完整指南",
    channel: "美食频道",
    views: "8.4万",
    timestamp: "5天前",
  },
  // ... 更多推荐视频
];

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 - 可以复用主页的导航栏组件 */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-10 h-14">
        {/* ... 导航栏内容 */}
      </nav>

      <main className="pt-20 px-4 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* 左侧：视频播放器和信息 */}
          <div className="flex flex-col gap-4">
            {/* 视频播放器 */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                视频播放器占位符
              </div>
            </div>

            {/* 视频标题和数据 */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">{videoDetail.title}</h1>
              
              {/* 频道信息和操作按钮 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0">
                    <Image
                      src={videoDetail.channel.avatar}
                      alt={videoDetail.channel.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{videoDetail.channel.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {videoDetail.channel.subscribers} 位订阅者
                    </p>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium">
                    订阅
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    👍 {videoDetail.likes}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    分享
                  </button>
                </div>
              </div>

              {/* 视频描述 */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                <p className="whitespace-pre-line">{videoDetail.description}</p>
              </div>

              {/* 评论区 */}
              <div className="mt-4">
                <h3 className="font-medium mb-4">评论</h3>
                <div className="flex flex-col gap-4">
                  {comments.map(comment => (
                    <div key={comment.id} className="flex gap-4">
                      <div className="w-10 h-10 flex-shrink-0">
                        <Image
                          src={comment.user.avatar}
                          alt={comment.user.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{comment.user.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{comment.timestamp}</span>
                        </div>
                        <p className="mt-1">{comment.content}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <button className="flex items-center gap-1">👍 {comment.likes}</button>
                          <button>回复</button>
                          <span className="text-gray-600 dark:text-gray-400">{comment.replies} 条回复</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：推荐视频 */}
          <div className="flex flex-col gap-4">
            {recommendedVideos.map(video => (
              <div key={video.id} className="flex gap-2">
                <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{video.channel}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {video.views} 次观看 · {video.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 