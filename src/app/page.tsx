import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DESTRUCTION } from "dns";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
 <div className="">
  <Input/>
  <Button variant={"primary"}>Primary</Button>
  <Button variant={"secondary"} size={"lg"}>Secondary</Button>
  <Button variant={"destructive"}>Destructive</Button>
  <Button variant={"ghost"}>Ghost</Button>
  <Button variant={"muted"}>Muted</Button>
  <Button variant={"outline"}>Outline</Button>
  <Button variant={"teritary"}>Teritary</Button>
 </div>
  );
}
