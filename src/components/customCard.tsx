import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Minicard from "./cardCarousel";
import type { Resource } from "./cardCarousel";

type Props = {
  week: string;
  items: Resource[];
  onCardClick: (resource: Resource) => void;
}; //props for type safety 

export default function CustomCard({ week, items, onCardClick }: Props) {
  return (
    <div className="my-4 mx-8 min-w-3/4">
      <Card className="bg-slate-800">
        <CardHeader>
          <CardTitle className="text-lg text-cyan-100">{week}</CardTitle> {/* This Card will hold weekly data*/}
        </CardHeader>
        <CardContent>
          <Minicard items={items} onCardClick={onCardClick} />
        </CardContent>
      </Card>
    </div>
  );
}
