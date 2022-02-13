import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantsScreen = () => {
  const SearchContainer = styled(SafeAreaView)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;
 

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantList
       data={[
         { name: 1 },
         { name: 2 },
         { name: 3 },
         { name: 4 },
         { name: 5 },
         { name: 6 },
         { name: 7 },
         { name: 8 },
         { name: 9 },
         { name: 10 },
         { name: 11 },
         { name: 12 },
         { name: 13 },
         { name: 14 },
       ]}
       renderItem={() => (
         <Spacer position="bottom" size="large">
           <RestaurantInfoCard />
         </Spacer>
       )}
       keyExtractor={(item) => item.name}
     />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
