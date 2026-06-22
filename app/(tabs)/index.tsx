import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import ListHeading from "@/ui/ListHeading";
import Sav from "@/ui/sav";
import SubscriptionCard from "@/ui/SubscriptionCard";
import UpcominsSubCard from "@/ui/UpcominsSubCard";
import dayjs from "dayjs";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null)

  return (
    <Sav>
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <TouchableOpacity>
          <Image source={icons.add} className="home-add-icon" />
        </TouchableOpacity>
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
          <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
        </View>
      </View>

      <View>
        <ListHeading title="Upcoming" />
        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => (<UpcominsSubCard {...item} />)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals yet.</Text>}
        />
      </View>

      <View>
        <ListHeading title="All Subscriptions" />
        <SubscriptionCard
          expanded={expandedSubscriptionId === HOME_SUBSCRIPTIONS[0].id}
          onPress={() => setExpandedSubscriptionId((currentId) => (currentId === HOME_SUBSCRIPTIONS[0].id ? null : HOME_SUBSCRIPTIONS[0].id))}
          {...HOME_SUBSCRIPTIONS[0]} />
      </View>

    </Sav>
  );
} 