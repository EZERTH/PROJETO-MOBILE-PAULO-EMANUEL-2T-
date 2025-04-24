import { Image, StyleSheet, Platform, Pressable } from 'react-native'; 
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { router } from 'expo-router';

export default function HomeScreen() { 
  const user = "Paulo"; // Defina o nome do usuário aqui

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/nubanco.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo, {user}!</ThemedText>
        <HelloWave />
      </ThemedView><Pressable
          onPress={() => router.push('/explore')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#841584' : '#fff', // Escurece quando pressionado
            padding: 7,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            width: 38,
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }], // Efeito de "afundar"
          })}
        >
          <ThemedText style={{ color: '', fontWeight: 'bold' }}>PIX</ThemedText>
        </Pressable>
        
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo da conta:</ThemedText>
        <ThemedText type="defaultSemiBold">120,02</ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
