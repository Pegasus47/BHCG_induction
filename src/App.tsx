import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { resources } from "./lib/data";
import CustomCard from "./components/customCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { Separator } from "./components/ui/separator";

function App() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null); //usestate to keep track of pop-ups

  const handleCardClick = (resource: { type: string; url: string }) => { //added types for TS 
    if (resource.type === "video") {
      const embed = resource.url.replace("watch?v=", "embed/"); //if video --> open in pop-up (embedded window)
      setVideoUrl(embed);
    } else {
      window.open(resource.url, "_blank"); // if article -->open in new window 
    }
  };

    if (Object.keys(resources).length === 0) { //error handling if no data has been uploaded yet 
    return (
      <div className="flex flex-col items-center mt-6 space-y-6">
        <div className="flex items-center gap-2 p-4 bg-slate-800 rounded">
          <AlertCircle className="text-red-500" />
          <span className="text-red-100 text-base font-semibold">
            No data uploaded yet.
          </span>
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center mt-6 space-y-6">
    <h5 className="mt-4 text-6xl font-bold text-white tracking-wide drop-shadow-lg">
      BHCG Induction Task
    </h5>

    <Separator className="border-white border-2 w-3/4 mx-auto" />
      {Object.entries(resources).map(([week, items]) => (
        <CustomCard
          key={week}
          week={week}
          items={items}
          onCardClick={handleCardClick}
        /> //custom car holds the carousel with holds minicards with articles/videos 
      ))}

      {/* Video Modal Window */}
      <Dialog open={!!videoUrl} onOpenChange={() => setVideoUrl(null)}>
        <DialogContent className="w-full max-w-3xl bg-cyan-800">
          <DialogHeader>
            <DialogTitle>Video Player</DialogTitle>
          </DialogHeader>
          {videoUrl && (
            <iframe
              src={videoUrl}
              className="w-full aspect-video"
              title="Video Player"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}

export default App;
