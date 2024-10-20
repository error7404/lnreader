import { PluginItem } from '@plugins/types';
import { ThemeColors } from '@theme/types';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

interface MigrationSourceCardProps {
  item: PluginItem;
  theme: ThemeColors;
  noOfNovels: number;
  onPress: () => void;
}

const MigrationSourceCard = ({
  item,
  theme,
  noOfNovels,
  onPress,
}: MigrationSourceCardProps) => {
  const { name, iconUrl, lang } = item;

  return (
    <TouchableRipple
      style={styles.cardContainer}
      onPress={onPress}
      rippleColor={theme.rippleColor}
    >
      <>
        <Image source={{ uri: iconUrl }} style={styles.sourceIcon} />
        <View style={styles.sourceDetailsContainer}>
          <Text
            style={{
              color: theme.onSurface,
              fontSize: 14,
            }}
          >
            {name} {` (${noOfNovels || 0})`}
          </Text>
          <Text
            style={{
              color: theme.onSurfaceVariant,
              fontSize: 12,
            }}
          >
            {lang}
          </Text>
        </View>
      </>
    </TouchableRipple>
  );
};

export default MigrationSourceCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  sourceIcon: {
    width: 45,
    height: 45,
    borderRadius: 4,
  },
  sourceDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 16,
  },
  sourceStatus: {
    color: '#C14033',
    fontSize: 12,
    marginLeft: 5,
  },
});
