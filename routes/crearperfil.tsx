import { Handlers, type PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

interface Props {
  message: string | null;
}

export const handler: Handlers<Props> = {
  async GET(req, ctx) {
    return await ctx.render({
      message: null,
    });
  },
  
  async POST(req, ctx) {
    const formData = new FormData();
    formData.append("name", req.body.name);
    formData.append("password", req.body.password);
    formData.append("age", req.body.age);
    formData.append("sex", req.body.sex);
    formData.append("description", req.body.description);
    formData.append("hobbies", req.body.hobbies);
    formData.append("photo", req.body.photo);
    formData.append("comments", ''); // Comments field is empty by default
    
    try {
      const response = await axios.post("https://lovers.deno.dev/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status !== 200) {
        throw new Error("Failed to add new user");
      }

      return ctx.render({
        message: "New user added successfully!",
      });
    } catch (error) {
      console.error("Error adding new user:", error);
      return ctx.render({
        message: "Failed to add new user",
      });
    }
  },
};

export default function NewUserForm(props: PageProps<Props>) {
  const { message } = props.data;
  return (
    <>
      <form class="form" method="post" encType="multipart/form-data">
      <h1>Crear perfil</h1>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <label>Age:</label>
        <input type="number" name="age" required />
        <label>Sex:</label>
        <select name="sex" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label>Description:</label>
        <textarea name="description" required></textarea>
        <label>Hobbies:</label>
        <input type="text" name="hobbies" required />
        <label>Photo:</label>
        <input type="text" name="photo" required />
       
       
        <button type="submit">Add User</button>
      </form>
      {message ? <p>{message}</p> : null}
    </>
  );
}
