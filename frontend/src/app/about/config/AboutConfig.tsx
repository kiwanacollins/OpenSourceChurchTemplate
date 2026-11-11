import { LucideIcon, Shield, Heart, BookOpen, Cross } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutConfig = {
  hero: {
    title: "About Shalom Gates of Praise Ministries",
    subtitle:
      "We are a community of believers sent on a whole mission, in the whole world, beginning with our very own community in Entebbe – Magala.",
  },
  story: {
    title: "Our Leadership",
    content:
      "Pr. Richard Kirunda serves as the head pastor of Shalom Gates of Praise Ministries. Pr. Charles serves as Resident Pastor, helping the church preach, transform and send believers into the mission God has given us.",
    buttonText: "Learn More",
    image: "/assets/icons/new-placeholder.svg",
    imageAlt: "Our Pastors",
  },
  values: [
    {
      icon: BookOpen,
      title: "FAMILY",
      description:
        "We build a welcoming church family where people grow together in faith, love, and purpose.",
    },
    {
      icon: Shield,
      title: "SERVANT LEADERSHIP",
      description:
        "We raise and equip people to serve God and others with humility, integrity, and excellence.",
    },
    {
      icon: Heart,
      title: "WINNING SOULS",
      description:
        "We share the good news of Jesus Christ and serve our community as part of God's whole-world mission.",
    },
    {
      icon: Cross,
      title: "INTEGRITY",
      description:
        "We pursue honest, faithful lives that reflect the character of Christ in our church, homes, and community.",
    },
    {
      icon: Heart,
      title: "WATER BAPTISM",
      description:
        "Baptism in water is by immersion. It is a direct commandment of our Lord, and it is for believers only. The ordinance is a symbol of the Christian’s identification with Christ in His death, burial, and resurrection. (Matthew 28:19; Romans 6:4; Colossians 2:12; Acts 8:36-39)The following recommendation regarding the water baptismal formula is adopted to wit: “On the confession of your faith in the Lord Jesus Christ, the Son of God, and by His authority, I baptize you in the name of the Father, the Son, and of the Holy Ghost. Amen.",
    },
    {
      icon: BookOpen,
      title: "BAPTISM IN THE HOLY SPIRIT",
      description:
        "“The baptism in the Holy Spirit and fire is a gift from God. It is promised by the Lord Jesus Christ to those who are believers in this dispensation and is received subsequent to the new birth. This experience is accompanied by the initial evidence of speaking in other tongues as the Holy Spirit Himself gives utterance. (Matthew 3:11; John 14:16-17; Acts 1:8; Acts 2:38-39; Acts 19:1-7; Acts 2:4).",
    },
    {
      icon: Heart,
      title: "SANCTIFICATION",
      description:
        "The Bible teaches that without holiness no man can see the Lord. We believe in the doctrine of sanctification as a definite, yet progressive, work of grace, which commences at the time of regeneration and continues until the consummation of salvation. (Hebrews 12:14; 1 Thessalonians 5:23; 2 Peter 3:18; 2 Corinthians 3:18; Philippians 3:12-14; 1 Corinthians 1:30).",
    },
    {
      icon: BookOpen,
      title: "DIVINE HEALING",
      description:
        "Healing is for the physical ills of the human body and is wrought by the power of God through the prayer of faith and by laying on of hands. It is provided in the atonement of Christ, and it is the privilege of every member of the church today. (Mark 16:18; James 5:14-16; 1 Peter 2:24; Matthew 8:17; Isaiah 53:4-5).",
    },
    {
      icon: Heart,
      title: "RESURRECTION OF THE JUST AND THE RETURN OF OUR LORD",
      description:
        "The angels said, “…this same Jesus shall so come in like manner…” (Acts 1:11). His coming is imminent. When He comes, “the dead in Christ shall rise first: then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air” (1 Thessalonians 4:16-17). Following the Tribulation, He shall return to earth, as KING OF KINGS AND LORD OF LORDS; and together with His saints, who shall be kings and priests, He shall reign for a thousand years. (Revelation 19:16; Revelation 20:6).",
    },
    {
      icon: Cross,
      title: "HELL AND ETERNAL RETRIBUTION",
      description:
        "The person who physically dies in his sins without Christ is hopelessly and eternally lost in the lake of fire. Therefore, he has no further opportunity of hearing the Gospel or for repentance. The lake of fire is literal. The terms “eternal” and “everlasting” used in describing the duration of the punishment of the damned in the lake of fire carry the same thought and meaning of endless existence as used in noting the duration of joy and ecstasy of the saints in the presence of God. (Hebrews 9:27; Revelation 19:20; Revelation 20:15).",
    },
  ] as Value[],
  team: [
    {
      name: "Pr. Richard Kirunda",
      role: "Head Pastor",
      image: "/assets/icons/new-placeholder.svg",
    },
    {
      name: "Pr. Charles",
      role: "Resident Pastor",
      image: "/assets/icons/new-placeholder.svg",
    },
    {
      name: "Benjamin",
      role: "Youth Team Leader",
      image: "/assets/icons/new-placeholder.svg",
    },
  ] as TeamMember[],
  mission: {
    title: "Our Mission",
    content:
      "Preach, transform and send. We are a community of believers sent on a whole mission, in the whole world, beginning with our very own.",
  },
};
