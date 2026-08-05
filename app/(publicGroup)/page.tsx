import { Button } from "@/components/ui/button";



export default function HomePage() {
  console.log("Root Route");
  return (
    <div>
      Hwllo, nextjs!

      <Button
      size={"xs"}
      variant={"destructive"}
      >click me</Button>
    </div>
  );
}
