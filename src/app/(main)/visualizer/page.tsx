import { OutfitVisualizer } from "@/components/visualizer/outfit-visualizer";

export default function VisualizerPage() {
  return (
    <div className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <OutfitVisualizer />
      </div>
    </div>
  );
}
