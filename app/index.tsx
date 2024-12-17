import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

interface Kategori {
  id: string;
  isim: string;
  resim: string;
}

const yemekKategorileri: Kategori[] = [
  {
    id: '1',
    isim: 'kebap',
    resim: 'https://images.unsplash.com/photo-1644364935906-792b2245a2c0?w=500'
  },
  {
    id: '2',
    isim: 'pizza',
    resim: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
  },
  {
    id: '3',
    isim: 'burger',
    resim: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
  },
  {
    id: '4',
    isim: 'pide',
    resim: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?w=500'
  },
  {
    id: '5',
    isim: 'doner',
    resim: 'https://images.unsplash.com/photo-1700925899171-f6ef2369c4b6?w=500'
  },
  {
    id: '6',
    isim: 'lahmacun',
    resim: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=500'
  }
];

export default function AnaSayfa() {
  const yonlendirici = useRouter();
  const [aramaMetni, setAramaMetni] = useState('');
  
  // Arama fonksiyonu
  const filtrelenmisKategoriler = yemekKategorileri.filter(kategori =>
    kategori.isim.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  const kategoriOgesiniGoster = ({ item }: { item: Kategori }) => (
    <TouchableOpacity 
      style={stiller.kategoriKarti}
      onPress={() => yonlendirici.push({
        pathname: '/[category]',
        params: { category: item.isim }
      })}
    >
      <Image 
        source={{ uri: item.resim }}
        style={stiller.kategoriResmi}
        resizeMode="cover"
      />
      <View style={stiller.kategoriIsimKutusu}>
        <Text style={stiller.kategoriIsmi}>{item.isim.charAt(0).toUpperCase() + item.isim.slice(1)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={stiller.kapsayici}>
      <View style={stiller.baslik}>
        <Text style={stiller.hosgeldinYazisi}>Hoş Geldiniz!</Text>
        <Text style={stiller.altBaslik}>En sevdiğiniz yemekleri keşfedin</Text>
      </View>
      
      <View style={stiller.aramaKutusu}>
        <TextInput 
          placeholder="Restoran veya yemek ara..."
          style={stiller.aramaInput}
          value={aramaMetni}
          onChangeText={setAramaMetni}
          placeholderTextColor="#999"
        />
      </View>

      <Text style={stiller.kategoriBaslik}>Kategoriler</Text>
      
      <FlatList
        data={filtrelenmisKategoriler}
        renderItem={kategoriOgesiniGoster}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={stiller.listeKapsayici}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const stiller = StyleSheet.create({
  kapsayici: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  baslik: {
    padding: 16,
    marginTop: 10,
  },
  hosgeldinYazisi: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  altBaslik: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  aramaKutusu: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aramaInput: {
    padding: 8,
    fontSize: 16,
  },
  kategoriBaslik: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 10,
    color: '#333',
  },
  kategoriKarti: {
    flex: 1,
    margin: 8,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#FFE5E5',
  },
  kategoriResmi: {
    width: '100%',
    height: '100%',
  },
  kategoriIsimKutusu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 12,
  },
  kategoriIsmi: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  listeKapsayici: {
    padding: 16,
  },
}); 