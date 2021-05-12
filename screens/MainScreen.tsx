import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PRIMARY_COLOR, SEARCH_PLACEHOLDER_TEXT, SECONDARY_COLOR, COCKTAIL_FINDER_TEXT, DEBOUNCE_DELAY } from '../constants';
import { debounce } from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
const SearchIcon = <Icon name="search" size={24} color={PRIMARY_COLOR} style={{ marginRight: 10 }} />;
import styles from "../styles";


const MainScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const loadDetailScreen = debounce(() => navigation.navigate('Detail'), DEBOUNCE_DELAY);

  useEffect(() => {
    setLoading(false);

  }, []);

  return <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} style={styles.linearGradient}>

    {loading ? <ActivityIndicator size="large" color="#ffffff" style={styles.loadingContainer} /> :
      <>
        <View style={styles.container}>
          <Image source={require('../assets/cocktail.png')} style={styles.logo}></Image>
          <Text style={styles.mainTitle}>{COCKTAIL_FINDER_TEXT}</Text>
          <TouchableOpacity onPress={loadDetailScreen} style={styles.searchInput} >
            {SearchIcon}
            <Text style={{ color: '#aaa' }}>{SEARCH_PLACEHOLDER_TEXT}</Text>
          </TouchableOpacity>
        </View>
      </>
    }

  </LinearGradient>
}

export default MainScreen;
