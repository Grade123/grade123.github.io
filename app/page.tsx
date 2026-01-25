import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Driveo",
      description:
        "Car rental site application where users can register their own cars for rental, and rent cars from others. The application is a full stack application using spring-boot and postgres on the backend and React on the frontend. \n Developed as a group project during web and application courses at NTNU",
      badges: ["Fullstack", "React", "Spring-Boot", "Postgres", "nginx", "Javascript", "Rest-Api", "JWT", "Axios"],
      image: {
        src: "/Driveo.png",
        alt: "Driveo screenshot",
      }
    },
    {
      title: "Todolist application",
      description: "Todolist application with a simple and clean interface allowing for multiple todolists. The application is built with Flutter and has been tested on Android devices. \nApplication developed during fifth semester at NTNU",
      badges: ["Flutter", "Android"],
      image: {
        src: "/Todo.jpg",
        alt: "Todolist screenshot",
      }
    },
    {
      title: "Portfolio",
      description: "Small personal project where I show of my work. \nBuilt with Next.js and Shadcn/ui. Hosted with Github Pages and automated deploys with Github Actions.",
      badges: ["React", "Next", "Shadcn", "Github Actions", "Github Pages"],
      image: {
        src: "/Portfolio.png",
        alt: "Portfolio screenshot",
      }
    },
  ]

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center pt-4 bg-[linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] bg-size-[40px_40px] bg-position-[20px_20px] bg-fixed">
        <main className="flex flex-col items-center gap-4 h-min text-left">
          <h1 className="text-8xl">
            <span className="font-bold">Stian&apos;s</span> portfolio
          </h1>
          <h2 className="text-4xl">Big Things Coming!</h2>
          <p className="italic">Stay tuned</p>
        </main>
      </div>
      <div className="w-full p-16 flex flex-col items-center gap-4">
        <h2 className="text-3xl mb-10">Projects</h2>
        <div className="w-full max-w-4xl flex flex-col gap-60">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-8">
              
              <Image className="rounded-2xl aspect-video object-scale-down bg-foreground" src={project.image.src} alt={project.image.alt} sizes="100vw" width={896} height={504}/>
              <div>
                <h1 className="text-2xl mb-4">{project.title}</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge, index) => (
                      <Badge key={index}>{badge}</Badge>
                    ))}
                  </div>
                  <Separator />
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>

  );
}
