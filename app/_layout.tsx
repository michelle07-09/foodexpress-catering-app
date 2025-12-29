
import { Stack } from 'expo-router';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function RootLayout() {
  return (
    <AuthProvider>
      <CartProvider>
        <StripeProvider
          publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''}
          merchantIdentifier="merchant.com.foodexpress"
        >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            <Stack.Screen name="formsheet" options={{ presentation: 'formSheet' }} />
            <Stack.Screen
              name="transparent-modal"
              options={{
                presentation: 'transparentModal',
                animation: 'fade',
              }}
            />
          </Stack>
        </StripeProvider>
      </CartProvider>
    </AuthProvider>
  );
}
