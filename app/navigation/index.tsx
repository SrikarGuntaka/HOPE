import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomNavigation } from '../components';

type TabType = 'home' | 'messages' | 'resources' | 'profile';

// Minimal in-app navigator to switch between Login and main app with bottom nav
export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('home');

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1 }}>
        <LoginScreen onAuthenticated={() => setIsAuthenticated(true)} />
      </View>
    );
  }

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return (
          <DashboardScreen 
            onSubjectPress={(subject) => console.log('Subject pressed:', subject)}
            onTeacherPress={(teacher) => console.log('Teacher pressed:', teacher)}
          />
        );
      case 'messages':
        return <MessagesScreen />;
      case 'resources':
        return <ResourcesScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderActiveScreen()}
      <BottomNavigation activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
}


