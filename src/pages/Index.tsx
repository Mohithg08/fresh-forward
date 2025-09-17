import Hero from "@/components/Hero";
import FoodInventory from "@/components/FoodInventory";
import RecipeSuggestions from "@/components/RecipeSuggestions";
import ImpactMetrics from "@/components/ImpactMetrics";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FoodInventory />
      <RecipeSuggestions />
      <ImpactMetrics />
    </main>
  );
};

export default Index;
