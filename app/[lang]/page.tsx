import { getDictionary } from "./dictionaries";

export default async function Home(
  {params} : {params : Promise<{lang : "en" | "no"}>}
) {
  const {lang} = await params
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col w-full items-center gap-4 h-min text-center">
      <h1 className="text-4xl">Big Things Comming!</h1>
      <p className="italic">Stay tuned</p>
      <p>{dict.home}</p>
    </main>
  );
}
