import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>SubscriptionDetails: {id}</Text>
            <Link href="/subscriptions" className="mt-4 rounded bg-primary text-white p-4">Go Back</Link>
        </View>
    )
}

export default SubscriptionDetails