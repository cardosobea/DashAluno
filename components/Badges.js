import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

const Badges = ({badges}) => {
  const lastThreeBadges = badges.slice(-3);

  return (
    <Card containerStyle={styles.card}>
      <Card.Title>Últimas 3 Badges</Card.Title>
      <View style={styles.badgesContainer}>
        {lastThreeBadges.map((badge) => (
          <View key={badge.id} style={styles.badge}>
            <Image style={styles.badgeImage} source={{uri: 'data:image/png;base64,' + badge.imagem}} />
            <Text style={styles.badgeDescription}>{badge.descricao}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#004A8D",
    borderRadius: 30
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
  },
  badgeImage: {
    width: 60,
    height: 60,
  },
  badgeDescription: {
    width: 100,
    marginTop: 5,
    textAlign: 'center',
    overflow: 'hidden',
    color: "white"
  },
});

export default Badges;
