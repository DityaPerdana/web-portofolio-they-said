"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Habib Herdiansyah",
    role: "CEO",
    bio: "I Am A Man Who Like Know About Hardware And Full Curios About How It Work,I Am a System Desktop Developer,I Like C++,C,And Rust , My Intention Is Making High Performance Desktop App For Helping People With Their Low End Devices.My Moto Is “I Am Not Average” Because I Know God Give Me A Potential And My Job Is Reach The Peak Potential.",
    imageUrl: "/photoMember/Habib.webp",
    socialLinks: {},
  },
  {
    id: 2,
    name: "Ramses Corda",
    role: "CTO",
    bio: "fuck, hell yea, im a cable.",
    imageUrl: "/photoMember/RamsesCorda.webp",
    socialLinks: {},
  },
  {
    id: 3,
    name: "Muhammad Abdullah Azzam",
    role: "CFO",
    bio: "My plan always success, with my mind gifted by god.",
    imageUrl: "/photoMember/Azzam.webp",
    socialLinks: {},
  },
  {
    id: 4,
    name: "Athar Delano Shaby",
    role: "Artist",
    bio: "I can do it because god can too",
    imageUrl: "/photoMember/AtharDelano.webp",
    socialLinks: {},
  },
  {
    id: 5,
    name: "Abdurrahman Yasir",
    role: "Editor, Artist",
    bio: "hasn't limit like my imagination.",
    imageUrl: "/photoMember/Yasir.webp",
    socialLinks: {},
  },
  {
    id: 6,
    name: "Vharel",
    role: "Business Director",
    bio: "We work with capability🤝.",
    imageUrl: "/photoMember/Vharel.webp",
    socialLinks: {},
  },
  {
    id: 7,
    name: "Fatir Adzan Satia",
    role: "Mobile Developer",
    bio: "If other people can, then I should be able to too.",
    imageUrl: "/photoMember/Fatir.webp",
    socialLinks: {},
  },
  {
    id: 8,
    name: "Muhammad Farhan",
    role: "Mobile Developer",
    bio: "Seorang anak yang suka mengambil keuntungan dari pengalaman orang lain.",
    imageUrl: "/photoMember/Farhan.webp",
    socialLinks: {},
  },
  {
    id: 9,
    name: "Raditya Alfarisi",
    role: "Fullstack Developer",
    bio: "I don’t idolize the past — I build for the future. While some chase microseconds and write code only machines can love, I craft systems that scale, collaborate, and evolve. I believe good code is not just fast, but readable, testable, and human-centered. My tools may be abstracted, but my vision is clear: real-world impact, modern tech, and empowering others through clean, accessible development. I don’t need to prove performance in benchmarks — I prove it in products that people actually use.",
    imageUrl: "/photoMember/raditya.webp",
    socialLinks: {},
  },
];

export function TeamSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            The People
          </div>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Behind every successful project is our diverse team of creative
            thinkers, technical experts, and strategic minds.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  width={1024}
                  height={1024}
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500"
                  style={{
                    transform:
                      activeId === member.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition-opacity duration-300"
                style={{
                  opacity: activeId === member.id ? 1 : 0,
                  pointerEvents: activeId === member.id ? "auto" : "none",
                }}
              >
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg font-medium text-purple-300">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-gray-200">{member.bio}</p>

                <div className="mt-4 flex space-x-3">
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                    >
                      <IconBrandTwitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                    >
                      <IconBrandLinkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                    >
                      <IconBrandGithub className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a
                      href={member.socialLinks.email}
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                    >
                      <IconMail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div
                className="p-6 dark:bg-gray-800 transition-all duration-200"
                style={{
                  opacity: activeId === member.id ? 0 : 1,
                  transform:
                    activeId === member.id
                      ? "translateY(20px)"
                      : "translateY(0)",
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-black dark:text-white">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
