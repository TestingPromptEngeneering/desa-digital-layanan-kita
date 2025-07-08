import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const FeatureCard = ({ icon, title, description, onClick }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card cursor-pointer" onClick={onClick}>
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Akses Layanan
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;