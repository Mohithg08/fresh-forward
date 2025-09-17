import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Clock, AlertTriangle, CheckCircle } from "lucide-react";

const mockFoodItems = [
  {
    id: 1,
    name: "Organic Spinach",
    category: "Vegetables",
    purchaseDate: "2024-01-10",
    expirationDate: "2024-01-15",
    daysLeft: 2,
    status: "expiring",
    storage: "Refrigerator"
  },
  {
    id: 2,
    name: "Greek Yogurt",
    category: "Dairy",
    purchaseDate: "2024-01-08",
    expirationDate: "2024-01-20",
    daysLeft: 7,
    status: "fresh",
    storage: "Refrigerator"
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    category: "Bakery",
    purchaseDate: "2024-01-12",
    expirationDate: "2024-01-14",
    daysLeft: 1,
    status: "urgent",
    storage: "Pantry"
  },
  {
    id: 4,
    name: "Chicken Breast",
    category: "Meat",
    purchaseDate: "2024-01-11",
    expirationDate: "2024-01-16",
    daysLeft: 3,
    status: "expiring",
    storage: "Freezer"
  }
];

const getStatusBadgeClasses = (status: string) => {
  switch (status) {
    case "urgent":
      return "bg-danger/10 text-danger border-danger/20";
    case "expiring":
      return "bg-warning/10 text-warning border-warning/20";
    case "fresh":
      return "bg-success/10 text-success border-success/20";
    default:
      return "bg-secondary/10 text-secondary-foreground border-secondary/20";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "urgent":
      return <AlertTriangle className="w-4 h-4" />;
    case "expiring":
      return <Clock className="w-4 h-4" />;
    case "fresh":
      return <CheckCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const FoodInventory = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Your Food Inventory</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered expiration tracking keeps your food fresh and reduces waste
            </p>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <Badge variant="outline" className="text-sm">
                <AlertTriangle className="w-4 h-4 mr-2 text-danger" />
                2 items expiring soon
              </Badge>
              <Badge variant="outline" className="text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                4 items tracked
              </Badge>
            </div>
            <Button variant="gradient" className="shadow-medium">
              <Plus className="w-4 h-4 mr-2" />
              Add Food Item
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockFoodItems.map((item) => (
              <Card key={item.id} className="card-hover border-0 shadow-soft bg-gradient-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="truncate">{item.name}</span>
                    {getStatusIcon(item.status)}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Days left:</span>
                    <Badge 
                      variant="outline" 
                      className={getStatusBadgeClasses(item.status)}
                    >
                      {item.daysLeft} days
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Storage:</span>
                    <span className="text-sm font-medium">{item.storage}</span>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Recipes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodInventory;