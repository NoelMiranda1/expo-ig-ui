import { DefaultTheme, ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren, useMemo } from 'react';
import 'react-native-reanimated';

const ThemeProvider: React.FC<PropsWithChildren> = (props): React.ReactNode => {
  const theme: typeof DefaultTheme = useMemo(
    () => ({
      ...DefaultTheme,
      dark: true,
      colors: {
        primary: 'rgb(255, 255, 255)',
        background: 'rgb(0, 0, 0)',
        card: 'rgb(0, 0, 0)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(156, 156, 156)',
        notification: 'rgb(230, 227, 227)',
      },
    }),
    []
  );

  return <RNThemeProvider value={theme}>{props.children}</RNThemeProvider>;
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
    </ThemeProvider>
  );
}
