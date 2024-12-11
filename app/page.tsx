import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/auth";


export default async function Home() {
  const session = await auth();
  return (
    <main className="flex h-full items-center justify-center">
      <Card className="max-w-sm">
        <CardHeader>
          <Image
            className="rounded-lg"
            src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="img"
            width={500}
            height={500}
            priority
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-2 text-2xl font-bold">
            
            Welcome, {!session?.user ? "User" : session?.user?.email}
          </CardTitle>
          <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem amet distinctio accusantium doloribus? Architecto?
          </p>
        </CardContent>
        
      </Card>
    </main>
  );
}
