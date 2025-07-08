import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

interface FormData {
  namaLengkap: string;
  nik: string;
  jenisKelamin: string;
  tempatLahir: string;
  tanggalLahir: string;
  pekerjaan: string;
  kewarganegaraan: string;
  agama: string;
  nomorPonsel: string;
  alamatKTP: string;
  alamatSekarang: string;
  fileRT: File | null;
  fileKK: File | null;
  fileKTP: File | null;
}

const SuratForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    namaLengkap: "",
    nik: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    pekerjaan: "",
    kewarganegaraan: "",
    agama: "",
    nomorPonsel: "",
    alamatKTP: "",
    alamatSekarang: "",
    fileRT: null,
    fileKK: null,
    fileKTP: null
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: keyof FormData, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = [
      'namaLengkap', 'nik', 'jenisKelamin', 'tempatLahir', 
      'tanggalLahir', 'pekerjaan', 'kewarganegaraan'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Permohonan Berhasil Dikirim",
      description: "Surat Anda sedang diproses dan akan segera selesai",
      variant: "default"
    });
  };

  const FileUpload = ({ 
    label, 
    field, 
    required = false 
  }: { 
    label: string; 
    field: keyof FormData; 
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="relative">
        <Input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileChange(field, e.target.files?.[0] || null)}
          className="hidden"
          id={field}
        />
        <Label
          htmlFor={field}
          className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
        >
          <Upload className="h-5 w-5 text-primary" />
          <span className="text-muted-foreground">
            {formData[field] ? (formData[field] as File).name : "Pilih berkas"}
          </span>
        </Label>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="bg-gradient-to-br from-card to-secondary/20 border-0 shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary text-center">
            Form Permohonan Surat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section A: Data Diri */}
            <div>
              <h3 className="text-lg font-bold mb-6">A. DATA DIRI</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="namaLengkap" className="text-sm font-medium">
                    Nama lengkap <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-xs text-red-500 mb-2">(gunakan huruf besar)</p>
                  <Input
                    id="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={(e) => handleInputChange('namaLengkap', e.target.value.toUpperCase())}
                    placeholder="Masukkan nama lengkap"
                    className="uppercase"
                  />
                </div>

                <div>
                  <Label htmlFor="nik" className="text-sm font-medium">
                    NIK <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nik"
                    value={formData.nik}
                    onChange={(e) => handleInputChange('nik', e.target.value)}
                    placeholder="Masukkan NIK"
                    maxLength={16}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium">
                    Jenis kelamin <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.jenisKelamin} onValueChange={(value) => handleInputChange('jenisKelamin', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="laki-laki">Laki-laki</SelectItem>
                      <SelectItem value="perempuan">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tempatLahir" className="text-sm font-medium">
                    Tempat lahir <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="tempatLahir"
                    value={formData.tempatLahir}
                    onChange={(e) => handleInputChange('tempatLahir', e.target.value)}
                    placeholder="Masukkan tempat lahir"
                  />
                </div>

                <div>
                  <Label htmlFor="tanggalLahir" className="text-sm font-medium">
                    Tanggal lahir <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="tanggalLahir"
                    type="date"
                    value={formData.tanggalLahir}
                    onChange={(e) => handleInputChange('tanggalLahir', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="pekerjaan" className="text-sm font-medium">
                    Pekerjaan <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="pekerjaan"
                    value={formData.pekerjaan}
                    onChange={(e) => handleInputChange('pekerjaan', e.target.value)}
                    placeholder="Masukkan pekerjaan"
                  />
                </div>

                <div>
                  <Label htmlFor="kewarganegaraan" className="text-sm font-medium">
                    Kewarganegaraan <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="kewarganegaraan"
                    value={formData.kewarganegaraan}
                    onChange={(e) => handleInputChange('kewarganegaraan', e.target.value)}
                    placeholder="Masukkan kewarganegaraan"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium">
                    Agama <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.agama} onValueChange={(value) => handleInputChange('agama', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih agama" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="islam">Islam</SelectItem>
                      <SelectItem value="kristen">Kristen</SelectItem>
                      <SelectItem value="katolik">Katolik</SelectItem>
                      <SelectItem value="hindu">Hindu</SelectItem>
                      <SelectItem value="buddha">Buddha</SelectItem>
                      <SelectItem value="konghucu">Konghucu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="nomorPonsel" className="text-sm font-medium">
                    Nomor ponsel <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
                      <span className="text-sm">62</span>
                    </div>
                    <Input
                      id="nomorPonsel"
                      value={formData.nomorPonsel}
                      onChange={(e) => handleInputChange('nomorPonsel', e.target.value)}
                      placeholder="Masukkan nomor ponsel"
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="alamatKTP" className="text-sm font-medium">
                    Alamat KTP <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-xs text-red-500 mb-2">(Jalan, Gang, RT, RW, Desa, Kecamatan)</p>
                  <Textarea
                    id="alamatKTP"
                    value={formData.alamatKTP}
                    onChange={(e) => handleInputChange('alamatKTP', e.target.value)}
                    placeholder="Masukkan alamat KTP lengkap"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="alamatSekarang" className="text-sm font-medium">
                    Alamat sekarang <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-xs text-red-500 mb-2">(Jalan, Gang, RT, RW, Desa, Kecamatan)</p>
                  <Textarea
                    id="alamatSekarang"
                    value={formData.alamatSekarang}
                    onChange={(e) => handleInputChange('alamatSekarang', e.target.value)}
                    placeholder="Masukkan alamat sekarang"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Section B: Lampiran Persyaratan */}
            <div>
              <h3 className="text-lg font-bold mb-6">B. LAMPIRAN PERSYARATAN</h3>
              <div className="space-y-4">
                <FileUpload 
                  label="Unggah Pengantar RT" 
                  field="fileRT" 
                  required 
                />
                <FileUpload 
                  label="Unggah KK" 
                  field="fileKK" 
                  required 
                />
                <FileUpload 
                  label="Unggah KTP" 
                  field="fileKTP" 
                  required 
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 text-lg font-medium"
            >
              Kirim
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuratForm;