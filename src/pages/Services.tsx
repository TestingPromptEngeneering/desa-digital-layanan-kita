import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Surat Keterangan Domisili",
      description: "Surat keterangan tempat tinggal untuk berbagai keperluan administrasi",
      isNew: false
    },
    {
      title: "Surat Keterangan Tidak Mampu",
      description: "Surat keterangan kondisi ekonomi untuk bantuan sosial dan beasiswa",
      isNew: false
    },
    {
      title: "Surat Keterangan Tidak Mampu Anak",
      description: "Surat keterangan ekonomi untuk keperluan pendidikan anak",
      isNew: true
    },
    {
      title: "Surat Keterangan Usaha",
      description: "Surat keterangan untuk pelaku usaha mikro dan kecil",
      isNew: true
    },
    {
      title: "Surat Keterangan Domisili Kelompok",
      description: "Surat keterangan domisili untuk organisasi atau kelompok",
      isNew: true
    },
    {
      title: "Surat Keterangan Penghasilan Orang Tua",
      description: "Surat keterangan pendapatan untuk berbagai keperluan",
      isNew: true
    },
    {
      title: "Surat Keterangan Tidak Mampu BPJS",
      description: "Surat keterangan untuk pendaftaran BPJS Kesehatan",
      isNew: true
    },
    {
      title: "Surat Keterangan Pengantar Nikah",
      description: "Surat pengantar untuk proses pernikahan di KUA",
      isNew: true
    }
  ];

  const handleServiceClick = (title: string) => {
    console.log(`Mengajukan: ${title}`);
    navigate("/form-surat");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Layanan Surat Online
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kemudahan pembuatan surat keterangan secara digital. Segera akses layanan ini untuk 
            pengalaman yang lebih efisien dan terhubung dengan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              isNew={service.isNew}
              onClick={() => handleServiceClick(service.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;