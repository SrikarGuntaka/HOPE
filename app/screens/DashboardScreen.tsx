import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import { colors, spacing, typography } from '../theme';

type SubjectProgress = {
  name: string;
  percent: number; // 0..100
};

const SUBJECTS: SubjectProgress[] = [
  { name: 'Physics', percent: 68 },
  { name: 'Math', percent: 52 },
  { name: 'Science', percent: 77 },
  { name: 'History', percent: 35 },
  { name: 'Literature', percent: 81 },
];

const TEACHERS = [
  { name: 'Helena Hills', email: 'email@fakedomain.net' },
  { name: 'Oscar Durn', email: 'oscar@fakedomain.net' },
  { name: 'Carlo Emilion', email: 'carlo@fakedomain.net' },
];

type DashboardScreenProps = {
  onSubjectPress?: (subject: string) => void;
  onTeacherPress?: (teacher: string) => void;
};

export default function DashboardScreen({ onSubjectPress, onTeacherPress }: DashboardScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Home</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Learning Progress</Text>
          <View style={styles.spacerSm} />
          {SUBJECTS.map((s) => (
            <Pressable
              key={s.name}
              onPress={() => onSubjectPress?.(s.name)}
              style={({ pressed }) => [
                styles.progressRow,
                pressed && styles.rowPressed,
              ]}
            >
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>{s.name}</Text>
                <Text style={styles.progressValue}>{s.percent}%</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${s.percent}%` }]} />
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Teachers</Text>
          {TEACHERS.map((teacher) => (
            <Pressable
              key={teacher.name}
              onPress={() => onTeacherPress?.(teacher.name)}
              style={({ pressed }) => [
                styles.listItem,
                pressed && styles.listItemPressed,
              ]}
              android_ripple={{ color: '#E5E7EB' }}
            >
              <View style={styles.avatar} />
              <View style={styles.listTextWrap}>
                <Text style={styles.listTitle}>{teacher.name}</Text>
                <Text style={styles.listSub}>{teacher.email}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 116, // Adjusted to match reduced nav padding
  },
  headerTitle: {
    ...typography.title,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  cardTitle: {
    ...typography.body,
    color: colors.text,
    fontWeight: '700',
  },
  spacerSm: { height: spacing.md },
  progressRow: {
    marginBottom: spacing.lg,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: '100%',
  },
  rowPressed: {
    backgroundColor: '#EEF2FF',
    borderRadius: 8,
    // Only color change to avoid layout shift
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressLabel: {
    ...typography.body,
    color: colors.text,
    fontWeight: '500',
  },
  progressValue: {
    ...typography.body,
    color: colors.secondary,
  },
  progressTrack: {
    height: 10,
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
  },
  listItemPressed: {
    backgroundColor: '#EEF2FF',
    borderRadius: 8,
    // Only color change to avoid layout shift
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },
  listTextWrap: { flex: 1 },
  listTitle: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
  listSub: {
    ...typography.body,
    color: colors.secondary,
    fontSize: 14,
  },
});


