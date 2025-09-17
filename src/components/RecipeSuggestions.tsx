import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Star } from "lucide-react";

const mockRecipes = [
  {
    id: 1,
    title: "Spinach and Yogurt Smoothie",
    description: "A nutritious breakfast smoothie using your expiring spinach and Greek yogurt",
    cookTime: "5 mins",
    servings: 2,
    difficulty: "Easy",
    rating: 4.8,
    ingredients: ["Spinach", "Greek Yogurt", "Banana", "Honey"],
    tags: ["Healthy", "Quick", "Expiring Soon"],
    image: "🥤"
  },
  {
    id: 2,
    title: "Chicken Spinach Wrap",
    description: "Quick lunch using your chicken breast and spinach before they expire",
    cookTime: "15 mins",
    servings: 1,
    difficulty: "Easy",
    rating: 4.6,
    ingredients: ["Chicken Breast", "Spinach", "Whole Grain Bread", "Greek Yogurt"],
    tags: ["Protein Rich", "Uses 4 ingredients", "Lunch"],
    image: "🌯"
  },
  {
    id: 3,
    title: "Savory Yogurt Toast",
    description: "Transform your bread and yogurt into a delicious healthy snack",
    cookTime: "8 mins",
    servings: 1,
    difficulty: "Very Easy",
    rating: 4.4,
    ingredients: ["Whole Grain Bread", "Greek Yogurt", "Herbs", "Olive Oil"],
    tags: ["Vegetarian", "Quick", "Snack"],
    image: "🍞"
  }
];

const RecipeSuggestions = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Smart Recipe Suggestions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered recipes tailored to your expiring ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockRecipes.map((recipe) => (
              <Card key={recipe.id} className="card-hover border-0 shadow-soft overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="text-6xl mb-4 text-center">{recipe.image}</div>
                  <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">{recipe.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {recipe.cookTime}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {recipe.servings} servings
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Star className="w-4 h-4 mr-1 fill-current text-accent" />
                      {recipe.rating}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Uses your ingredients:</p>
                    <div className="flex flex-wrap gap-1">
                      {recipe.ingredients.slice(0, 3).map((ingredient) => (
                        <Badge key={ingredient} variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                          {ingredient}
                        </Badge>
                      ))}
                      {recipe.ingredients.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{recipe.ingredients.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {recipe.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="gradient" size="sm" className="flex-1">
                      <ChefHat className="w-4 h-4 mr-2" />
                      Cook Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Recipes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSuggestions;