import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookText, Video,AlertCircle } from "lucide-react";

export type Resource = {
  title: string;
  type: string;
  url: string;
}; //for type safety 

type Props = {
  items: Resource[];
  onCardClick: (resource: Resource) => void; //void as no data is being returned 
}; 

export default function Minicard({ items, onCardClick }: Props) {
   
    if (items.length === 0) { //error management if no data is found 
    return (
      <Card className="bg-white/10 p-4">
        <CardHeader className="flex items-center gap-2">
          <AlertCircle className="text-red-500" />
          <CardTitle className="text-red-100 text-base font-semibold">
            No data available for this week.
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

    return (
    <Carousel className="w-full"> {/* Done using the Carousel from SHADCN library */}
      <CarouselContent>
        {items.map((resource, idx) => (
          <CarouselItem key={idx} className="basis-1/2 lg:basis-1/3">
            <Card
              className="cursor-pointer hover:shadow-md bg-white/10"
              onClick={() => onCardClick(resource)}
            >
                <CardHeader>
                {resource.type === "article" && <BookText className="text-cyan-300" />} {/* To display icons for articles and videos*/} 
                {resource.type === "video" && <Video className="text-rose-400" />}

                <CardTitle className="text-cyan-100 text-base font-semibold">
                    {resource.title}
                </CardTitle>

                <CardDescription className="text-gray-300 text-xs truncate">
                    {resource.url}
                </CardDescription>
                </CardHeader>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
