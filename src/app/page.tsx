import { redirect } from "next/navigation";

export default function Home() {
  const randomNumber = Math.floor(Math.random() * 1);
  redirect("/v" + (randomNumber + 1));
}
