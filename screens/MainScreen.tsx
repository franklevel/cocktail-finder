import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Image, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PRIMARY_COLOR, SEARCH_PLACEHOLDER_TEXT, SECONDARY_COLOR, COCKTAIL_FINDER_TEXT, DEBOUNCE_DELAY } from '../constants';
import { debounce } from 'lodash'
import { useDispatch, useSelector } from "react-redux";
import { setSearchQueryActionThunk } from "../redux/actions/drinksActions";
import { AppState } from "../types/AppState";
import styles from "../styles";


const MainScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const query = useSelector((state: AppState) => state.query);
  const dispatch = useDispatch();
  const loadDetailScreen = debounce(() => navigation.navigate('Detail', { query: query }), DEBOUNCE_DELAY);

  useEffect(() => {
    setLoading(false);
    if (query && query.length > 2) {
      console.log("Loading detail screen using deboucing");
      loadDetailScreen();
    }
  }, [query]);

  return <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} style={styles.linearGradient}>

    {loading ? <ActivityIndicator size="large" color="#ffffff" style={styles.loadingContainer} /> :
      <>
        <View style={styles.container}>
          <Image source={require('../assets/cocktail.png')} style={styles.logo}></Image>
          <Text style={styles.mainTitle}>{COCKTAIL_FINDER_TEXT}</Text>
          <TextInput
            placeholder={SEARCH_PLACEHOLDER_TEXT}
            style={styles.searchInput}
            value={query}
            onChangeText={(text) => dispatch(setSearchQueryActionThunk(text))}
          />
        </View>
      </>
    }

  </LinearGradient>
}

export default MainScreen;
