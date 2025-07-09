import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import APBCard from "@/components/APBCard";
import StaffCard from "@/components/StaffCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  const organizationStaff = [
    {
      name: "MARLIANA",
      position: "Kepala Seksi",
      department: "Pelayanan dan Kesejahteraan"
    },
    {
      name: "ALFIAH RAMADHANI",
      position: "Kaur Umum dan",
      department: "Perencanaan"
    }
  ];

  const populationStats = [
    { icon: "👥", value: "1.148", label: "Penduduk" },
    { icon: "👨", value: "605", label: "Laki-Laki" },
    { icon: "👨‍👩‍👧‍👦", value: "303", label: "Kepala Keluarga" },
    { icon: "👩", value: "543", label: "Perempuan" },
    { icon: "🏠", value: "73", label: "Penduduk Sementara" },
    { icon: "📋", value: "36", label: "Mutasi Penduduk" }
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
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={() => navigate("/services")}
          >
            Mulai Layanan
          </Button>
        </div>
      </section>

      {/* Quick Services */}
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

      {/* Population Statistics - Administrasi Penduduk */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Administrasi Penduduk
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Efisiensi pengelolaan data dan informasi kependudukan yang lebih efektif.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {populationStats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SOTK Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              SOTK
            </h2>
            <p className="text-lg text-foreground mb-6">
              Struktur Organisasi dan Tata Kerja Desa
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-8">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {organizationStaff.map((person, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <StaffCard
                      name={person.name}
                      position={person.position}
                      department={person.department}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/organization")}
              className="px-8 py-3"
            >
              Lihat Semua
            </Button>
          </div>
        </div>
      </section>

      {/* APB Desa */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <APBCard />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">Berita Desa</CardTitle>
              <p className="text-muted-foreground">
                Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/20 rounded-lg p-6 h-32 flex items-center justify-center">
                  <span className="text-muted-foreground">📰 Berita Terbaru</span>
                </div>
                <div className="bg-muted/20 rounded-lg p-6 h-32 flex items-center justify-center">
                  <span className="text-muted-foreground">📅 Agenda Desa</span>
                </div>
              </div>
              <Button variant="outline">
                Lihat Semua Berita
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
