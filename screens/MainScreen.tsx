import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../styles";
import { PRIMARY_COLOR, SEARCH_PLACEHOLDER_TEXT, SECONDARY_COLOR } from '../constants'



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

  return <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} style={{ flex: 3, flexDirection: 'column' }}>

    {loading ? <ActivityIndicator size="large" color="#ffffff" style={styles.loadingContainer} /> :
      <>
        <View style={styles.container}>
          <Image source={require('../assets/cocktail.png')} style={styles.logo}></Image>
          <Text style={styles.mainTitle}>CocktailFinder</Text>
          <TextInput
            placeholder={SEARCH_PLACEHOLDER_TEXT}
            style={styles.searchInput}
            onChangeText={(text) => setQuery(text)}
          />
        </View>
      </>
    }

  </LinearGradient>
}

export default MainScreen;
