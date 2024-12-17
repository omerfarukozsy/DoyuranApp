import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const LogoTitle = () => (
  <View style={stiller.logoContainer}>
    <Text style={stiller.logoText}>DOYURAN</Text>
  </View>
);

export default function Yerlesim() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          headerTitle: () => <LogoTitle />,
          headerStyle: { 
            backgroundColor: '#FF4B3A' 
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '600',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen 
        name="[category]"
        options={{
          headerTitle: "Restoranlar",
          headerStyle: { 
            backgroundColor: '#FF4B3A' 
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '600',
          },
          headerBackTitle: 'Geri',
          headerTintColor: '#fff',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}

const stiller = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
}); 