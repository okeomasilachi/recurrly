import "@/global.css";
import { styled } from "nativewind";
import type { ComponentPropsWithoutRef } from "react";
import { SafeAreaView as RNSAV } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSAV);

type SafeAreaProps = ComponentPropsWithoutRef<typeof RNSAV> & {
  className?: string;
};

export default function Sav({ children, className, ...props }: SafeAreaProps) {
  return (
    <SafeAreaView
      className={["flex-1 p-5 bg-background", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
} 