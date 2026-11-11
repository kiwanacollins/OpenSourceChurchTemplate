import { NextResponse } from "next/server";
import type { Sermon } from "@/app/watch/configs/WatchConfig";

export async function GET() {
  const mockSermons: Sermon[] = [
    {
      id: "sermon-1",
      title: "The Foundation of Faith",
      date: "2024-01-07",
      speaker: "Pr. Richard Kirunda",
      description:
        "Understanding the core principles that build a strong faith foundation.",
      platform: "youtube",
      videoId: "abc123xyz",
      seriesId: "faith-foundations",
      thumbnailUrl: "/assets/images/sermon-thumb-1.jpg",
    },
    {
      id: "sermon-2",
      title: "Walking in Faith",
      date: "2024-01-14",
      speaker: "Pr. Richard Kirunda",
      description: "Practical steps to living out your faith in daily life.",
      platform: "facebook",
      videoId: "987654321",
      seriesId: "faith-foundations",
      thumbnailUrl: "/assets/images/sermon-thumb-2.jpg",
    },
    {
      id: "sermon-3",
      title: "The Power of Persistent Prayer",
      date: "2024-03-03",
      speaker: "Pr. Charles",
      description:
        "Discovering how persistence in prayer can transform your life.",
      platform: "youtube",
      videoId: "ghi789rst",
      seriesId: "power-of-prayer",
      thumbnailUrl: "/assets/images/events-prayer.jpg",
    },
    {
      id: "sermon-4",
      title: "Kingdom Principles",
      date: "2024-05-05",
      speaker: "Pr. Richard Kirunda",
      description: "Understanding the fundamental principles of God's Kingdom.",
      platform: "facebook",
      videoId: "jkl012mno",
      seriesId: "kingdom-living",
      thumbnailUrl: "/assets/images/about-leadership.jpg",
    },
  ];

  return NextResponse.json(mockSermons);
}
