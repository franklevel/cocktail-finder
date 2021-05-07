import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Card from "../components/Card";
import styles from "../styles";

const CANCEL_BUTTON_TEXT = 'Cancel';

const fetchDrinks = async (drink: string) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
  const drinks = await response.json();
  return drinks;
}

const clearSearch = () => {
  console.log("Clearing...");
}

const DetailScreen = ({ route }: any) => {
  const [query, setQuery] = useState<string>();
  const [drinks, setDrinks] = useState<Array<any>>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let drink = route.params.query;
    setQuery(drink);
    fetchDrinks(drink).then(response => {
      if (response) {
        setDrinks(response.drinks);
      }
    }).catch(error => {
      console.log(error);
    }).finally(() => setLoading(false))
  }, [drinks]);

  return <LinearGradient colors={['#ff36a1', '#ff7a78']} style={{ flex: 3, flexDirection: 'column' }}>

    {loading ? <ActivityIndicator size="large" color="#ffffff" style={styles.loadingContainer} /> :
      <>
        <View style={styles.topBarContainer}>
          <TextInput defaultValue={query} style={[styles.searchInput, { width: '80%', marginLeft: 5, marginTop: 5, marginRight: 5 }]} />
          <Button title={CANCEL_BUTTON_TEXT} onPress={() => clearSearch()} color="transparent" />
          {/*  <SearchBar
            containerStyle={{ backgroundColor: 'white' }}
            inputStyle={{ backgroundColor: '#efefef' }}

            placeholder="Type Here..."
            platform="default"
            onChangeText={(e) => setQuery(e)}
            defaultValue={query}
            searchIcon={{ size: 24 }}
            cancelButtonTitle='Cancel'
          /> */}
        </View>
        <ScrollView>
          <View >
            {drinks?.map(item => {
              return <Card key={item.idDrink} title={item.strDrink} image={item.strDrinkThumb}>
              </Card>
            })}
          </View>
        </ScrollView>
      </>
    }

  </LinearGradient>

}

export default DetailScreen;
