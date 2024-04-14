import Axios from "npm:axios";
import { Lover } from "../types.ts";
import Lovers from "../components/Lovers.tsx";

export default async function Home() {
  try {
    const response = await Axios.get<Lover[]>(
      "https://lovers.deno.dev/",
    );
    const lovers = response.data;
    return (
      <div class="flex-column">
        <div class="flex-row flex-around">
        {lovers.map((l) => (
          <Lovers name={l.name} photo={l.photo} age={l.age} description={l.description}/>
        ))}
      </div>
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
