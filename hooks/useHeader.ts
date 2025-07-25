import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import { DependencyList, useLayoutEffect } from 'react';

export const useHeader = (
  options: Partial<NativeStackNavigationOptions>,
  deps: DependencyList = []
) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation, options, ...deps]);
};
