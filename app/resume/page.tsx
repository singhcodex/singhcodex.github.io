"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaDocker,
  FaFigma,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque tempore beatae eveniet.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Simernjeet Singh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+49) 176 470 71125",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "linkedIn",
      fieldValue: "simernjeet-singh",
    },
    {
      fieldName: "Nationallity",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "singh.hessen@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, German",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experince",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, nesciunt impedit animi ipsum vel sed tenetur est laudantium alias vero voluptatum corporis provident.",
  projects: [
    {
      company: "Business IT Solution UG",
      position: "Full stack Developer",
      duration: "2022 - 2024",
    },
    {
      company: "Newspark Techonolgy",
      position: "Frontend Web Developer",
      duration: "2022 - 2024",
    },
  ],
};

{
  /** education */
}

const education = {
  icon: "",
  title: "My education",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate non quis alias repellat. Nulla, perferendis sequi. Blanditiis iste laudantium ab",
  insititues: [
    {
      institute: "University of Appllied Science",
      degree: "Angewandte Informatik",
      duration: "2020 - 2024",
    },
    {
      institute: "Business IT Solution UG",
      degree: "Computer Science",
      duration: "2016 - 2019",
    },
    ,
    {
      institute: "FreeCode Camp Online",
      degree: "Responsive Web Design",
      duration: "2017 - 2018",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, nesciunt impedit animi ipsum vel sed tenetur est laudantium alias vero voluptatum corporis provident.",
  skillLists: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <FaFigma />,
      name: "figma design",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/**experince */}
            <TabsContent value={"experience"} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.projects.map((project, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {project.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {project.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{project.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/**education */}
            <TabsContent value={"education"} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.insititues.map((institute, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {institute?.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {institute?.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {institute?.institute}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/**skils */}
            <TabsContent value={"skills"} className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillLists.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/**about */}
            <TabsContent
              value={"about"}
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
