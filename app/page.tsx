"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import VideoSkeleton from "./components/VideoSkeleton";

// 模拟视频数据
const videos = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/seed/1/360/200",
    title: "如何制作美味寿司 | 日本料理教程",
    channel: "美食频道",
    views: "12万",
    timestamp: "3天前",
    avatar: "https://picsum.photos/seed/avatar1/40/40"
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/seed/2/360/200",
    title: "2024年最新Web开发技术栈详解",
    channel: "编程学习",
    views: "5.4万",
    timestamp: "1周前",
    avatar: "https://picsum.photos/seed/avatar2/40/40"
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/seed/3/360/200",
    title: "30分钟快速健身训练 | 零器械居家运动",
    channel: "健康生活",
    views: "8.9万",
    timestamp: "2天前",
    avatar: "https://picsum.photos/seed/avatar3/40/40"
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/seed/4/360/200",
    title: "巴赫：G弦上的咏叹调 | 古典音乐欣赏",
    channel: "古典音乐殿堂",
    views: "3.2万",
    timestamp: "5天前",
    avatar: "https://picsum.photos/seed/avatar4/40/40"
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/seed/5/360/200",
    title: "探索宇宙的奥秘：黑洞是什么？",
    channel: "科学探索",
    views: "15.6万",
    timestamp: "1天前",
    avatar: "https://picsum.photos/seed/avatar5/40/40"
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/seed/6/360/200",
    title: "React 18新特性详解 | 性能优化指南",
    channel: "前端开发",
    views: "4.7万",
    timestamp: "4天前",
    avatar: "https://picsum.photos/seed/avatar6/40/40"
  },
  {
    id: 7,
    thumbnail: "https://picsum.photos/seed/7/360/200",
    title: "意大利面的100种做法 | 第一集",
    channel: "老饭骨",
    views: "9.3万",
    timestamp: "6天前",
    avatar: "https://picsum.photos/seed/avatar7/40/40"
  },
  {
    id: 8,
    thumbnail: "https://picsum.photos/seed/8/360/200",
    title: "2024年最值得学习的编程语言",
    channel: "IT教程",
    views: "7.8万",
    timestamp: "2周前",
    avatar: "https://picsum.photos/seed/avatar8/40/40"
  },
  {
    id: 9,
    thumbnail: "https://picsum.photos/seed/9/360/200",
    title: "每天15分钟，轻松学习英语口语",
    channel: "英语学习",
    views: "6.5万",
    timestamp: "3天前",
    avatar: "https://picsum.photos/seed/avatar9/40/40"
  },
  {
    id: 10,
    thumbnail: "https://picsum.photos/seed/10/360/200",
    title: "摄影入门指南：构图的基本原则",
    channel: "摄影教学",
    views: "4.1万",
    timestamp: "1周前",
    avatar: "https://picsum.photos/seed/avatar10/40/40"
  },
  {
    id: 11,
    thumbnail: "https://picsum.photos/seed/11/360/200",
    title: "人工智能发展史：从图灵测试到ChatGPT",
    channel: "科技前沿",
    views: "11.2万",
    timestamp: "5天前",
    avatar: "https://picsum.photos/seed/avatar11/40/40"
  },
  {
    id: 12,
    thumbnail: "https://picsum.photos/seed/12/360/200",
    title: "中国传统文化：茶道艺术详解",
    channel: "文化传承",
    views: "5.9万",
    timestamp: "8天前",
    avatar: "https://picsum.photos/seed/avatar12/40/40"
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    videoId: number;
  } | null>(null);
  
  // 模拟加载状态
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // 处理右键菜单
  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  // 视频预览定时器
  const previewTimer = useRef<NodeJS.Timeout | null>(null);

  const handleVideoHover = (videoId: number) => {
    previewTimer.current = setTimeout(() => {
      setHoveredVideo(videoId);
    }, 800); // 悬停 0.8 秒后显示预览
  };

  const handleVideoLeave = () => {
    if (previewTimer.current) {
      clearTimeout(previewTimer.current);
    }
    setHoveredVideo(null);
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>, videoId: number) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      videoId
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-10 h-14">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="text-xl font-bold">VideoApp</div>
          <input 
            type="search"
            placeholder="搜索视频..."
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 w-96"
          />
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 cursor-pointer overflow-hidden border-2 border-transparent hover:border-gray-300 transition-colors">
            <Image
              src="https://picsum.photos/seed/user/40/40"
              alt="User avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {isLoading ? (
            // 显示加载骨架屏
            Array(8).fill(0).map((_, index) => (
              <VideoSkeleton key={index} />
            ))
          ) : (
            // 显示视频列表
            videos.map(video => (
              <div
                key={video.id}
                onMouseEnter={() => handleVideoHover(video.id)}
                onMouseLeave={handleVideoLeave}
                onContextMenu={(e) => handleContextMenu(e, video.id)}
                className="relative"
              >
                <Link 
                  href={`/video/${video.id}`}
                  className="flex flex-col gap-2 cursor-pointer group"
                >
                  {/* 视频缩略图 */}
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    {/* 视频预览覆盖层 */}
                    {hoveredVideo === video.id && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
                        <span className="text-sm">正在加载预览...</span>
                      </div>
                    )}
                  </div>
                  
                  {/* 视频信息 */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 flex-shrink-0">
                      <Image
                        src={video.avatar}
                        alt={video.channel}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{video.channel}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {video.views} 次观看 · {video.timestamp}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* 右键菜单 */}
                {contextMenu?.videoId === video.id && (
                  <div
                    className="fixed bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50"
                    style={{
                      top: contextMenu.y,
                      left: contextMenu.x,
                    }}
                  >
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                      稍后观看
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                      添加到播放列表
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                      分享
                    </button>
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                      不感兴趣
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
