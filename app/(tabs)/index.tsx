import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import Sav from "@/ui/sav";

export default function App() {
  return (
    <Sav>
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4">Spotify Subscription</Link>
    </Sav>
  );
} 