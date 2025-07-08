import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">🏛️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Desa Digital</h1>
              <p className="text-sm text-primary-foreground/80">Layanan Online Terpadu</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;