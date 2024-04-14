import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Lover } from "../types.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Lover>) => {
    try {
      const name = ctx.params.name;
      const response = await Axios.get<Lover>(
        `https://lovers.deno.dev/${name}`,
      );
      if (response.status !== 200) {
        throw new Error("Error al obtener los datos del amante");
      }
      return ctx.render(response.data);
    } catch (error) {
      throw error;
    }
  },
};

const Page = (props: PageProps<Lover>) => {
  const { data } = props;

  return (
    <>
    <div class="flex-column">
      <div className ="lover-container">
      <h2 class="text-overflow">{data.name}</h2>
      <img class="img-m half-rounded" src={data.photo} alt={data.name} />
      <h3>Edad: {data.age}</h3>
      <div>{data.description}</div>
      <p>Hobbies: {data.hobbies.join(', ')}</p>
      </div>
    </div>
    </>
  );
};

export default Page;
