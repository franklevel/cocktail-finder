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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
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
    borderRadius: 80
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
    flexDirection: 'row',
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#ebebeb',
    borderRadius: 6,
  },
  topSearchInput: {
    width: '68%',
    marginLeft: 5,
    marginTop: 5,
    marginRight: 5
  },
  topBarButton: {
    fontSize: 18,
    fontWeight: '600',
    color: PRIMARY_COLOR,
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: 5
  },
  topBarBackButton: {
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: 5
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  linearGradient: {
    flex: 3,
    flexDirection: 'column'
  }
});

export default styles;
