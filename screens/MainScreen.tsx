import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../styles";

const SEARCH_PLACEHOLDER_TEXT = 'Search your favorite cocktails';

const MainScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>();

  useEffect(() => {
    setLoading(false);
    if (query && query.length > 2) {
      console.log("Loading Detail screen");
      navigation.navigate('Detail', { query: query });
    }
  }, [query]);

  return <LinearGradient colors={['#ff36a1', '#ff7a78']} style={{ flex: 3, flexDirection: 'column' }}>

    {loading ? <ActivityIndicator size="large" color="#ffffff" style={styles.loadingContainer} /> :
      <View style={styles.container}>
        <Text style={styles.mainTitle}>CocktailFinder</Text>
        <TextInput placeholder={SEARCH_PLACEHOLDER_TEXT} style={styles.searchInput} onChangeText={(text) => setQuery(text)} />
        {/*  <Button
          onPress={() =>
            navigation.navigate('Detail', { query: 'martini' })
          }
          title="Details"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" /> */}
      </View>}

  </LinearGradient>
}

export default MainScreen;
