import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { colors, typography } from '../theme';
import { Button } from '../components';

type LoginScreenProps = {
  onAuthenticated?: () => void;
};

export default function LoginScreen({ onAuthenticated }: LoginScreenProps) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.brand}>HOPE</Text>
        <Text style={styles.subheading}>A new way to learn.</Text>

        <View style={styles.spacer32} />

        <Text style={styles.sectionTitle}>Create an account or login</Text>
        <Text style={styles.helperText}>
          Enter your email to sign up or login to the app
        </Text>

        <View style={styles.spacer16} />

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          placeholder="email@domain.com"
          placeholderTextColor={colors.secondary}
        />

        <View style={styles.spacer12} />

        <Button label="Continue" onPress={() => onAuthenticated && onAuthenticated()} />

        <View style={styles.spacer24} />

        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.spacer16} />

        <TouchableOpacity style={styles.oauthButton} activeOpacity={0.8}>
          <Text style={styles.oauthText}>Continue with Google</Text>
        </TouchableOpacity>

        <View style={styles.spacer12} />

        <TouchableOpacity style={styles.oauthButton} activeOpacity={0.8}>
          <Text style={styles.oauthText}>Continue with Apple</Text>
        </TouchableOpacity>

        <View style={styles.spacer24} />

        <Text style={styles.legal}>
          By clicking continue, you agree to our
          <Text style={styles.link}> Terms of Service</Text>
          <Text> and</Text>
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    justifyContent: 'center',
  },
  heading: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  brand: {
    ...typography.title,
    textAlign: 'center',
    color: colors.text,
    fontSize: 36,
    fontWeight: '800',
  },
  subheading: {
    ...typography.title,
    textAlign: 'center',
    color: colors.text,
    fontSize: 20,
    marginTop: 8,
  },
  sectionTitle: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '700',
  },
  helperText: {
    ...typography.body,
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    color: colors.text,
    backgroundColor: '#fff',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  orText: {
    marginHorizontal: 12,
    color: colors.secondary,
  },
  oauthButton: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  oauthEmoji: {
    marginRight: 8,
    fontSize: 16,
  },
  oauthText: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
  legal: {
    ...typography.body,
    color: colors.secondary,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
  },
  link: {
    color: colors.text,
    textDecorationLine: 'underline',
  },
  spacer12: { height: 12 },
  spacer16: { height: 16 },
  spacer24: { height: 24 },
  spacer32: { height: 32 },
});


