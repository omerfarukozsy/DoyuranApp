export interface Menu {
  id: string;
  isim: string;
  aciklama: string;
  fiyat: string;
  resim: string;
}

export interface Restoran {
  id: string;
  isim: string;
  puan: number;
  teslimatSuresi: string;
  resim: string;
  minSiparis: string;
  menuler: Menu[];
} 