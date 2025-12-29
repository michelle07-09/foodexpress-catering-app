
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { colors } from '@/styles/commonStyles';

interface SupabaseInstructionsProps {
  onDismiss: () => void;
}

export const SupabaseInstructions: React.FC<SupabaseInstructionsProps> = ({ onDismiss }) => {
  const openSupabase = () => {
    Linking.openURL('https://supabase.com');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>🚀 Setup Supabase</Text>
        <Text style={styles.description}>
          Untuk mengaktifkan fitur autentikasi dan database, ikuti langkah berikut:
        </Text>

        <View style={styles.step}>
          <Text style={styles.stepNumber}>1</Text>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Buat Project Supabase</Text>
            <Text style={styles.stepText}>
              Kunjungi supabase.com dan buat project baru
            </Text>
          </View>
        </View>

        <View style={styles.step}>
          <Text style={styles.stepNumber}>2</Text>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Dapatkan Credentials</Text>
            <Text style={styles.stepText}>
              Di dashboard Supabase, buka Settings → API dan copy Project URL dan anon key
            </Text>
          </View>
        </View>

        <View style={styles.step}>
          <Text style={styles.stepNumber}>3</Text>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Update lib/supabase.ts</Text>
            <Text style={styles.stepText}>
              Ganti YOUR_SUPABASE_URL dan YOUR_SUPABASE_ANON_KEY dengan credentials Anda
            </Text>
          </View>
        </View>

        <View style={styles.step}>
          <Text style={styles.stepNumber}>4</Text>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Buat Database Table</Text>
            <Text style={styles.stepText}>
              Jalankan SQL query yang ada di SETUP_INSTRUCTIONS.md
            </Text>
          </View>
        </View>

        <View style={styles.note}>
          <Text style={styles.noteTitle}>💡 Catatan</Text>
          <Text style={styles.noteText}>
            App akan tetap berfungsi dengan mock data jika Supabase belum dikonfigurasi.
            Anda bisa setup Supabase nanti!
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={openSupabase}>
          <Text style={styles.buttonText}>Buka Supabase</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dismissButton} onPress={onDismiss}>
          <Text style={styles.dismissButtonText}>Lanjutkan dengan Mock Data</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 24,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 32,
    marginRight: 12,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  note: {
    backgroundColor: colors.highlight,
    padding: 16,
    borderRadius: 12,
    marginVertical: 20,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  noteText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dismissButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },
  dismissButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});