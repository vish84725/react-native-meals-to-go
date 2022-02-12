import React from 'react';
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from '../../../components/typography/text.component';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Platform,
    StatusBar,
  } from "react-native";
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://picsum.photos/200/300"
        ],
        address = '45, sri dowmitta road, galle.',
        isOpenNow = true,
        rating =2,
        isClosedTemporarily = true,
    } = restaurant;

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
           <Rating>
             {ratingArray.map(() => (
               <SvgXml xml={star} width={20} height={20} />
             ))}
           </Rating>
           <SectionEnd>
             {isClosedTemporarily && (
               <Text variant="error">
                 CLOSED TEMPORARILY
               </Text>
             )}
             <Spacer position="left" size="large">
               {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
             </Spacer>
             <Spacer position="left" size="large">
               <Icon/>
             </Spacer>
           </SectionEnd>
         </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor:'white'
    },
    cover: {
        padding: 20,
        backgroundColor:'white'
    },
    title:{
        padding: 16,
    }
  });
  