import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Card from "../components/Card";
import { CANCEL_BUTTON_TEXT, SEARCH_INPUT_TEXT } from "../constants";
import styles from "../styles";



const fetchDrinks = async (drink: string) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
  const drinks = await response.json();
  return drinks;
}


const DetailScreen = ({ route }: any) => {
  const [query, setQuery] = useState<string>();
  const [drinks, setDrinks] = useState<Array<any>>();
  const [loading, setLoading] = useState<boolean>(true);

  let drink = route.params.query;


  useEffect(() => {

    fetchDrinks(drink).then(response => {
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
      fetchDrinks(text).then(response => {
        if (response) {
          setDrinks(response.drinks);
        }
      }).catch(error => {
        console.log(error);
      }).finally(() => setLoading(false));

    }
  }

  return <LinearGradient colors={['#ff36a1', '#ff7a78']} style={{ flex: 3, flexDirection: 'column' }}>

    <>
      <View style={styles.topBarContainer}>
        <TextInput
          placeholder={SEARCH_INPUT_TEXT}
          onChange={onChange}
          defaultValue={drink}
          value={query}
          style={[styles.searchInput, { width: '80%', marginLeft: 5, marginTop: 5, marginRight: 5 }]} />
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
