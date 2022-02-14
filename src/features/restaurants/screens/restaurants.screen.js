import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext }  from "react";
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
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActivityIndicator, Colors } from "react-native-paper";


const Loading = styled(ActivityIndicator)`
   margin-left: -25px;
 `;
 const LoadingContainer = styled.View`
   position: absolute;
   top: 50%;
   left: 50%;
 `;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);

  return (
    <SafeArea>
      {isLoading && (
         <LoadingContainer>
           <Loading size={50} animating={true} color={Colors.blue300} />
         </LoadingContainer>
       )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
         renderItem={({ item }) => {
           return (
             <Spacer position="bottom" size="large">
               <RestaurantInfoCard restaurant={item} />
             </Spacer>
           );
         }}
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
