import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography } from '../theme';

type TabType = 'home' | 'messages' | 'resources' | 'profile';

type BottomNavigationProps = {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
};

const Icon = ({ name, active }: { name: TabType; active: boolean }) => {
  const iconNameMap: Record<TabType, { focused: any; outline: any }> = {
    home: { focused: 'home', outline: 'home-outline' },
    messages: { focused: 'chatbubble-ellipses', outline: 'chatbubble-ellipses-outline' },
    resources: { focused: 'book', outline: 'book-outline' },
    profile: { focused: 'person-circle', outline: 'person-circle-outline' },
  } as const;

  const iconName = active ? iconNameMap[name].focused : iconNameMap[name].outline;
  const color = active ? '#1D4ED8' : '#374151';
  return <Ionicons name={iconName as any} size={20} color={color} style={styles.icon} />;
};

const TabButton = ({
  tab,
  label,
  active,
  onPress,
}: {
  tab: TabType;
  label: string;
  active: boolean;
  onPress: () => void;
}) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.tabButton,
      pressed && styles.tabButtonPressed,
      active && styles.tabButtonActive,
    ]}
    android_ripple={{ color: '#E5E7EB' }}
    hitSlop={8}
  >
    <Icon name={tab} active={active} />
    <Text style={[styles.tabLabel, active && styles.activeTabLabel]}>
      {label}
    </Text>
  </Pressable>
);

export default function BottomNavigation({ activeTab, onTabPress }: BottomNavigationProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TabButton
          tab="home"
          label="Home"
          active={activeTab === 'home'}
          onPress={() => onTabPress('home')}
        />
        <TabButton
          tab="messages"
          label="Messages"
          active={activeTab === 'messages'}
          onPress={() => onTabPress('messages')}
        />
        <TabButton
          tab="resources"
          label="Resources"
          active={activeTab === 'resources'}
          onPress={() => onTabPress('resources')}
        />
        <TabButton
          tab="profile"
          label="Profile"
          active={activeTab === 'profile'}
          onPress={() => onTabPress('profile')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: 14,
    paddingTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  tabButtonPressed: {
    backgroundColor: '#EEF2FF',
  },
  tabButtonActive: {
    backgroundColor: '#F5F7FF',
  },
  icon: {
    fontSize: 18,
    marginBottom: 4,
    color: colors.text,
  },
  tabLabel: {
    ...typography.body,
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  activeTabLabel: {
    color: '#1D4ED8',
    fontWeight: '600',
  },
});
