import React, { useEffect, useState } from "react";
import { ActivityIndicator, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Card from "../components/Card";
import { CANCEL_BUTTON_TEXT, PRIMARY_COLOR, SEARCH_INPUT_TEXT, SECONDARY_COLOR } from "../constants";
import { fecthDrinksActionThunk, setSearchQueryActionThunk } from "../redux/actions/drinksActions";
import styles from "../styles";
import { useSelector, useDispatch } from "react-redux"
import { AppState } from "../types/AppState";
import Icon from 'react-native-vector-icons/MaterialIcons';
const ArrowBackIcon = <Icon name="arrow-back" size={24} color={PRIMARY_COLOR} />;


const DetailScreen = ({ navigation, route }: any) => {
  const drink = route.params.query;
  const dispatch = useDispatch();
  const drinks = useSelector((state: AppState) => state.drinks);
  const loading = useSelector((state: AppState) => state.isLoading);
  const query = useSelector((state: AppState) => state.query);

  useEffect(() => {
    if (drink) {
      dispatch(fecthDrinksActionThunk(drink));
    }
    return () => {
      // If you want to keep the initial query search thenn comment the following line
      dispatch(setSearchQueryActionThunk(""));
    }
  }, []);

  const goBack = (): void => {
    // If you want to keep the initial query search thenn comment the following line
    dispatch(setSearchQueryActionThunk(""));
    navigation.navigate('Home');
  }

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const drink = e.nativeEvent.text;
    dispatch(setSearchQueryActionThunk(drink));
    if (drink) {
      dispatch(fecthDrinksActionThunk(drink));
    }
  }

  return <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} style={styles.linearGradient}>
    <>
      <View style={styles.topBarContainer}>
        <TouchableOpacity onPress={goBack} style={styles.topBarBackButton}>{ArrowBackIcon}</TouchableOpacity>
        <TextInput
          placeholder={SEARCH_INPUT_TEXT}
          onChange={onChange}
          defaultValue={drink}
          value={query}
          style={[styles.searchInput, styles.topSearchInput]} />
        <TouchableOpacity onPress={() => dispatch(setSearchQueryActionThunk(''))} ><Text style={styles.topBarButton}>{CANCEL_BUTTON_TEXT}</Text></TouchableOpacity>
      </View>
      <ScrollView style={styles.linearGradient}>
        {loading ? <View><ActivityIndicator size="large" color="#ffffff" style={styles.loadingContainer} /></View> :
          <View>
            {drinks?.map(item => <Card key={item.idDrink} title={item.strDrink} image={item.strDrinkThumb}></Card>)}
          </View>
        }
      </ScrollView>
    </>
  </LinearGradient>

}

export default DetailScreen;
