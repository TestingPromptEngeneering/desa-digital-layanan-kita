import Header from "@/components/Header";
import StaffCard from "@/components/StaffCard";

const Organization = () => {
  const staff = [
    {
      name: "MARLIANA",
      position: "Kepala Seksi",
      department: "Pelayanan dan Kesejahteraan"
    },
    {
      name: "ALFIAH RAMADHANI",
      position: "Kaur Umum dan",
      department: "Perencanaan"
    },
    {
      name: "AHMAD YUSUF",
      position: "Kepala Desa",
      department: "Pemerintahan Desa"
    },
    {
      name: "SITI AISYAH",
      position: "Sekretaris Desa",
      department: "Administrasi"
    },
    {
      name: "BUDI SANTOSO",
      position: "Kaur Keuangan",
      department: "Keuangan dan Aset"
    },
    {
      name: "DEWI SARTIKA",
      position: "Kasi Pemerintahan",
      department: "Tata Pemerintahan"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">
            SOTK
          </h1>
          <h2 className="text-xl text-foreground mb-6">
            Struktur Organisasi dan Tata Kerja Desa
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((person, index) => (
            <StaffCard
              key={index}
              name={person.name}
              position={person.position}
              department={person.department}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Administrasi Penduduk
          </h3>
          <p className="text-muted-foreground mb-8">
            Tim administrasi penduduk yang siap melayani kebutuhan masyarakat
          </p>
          
          <div className="flex justify-center space-x-8 text-center">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <div className="text-primary text-2xl mb-2">🏠</div>
              <p className="text-sm text-muted-foreground">Beranda</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <div className="text-primary text-2xl mb-2">📋</div>
              <p className="text-sm text-muted-foreground">Pengaduan</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <div className="text-primary text-2xl mb-2">📄</div>
              <p className="text-sm text-muted-foreground">Berita</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <div className="text-primary text-2xl mb-2">🛒</div>
              <p className="text-sm text-muted-foreground">Belanja</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;