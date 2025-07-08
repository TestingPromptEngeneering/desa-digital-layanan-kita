import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📄",
      title: "Surat Online",
      description: "Buat berbagai surat keterangan secara digital dan cepat",
      path: "/services"
    },
    {
      icon: "🏛️",
      title: "Struktur Organisasi",
      description: "Lihat struktur organisasi dan tata kerja desa",
      path: "/organization"
    },
    {
      icon: "📊",
      title: "Profil Desa",
      description: "Informasi lengkap tentang profil dan data desa",
      path: "/profile"
    },
    {
      icon: "📞",
      title: "Kontak",
      description: "Hubungi perangkat desa untuk informasi lebih lanjut",
      path: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Selamat Datang di Portal Desa Digital
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Layanan administrasi desa yang modern, efisien, dan mudah diakses untuk seluruh warga
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            Mulai Layanan
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Layanan Unggulan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Akses berbagai layanan desa secara online dengan mudah dan cepat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => navigate(feature.path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Surat Telah Diproses</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Layanan Online</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Kepuasan Warga</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
