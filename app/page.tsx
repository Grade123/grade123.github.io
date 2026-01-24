import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center pt-4 bg-[linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:20px_20px] bg-fixed">
        <main className="flex flex-col w-full items-center gap-4 h-min text-center">
          <h1 className="text-4xl">Big Things Coming!</h1>
          <p className="italic">Stay tuned</p>
        </main>
      </div>
      {/* <div className="w-full flex flex-col items-center justify-center pt-4 pb-4 gap-4">
        <h2 className="text-2xl">Projects</h2>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Website where i show off some of my work</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Driveo</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Car rental site application. Complete with backend and dashboard</p>
              <p>Application developed during web and application courses at NTNU</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Train Departure application</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Commandline interface for managing train departures</p>
              <p>Application developed during first semester at NTNU</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Chaos Game</CardTitle>
            </CardHeader>
            <CardContent>
              <p>JavaFX application for displaying mathematical fractals based on a list of transformations</p>
              <p>Application developed during second semester at NTNU</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Greenhouse networking application</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Server and clients for greenhouse management, focusing on network communication between users device and sensors in a greenhouse</p>
              <p>Application developed during third semester at NTNU</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Todolist application</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Todolist application with ability for creating multiple todolists</p>
              <p>Application developed during fifth semester at NTNU</p>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>

  );
}
