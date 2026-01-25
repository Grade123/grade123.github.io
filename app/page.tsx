import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const projects = [
    {
      title: "Portfolio",
      description: "Website where I show off some of my work",
      badges: ["React", "Next", "Shadcn", "Github Actions", "Github Pages"],
    },
    {
      title: "Driveo",
      description:
        "Car rental site application. Complete with backend and dashboard. \nApplication developed during web and application courses at NTNU",
      badges: ["Fullstack", "React", "Spring-Boot", "Postgres", "nginx", "Javascript", "Rest-Api", "JWT", "Axios"],
    },
    {
      title: "Todolist application",
      description: "Todolist application with ability for creating multiple todolists. \nApplication developed during fifth semester at NTNU",
      badges: ["Flutter", "Android"],
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
      <div className="w-full p-4 flex flex-col items-center gap-4">
        <h2 className="text-3xl">Projects</h2>
        <Carousel className="w-3xl max-w-screen p-10">
          <CarouselPrevious />
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>

  );
}
