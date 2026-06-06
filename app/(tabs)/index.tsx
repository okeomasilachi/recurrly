import "@/global.css";
import Sav from "@/ui/sav";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function App() {
  return (
    <Sav>
      <Text className="text-7xl font-sans-extrabold">Home</Text>
      <Text className="text-7xl font-bold">Home</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4">Spotify Subscription</Link>
    </Sav>
  );
} 