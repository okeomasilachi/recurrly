import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/lib/utils'
import clsx from 'clsx'
import React from 'react'
import { Image, Pressable, Text, TextProps, View } from 'react-native'

// ─── Shared truncation props ──────────────────────────────────────────────────
const TRUNCATE: Pick<TextProps, 'numberOfLines' | 'ellipsizeMode'> = {
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}

// ─── Sub-component ────────────────────────────────────────────────────────────
const DetailRow = ({ label, value }: { label: string; value?: string }) => (
  <View className="sub-row">
    <View className="sub-row-copy">
      <Text className="sub-label">{label}</Text>
      <Text className="sub-value" {...TRUNCATE}>{value}</Text>
    </View>
  </View>
)

// ─── Main component ───────────────────────────────────────────────────────────
const SubscriptionCard = ({
  name, price, currency, icon, billing, color,
  plan, paymentMethod, category, renewalDate,
  expanded, startDate, status, onPress,
}: SubscriptionCardProps) => {

  const metaText =
    category?.trim() ||
    plan?.trim() ||
    (renewalDate ? formatSubscriptionDateTime(renewalDate) : '')

  return (
    <Pressable
      onPress={onPress}
      className={clsx('sub-card', expanded ? 'sub-card-expanded' : 'bg-card')}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">{name}</Text>
            <Text {...TRUNCATE} className="sub-meta">{metaText}</Text>
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-bdy">
          <View className="sub-details">
            <DetailRow label="Payment"      value={paymentMethod?.trim()} />
            <DetailRow label="Category"     value={category?.trim() || plan?.trim()} />
            <DetailRow label="Started"      value={startDate ? formatSubscriptionDateTime(startDate) : undefined} />
            <DetailRow label="Renewal Date" value={renewalDate ? formatSubscriptionDateTime(renewalDate) : undefined} />
            <DetailRow label="Status"       value={status ? formatStatusLabel(status) : undefined} />
          </View>
        </View>
      )}
    </Pressable>
  )
}

export default SubscriptionCard