import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "./constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 12
  },
  topBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 26,
    paddingLeft: 12,
    marginTop: 12,
    fontWeight: '600',
    flexShrink: 1
  },
  cardThumb: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  cardDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    flexShrink: 1
  },
  highlight: {
    fontWeight: '700',
  },
  searchInput: {
    width: '90%',
    padding: 6,
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#ebebeb',
    borderRadius: 6,
  },
  topBarButton: {
    fontSize: 18,
    fontWeight: '600',
    color: PRIMARY_COLOR,
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: 5
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  }
});

export default styles;
