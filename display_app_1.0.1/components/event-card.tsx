import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export default function EventCard({ title, staffNames,  }: { title: string, staffNames: string }) {
    return (
       <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                {staffNames}
            </CardDescription>
        </CardHeader>
       </Card> 
    )
  }