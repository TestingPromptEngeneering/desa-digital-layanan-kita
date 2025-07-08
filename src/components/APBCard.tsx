import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const APBCard = () => {
  return (
    <Card className="bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary">APB DESA 2024</CardTitle>
        <p className="text-muted-foreground">
          Akses cepat dan transparan terhadap APB Desa serta proyek pembangunan
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-secondary/20 rounded-lg">
            <div className="text-green-600 text-xs mb-1">📈 Pendapatan</div>
            <div className="font-bold text-green-600">Rp4.802.205.800,00</div>
          </div>
          <div className="text-center p-4 bg-secondary/20 rounded-lg">
            <div className="text-red-600 text-xs mb-1">📊 Belanja</div>
            <div className="font-bold text-red-600">Rp4.888.222.678,00</div>
          </div>
        </div>
        
        <div className="text-center p-4 bg-secondary/20 rounded-lg">
          <div className="text-muted-foreground text-sm mb-2">Pembiayaan</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-green-600 text-xs">📈 Penerimaan</div>
              <div className="font-bold text-green-600">Rp86.016.878,00</div>
            </div>
            <div>
              <div className="text-red-600 text-xs">📊 Pengeluaran</div>
              <div className="font-bold text-red-600">Rp0,00</div>
            </div>
          </div>
        </div>
        
        <div className="text-center p-4 bg-muted/20 rounded-lg">
          <div className="text-muted-foreground text-sm">Surplus/Defisit</div>
          <div className="font-bold">Rp0,00</div>
        </div>
        
        <Button variant="outline" className="w-full">
          Lihat Detail
        </Button>
      </CardContent>
    </Card>
  );
};

export default APBCard;