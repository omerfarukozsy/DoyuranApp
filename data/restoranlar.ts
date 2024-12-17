import { Restoran } from '../types';

export const restoranlar: Record<string, Restoran[]> = {
  kebap: [
    { 
      id: '1', 
      isim: 'Adana Kebap Evi',
      puan: 4.8,
      teslimatSuresi: '30-45 dk',
      resim: 'https://images.unsplash.com/photo-1644364935906-792b2245a2c0?w=500',
      minSiparis: '120 TL',
      menuler: [
        {
          id: '1',
          isim: 'Adana Kebap',
          aciklama: 'Özel baharatlarla hazırlanmış el yapımı kebap',
          fiyat: '150 TL',
          resim: 'https://images.unsplash.com/photo-1644364935906-792b2245a2c0?w=500'
        }
      ]
    },
  ],
  pizza: [
    { 
      id: '1', 
      isim: 'Pizza House',
      puan: 4.5,
      teslimatSuresi: '30-45 dk',
      resim: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
      minSiparis: '150 TL',
      menuler: [
        {
          id: '1',
          isim: 'Karışık Pizza',
          aciklama: 'Sucuk, sosis, mantar, yeşil biber, mısır',
          fiyat: '180 TL',
          resim: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        }
      ]
    },
    { 
      id: '2', 
      isim: 'Dominos Pizza',
      puan: 4.2,
      teslimatSuresi: '25-40 dk',
      resim: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
      minSiparis: '130 TL',
      menuler: [
        {
          id: '1',
          isim: 'Margarita',
          aciklama: 'Domates sosu, mozarella peyniri, fesleğen',
          fiyat: '150 TL',
          resim: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        }
      ]
    },
    { 
      id: '3', 
      isim: 'Pizza Bulls',
      puan: 4.7,
      teslimatSuresi: '20-35 dk',
      resim: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
      minSiparis: '140 TL',
      menuler: [
        {
          id: '1',
          isim: 'Pepperoni Pizza',
          aciklama: 'Bol peperonili özel pizza',
          fiyat: '170 TL',
          resim: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        }
      ]
    },
  ],
  burger: [
    { 
      id: '1', 
      isim: 'Burger King',
      puan: 4.3,
      teslimatSuresi: '20-35 dk',
      resim: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
      minSiparis: '100 TL',
      menuler: [
        {
          id: '1',
          isim: 'Whopper Menü',
          aciklama: 'Whopper + Patates + İçecek',
          fiyat: '185 TL',
          resim: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
        }
      ]
    },
    { 
      id: '2', 
      isim: 'McDonalds',
      puan: 4.4,
      teslimatSuresi: '25-40 dk',
      resim: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
      minSiparis: '90 TL',
      menuler: [
        {
          id: '1',
          isim: 'Big Mac Menü',
          aciklama: 'Big Mac + Patates + İçecek',
          fiyat: '175 TL',
          resim: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
        }
      ]
    },
    { 
      id: '3', 
      isim: 'Burger House',
      puan: 4.6,
      teslimatSuresi: '30-45 dk',
      resim: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
      minSiparis: '110 TL',
      menuler: [
        {
          id: '1',
          isim: 'House Special Burger',
          aciklama: 'Özel soslu burger + Patates + İçecek',
          fiyat: '160 TL',
          resim: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
        }
      ]
    },
  ],
  pide: [
    { 
      id: '1', 
      isim: 'Karadeniz Pidecisi',
      puan: 4.7,
      teslimatSuresi: '25-40 dk',
      resim: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?w=500',
      minSiparis: '80 TL',
      menuler: [
        {
          id: '1',
          isim: 'Kıymalı Pide',
          aciklama: 'Özel kıyma harcı ile hazırlanmış pide',
          fiyat: '120 TL',
          resim: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?w=500'
        }
      ]
    },
    { 
      id: '2', 
      isim: 'Meşhur Pideci',
      puan: 4.5,
      teslimatSuresi: '30-45 dk',
      resim: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?w=500',
      minSiparis: '90 TL',
      menuler: [
        {
          id: '1',
          isim: 'Kaşarlı Pide',
          aciklama: 'Bol kaşarlı özel pide',
          fiyat: '110 TL',
          resim: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?w=500'
        }
      ]
    },
    { 
      id: '3', 
      isim: 'Samsun Pide Salonu',
      puan: 4.8,
      teslimatSuresi: '35-50 dk',
      resim: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?w=500',
      minSiparis: '100 TL',
      menuler: [
        {
          id: '1',
          isim: 'Kuşbaşılı Pide',
          aciklama: 'Özel kuşbaşı etle hazırlanmış pide',
          fiyat: '130 TL',
          resim: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?w=500'
        }
      ]
    },
  ],
  doner: [
    { 
      id: '1', 
      isim: 'İskender Döner',
      puan: 4.6,
      teslimatSuresi: '25-40 dk',
      resim: 'https://images.unsplash.com/photo-1700925899171-f6ef2369c4b6?w=500',
      minSiparis: '110 TL',
      menuler: [
        {
          id: '1',
          isim: 'İskender Porsiyon',
          aciklama: 'Özel domates soslu, tereyağlı döner',
          fiyat: '160 TL',
          resim: 'https://images.unsplash.com/photo-1700925899171-f6ef2369c4b6?w=500'
        }
      ]
    },
    { 
      id: '2', 
      isim: 'Meşhur Dönerci',
      puan: 4.4,
      teslimatSuresi: '20-35 dk',
      resim: 'https://images.unsplash.com/photo-1700925899171-f6ef2369c4b6?w=500',
      minSiparis: '90 TL',
      menuler: [
        {
          id: '1',
          isim: 'Pilav Üstü Döner',
          aciklama: 'Özel pilavlı döner porsiyon',
          fiyat: '120 TL',
          resim: 'https://images.unsplash.com/photo-1700925899171-f6ef2369c4b6?w=500'
        }
      ]
    },
    { 
      id: '3', 
      isim: 'Döner Express',
      puan: 4.5,
      teslimatSuresi: '30-45 dk',
      resim: 'https://images.unsplash.com/photo-1700925899171-f6ef2369c4b6?w=500',
      minSiparis: '100 TL',
      menuler: [
        {
          id: '1',
          isim: 'Dürüm Döner',
          aciklama: 'Bol malzemeli dürüm döner',
          fiyat: '95 TL',
          resim: 'https://images.unsplash.com/photo-1700925899171-f6ef2369c4b6?w=500'
        }
      ]
    },
  ],
  lahmacun: [
    { 
      id: '1', 
      isim: 'Urfa Lahmacun',
      puan: 4.7,
      teslimatSuresi: '25-40 dk',
      resim: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=500',
      minSiparis: '70 TL',
      menuler: [
        {
          id: '1',
          isim: 'Urfa Usulü Lahmacun',
          aciklama: 'Acılı, özel harçlı lahmacun',
          fiyat: '45 TL',
          resim: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=500'
        }
      ]
    },
    { 
      id: '2', 
      isim: 'Antep Lahmacun',
      puan: 4.5,
      teslimatSuresi: '30-45 dk',
      resim: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=500',
      minSiparis: '80 TL',
      menuler: [
        {
          id: '1',
          isim: 'Antep Lahmacun',
          aciklama: 'Özel baharatlı Antep usulü lahmacun',
          fiyat: '50 TL',
          resim: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=500'
        }
      ]
    },
    { 
      id: '3', 
      isim: 'Meşhur Lahmacuncu',
      puan: 4.6,
      teslimatSuresi: '20-35 dk',
      resim: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=500',
      minSiparis: '75 TL',
      menuler: [
        {
          id: '1',
          isim: 'Karışık Lahmacun',
          aciklama: 'Özel harç ve baharatlarla hazırlanmış lahmacun',
          fiyat: '55 TL',
          resim: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=500'
        }
      ]
    },
  ],
}; 