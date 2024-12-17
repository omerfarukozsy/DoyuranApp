import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { restoranlar } from '../data/restoranlar';
import { Restoran } from '../types';

type KategoriParametreleri = {
  category: string;
};

export default function KategoriSayfasi() {
  const { category } = useLocalSearchParams<KategoriParametreleri>();
  const kategoriAnahtari = category?.toLowerCase() || '';
  const kategoriRestoranlari = restoranlar[kategoriAnahtari] || [];

  const restoranOgesiniGoster = ({ item }: { item: Restoran }) => (
    <View style={stiller.restoranKarti}>
      <Image 
        source={{ uri: item.resim }}
        style={stiller.restoranResmi}
        resizeMode="cover"
      />
      <View style={stiller.favoriButon}>
        <TouchableOpacity>
          <Text style={stiller.favoriIcon}>❤️</Text>
        </TouchableOpacity>
      </View>
      
      <View style={stiller.restoranIcerik}>
        <View style={stiller.restoranUstBilgi}>
          <Text style={stiller.restoranIsmi}>{item.isim}</Text>
          <View style={stiller.etiketContainer}>
            <Text style={stiller.etiket}>Ücretsiz Teslimat</Text>
          </View>
        </View>
        
        <View style={stiller.restoranBilgi}>
          <Text style={stiller.bilgiMetni}>Puan: {item.puan}</Text>
          <Text style={stiller.bilgiMetni}>🕒 {item.teslimatSuresi}</Text>
          <Text style={stiller.bilgiMetni}>Min: {item.minSiparis}</Text>
        </View>
        
        <View style={stiller.menuContainer}>
          <Text style={stiller.menuBaslik}>Menüler</Text>
          {item.menuler.map((menu) => (
            <View key={menu.id} style={stiller.menuItem}>
              <View style={stiller.menuBilgi}>
                <Text style={stiller.menuIsim}>{menu.isim}</Text>
                <Text style={stiller.menuAciklama}>{menu.aciklama}</Text>
                <Text style={stiller.menuFiyat}>{menu.fiyat}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={stiller.kapsayici}>
      <FlatList
        data={kategoriRestoranlari}
        renderItem={restoranOgesiniGoster}
        keyExtractor={(item) => item.id}
        contentContainerStyle={stiller.listeKapsayici}
      />
    </View>
  );
}

const stiller = StyleSheet.create({
  kapsayici: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  listeKapsayici: {
    padding: 16,
  },
  restoranKarti: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  restoranResmi: {
    width: '100%',
    height: 180,
  },
  restoranIcerik: {
    padding: 16,
  },
  restoranIsmi: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  restoranBilgi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bilgiMetni: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  menuBaslik: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
  },
  menuBilgi: {
    flex: 1,
  },
  menuIsim: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  menuAciklama: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  menuFiyat: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2E8B57',
  },
  favoriButon: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    padding: 8,
  },
  favoriIcon: {
    fontSize: 20,
  },
  etiketContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  etiket: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    color: '#FF4B3A',
  },
  restoranUstBilgi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}); 