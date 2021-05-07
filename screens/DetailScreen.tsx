import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Card from "../components/Card";
import { API_BASE_URL, CANCEL_BUTTON_TEXT, PRIMARY_COLOR, SEARCH_INPUT_TEXT, SECONDARY_COLOR } from "../constants";
import styles from "../styles";

const fetchData = async (drink: string) => {
  try {
    if (!drink) throw "Empty string";
    const response = await fetch(`${API_BASE_URL}search.php?s=${drink}`);
    const drinks = await response.json();
    return drinks;
  } catch (error) {
    return error;
  }
}

const DetailScreen = ({ navigation, route }: any) => {
  const [query, setQuery] = useState<string>();
  const [drinks, setDrinks] = useState<Array<any>>();
  const [loading, setLoading] = useState<boolean>(true);
  const drink = route.params.query;

  useEffect(() => {

    fetchData(drink).then(response => {
      if (response) {
        setDrinks(response.drinks);
      }
    }).catch(error => {
      console.log(error);
      setDrinks([]);
    }).finally(() => setLoading(false))

    return () => { }
  }, []);

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const text = e.nativeEvent.text;
    setQuery(text);
    if (text) {
      setLoading(true);
      fetchData(text).then(response => {
        if (response) {
          setDrinks(response.drinks);
        }
      }).catch(error => {
        console.log(error);
      }).finally(() => setLoading(false));

    }
  }



  return <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} style={styles.linearGradient}>

    <>
      <View style={styles.topBarContainer}>
        <TextInput
          placeholder={SEARCH_INPUT_TEXT}
          onChange={onChange}
          defaultValue={drink}
          value={query}
          style={[styles.searchInput, { width: '78%', marginLeft: 5, marginTop: 5, marginRight: 5 }]} />
        <TouchableOpacity onPress={() => setQuery('')} ><Text style={styles.topBarButton}>{CANCEL_BUTTON_TEXT}</Text></TouchableOpacity>
      </View>
      <ScrollView>
        {loading ? <ActivityIndicator size="large" color="#ffffff" style={styles.loadingContainer} /> :
          <View >
            {drinks?.map(item => <Card key={item.idDrink} title={item.strDrink} image={item.strDrinkThumb}></Card>)}

          </View>
        }
      </ScrollView>
    </>


  </LinearGradient>

}

export default DetailScreen;
