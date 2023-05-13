import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';

const UCList = ({ucs}) => {
  const renderItem = ({item}) => (
    <ListItem bottomDivider>
      <Icon name="book" type="font-awesome" color="#517fa4" />
      <ListItem.Content>
        <ListItem.Title>{item.nome}</ListItem.Title>
        <ListItem.Subtitle>
          Situação de aprendizagem mais recente: {item.situacaoAprendizagem}
          </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View>
      <Text style={styles.title}>Lista de UCs</Text>
      <FlatList
        data={ucs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UCList;
