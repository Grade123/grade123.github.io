import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center pt-4 bg-[linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:20px_20px] bg-fixed">
        <main className="flex flex-col w-full items-center gap-4 h-min text-center">
          <h1 className="text-4xl">Big Things Comming!</h1>
          <p className="italic">Stay tuned</p>
        </main>
      </div>
      <div className="w-screen flex flex-col items-center justify-center p-4 gap-4">
        <h2 className="text-2xl">Projects</h2>
        <div className="flex gap-4">
          <Card>
            <CardHeader>
              <CardTitle>This is a card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is some content inside this wonderfull card</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>This is a card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is some content inside this wonderfull card</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>This is a card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is some content inside this wonderfull card</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  );
}
