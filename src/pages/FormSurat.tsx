import Header from "@/components/Header";
import SuratForm from "@/components/SuratForm";

const FormSurat = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Permohonan Surat Keterangan
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lengkapi form di bawah ini untuk mengajukan permohonan surat keterangan. 
            Pastikan semua data yang diisi benar dan lengkap.
          </p>
        </div>

        <SuratForm />
      </div>
    </div>
  );
};

export default FormSurat;