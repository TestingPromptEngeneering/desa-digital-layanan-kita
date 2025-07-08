import { Card, CardContent } from "@/components/ui/card";

interface StaffCardProps {
  name: string;
  position: string;
  department: string;
  image?: string;
}

const StaffCard = ({ name, position, department, image }: StaffCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card">
      <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-primary text-2xl font-bold">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold text-primary mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground font-medium mb-1">{position}</p>
        <p className="text-xs text-muted-foreground">{department}</p>
      </CardContent>
    </Card>
  );
};

export default StaffCard;