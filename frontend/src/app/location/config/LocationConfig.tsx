export interface ServiceTime {
  day: string;
  time: string;
}

export interface WhatToExpectItem {
  description: string;
}

export interface WhatToExpect {
  enabled: boolean;
  title: string;
  description: string;
  items: WhatToExpectItem[];
}

export interface LocationConfig {
  title: string;
  subtitle: string;
  hero: {
    backgroundImage: string;
  };
  location: {
    address: string;
    mapEmbedUrl: string;
    direction: string;
  };
  serviceTimes: ServiceTime[];
  directions: {
    enabled: boolean;
    car: string;
    bus: string;
    train: string;
  };
  whatToExpect: WhatToExpect;
}

export const locationConfig: LocationConfig = {
  title: "Visit Shalom Gates of Praise Ministries",
  subtitle: "Join our community in Entebbe – Magala, Uganda.",
  hero: {
    backgroundImage: "",
  },
  location: {
    address: "Entebbe – Magala, Uganda",
    mapEmbedUrl: "",
    direction: "https://www.google.com/maps/search/?api=1&query=Shalom+Gates+of+Praise+Ministries+Entebbe+Uganda"
  },
  serviceTimes: [
    { day: "Sunday Worship", time: "Service time to be announced" },
  ],
  directions: {
    enabled: false,
    car: "Take Highway 101 North. Exit at Main Street. Turn right on Church Avenue. Our church will be on your left.",
    bus: "Take Bus 42 to Main Street Station. Walk two blocks north on Main Street. Turn right on Church Avenue.",
    train:
      "Take the Blue Line to Central Station. Exit and walk three blocks east on Central Avenue. Turn left on Church Avenue.",
  },
  whatToExpect: {
    enabled: true,
    title: "What to Expect",
    description:
      "We want to make sure you feel welcome and comfortable when you visit our church. Here's what you can expect:",
    items: [
      {
        description:
          "Our friendly greeters will welcome you as you enter the building.",
      },
      {
        description:
          "Our hospitality team will be happy to help you find a seat and answer any questions you have.",
      },
      {
        description:
          "Our worship team will lead us in a time of worship and praise to God.",
      },
      {
        description:
          "Our pastor will teach us from the Bible and help us apply it to our lives.",
      },
      {
        description:
          "Join us for fellowship and connect with other members of our church family.",
      },
    ],
  },
};
