import { StyleSheet } from "react-native";

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
  },
  highlight: {
    fontWeight: '700',
  },
  searchInput: {
    padding: 6,
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: 'whitesmoke',
    borderRadius: 6,
  },
  cancelButton: {
    backgroundColor: 'transparent'
  }
});

export default styles;
