"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

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

// Example team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tung Tung Sahur",
    role: "CEO",
    bio: "Anomali ini blablablabalbalbalbalvabvablablablalbalbalb",
    imageUrl:
      "https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      email: "mailto:alex@example.com",
    },
  },
  {
    id: 2,
    name: "Murata",
    role: "Creative Director",
    bio: "Murata brings artistry to technology, leading our design team with an eye for detail and a passion for user experience that transforms digital interfaces into immersive journeys.",
    imageUrl:
      "https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:sam@example.com",
    },
  },
  {
    id: 3,
    name: "Tirr.html",
    role: "Technical Lead",
    bio: "With a knack for solving complex problems, Jordan oversees our technical strategy and ensures our solutions are robust, scalable, and built with cutting-edge technologies.",
    imageUrl:
      "https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Riley Patel",
    role: "Product Strategy",
    bio: "Riley crafts our product vision, connecting client needs with technical possibilities. Their strategic insight ensures every project delivers maximum value and impact.",
    imageUrl:
      "https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067",
    socialLinks: {
      linkedin: "https://linkedin.com",
      email: "mailto:riley@example.com",
    },
  },
  {
    id: 5,
    name: "Casey Wilson",
    role: "Client Success Manager",
    bio: "Casey ensures every client interaction exceeds expectations. With a background in psychology and technology, they create partnerships that lead to long-term success.",
    imageUrl:
      "https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      email: "mailto:casey@example.com",
    },
  },
  {
    id: 6,
    name: "Avery Kim",
    role: "UX Research Lead",
    bio: "Avery bridges the gap between users and technology, using data-driven insights to shape intuitive digital experiences that resonate with people's real needs.",
    imageUrl:
      "https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
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
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500"
                  style={{
                    transform:
                      activeId === member.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              {/* Overlay content */}
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

              {/* Default content */}
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
