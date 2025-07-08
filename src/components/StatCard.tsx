import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  color?: string;
}

const StatCard = ({ icon, value, label, color = "text-primary" }: StatCardProps) => {
  return (
    <Card className="text-center bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card hover:shadow-elegant transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-3xl mb-2">{icon}</div>
        <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;