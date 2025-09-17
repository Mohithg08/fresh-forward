import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Leaf, Award, Target, MapPin } from "lucide-react";

const ImpactMetrics = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Your Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how you're making a difference in reducing food waste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Money Saved */}
            <Card className="border-0 shadow-soft bg-gradient-success text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Money Saved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$127.50</div>
                <p className="text-white/80 text-sm">This month</p>
                <div className="flex items-center mt-2 text-white/90">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">+15% from last month</span>
                </div>
              </CardContent>
            </Card>

            {/* Food Saved */}
            <Card className="border-0 shadow-soft bg-gradient-primary text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Leaf className="w-5 h-5 mr-2" />
                  Food Saved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">15.2 lbs</div>
                <p className="text-white/80 text-sm">From waste</p>
                <div className="flex items-center mt-2 text-white/90">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">85% success rate</span>
                </div>
              </CardContent>
            </Card>

            {/* Recipes Tried */}
            <Card className="border-0 shadow-soft bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg text-foreground">
                  <Award className="w-5 h-5 mr-2 text-accent" />
                  Recipes Tried
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2 text-foreground">24</div>
                <p className="text-muted-foreground text-sm">This month</p>
                <Badge variant="secondary" className="mt-2 bg-success/10 text-success">
                  Level 3 Chef
                </Badge>
              </CardContent>
            </Card>

            {/* CO2 Reduced */}
            <Card className="border-0 shadow-soft bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg text-foreground">
                  <Leaf className="w-5 h-5 mr-2 text-success" />
                  CO₂ Saved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2 text-foreground">42.3 kg</div>
                <p className="text-muted-foreground text-sm">Carbon footprint</p>
                <div className="flex items-center mt-2 text-success">
                  <Leaf className="w-4 h-4 mr-1" />
                  <span className="text-sm">Eco-friendly!</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Monthly Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Waste Reduction Goal</span>
                    <span className="text-sm text-muted-foreground">85% of 20 lbs</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Money Saving Goal</span>
                    <span className="text-sm text-muted-foreground">$127.50 of $150</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Recipes to Try</span>
                    <span className="text-sm text-muted-foreground">24 of 30</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-accent" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Local Rank: #12</div>
                  <p className="text-muted-foreground text-sm">Out of 847 households in your area</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Food donated</span>
                    <Badge variant="outline" className="bg-success/10 text-success">3.2 lbs</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Neighbors helped</span>
                    <Badge variant="outline" className="bg-primary/10 text-primary">5 people</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Recipe shares</span>
                    <Badge variant="outline" className="bg-accent/10 text-accent">12 recipes</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;