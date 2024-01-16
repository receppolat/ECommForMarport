import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './CategoryCard.style';
import type {ICategoryCardProps} from './CategoryCard.type';
import {navigateTo} from '../../../routes/helper';
import {globalStyles} from '../../../style';

const CategoryCard = (props: ICategoryCardProps) => {
  const {category, index} = props;

  const navigateToDetail = () => navigateTo('CategoryDetail', {category});

  return (
    <TouchableOpacity
      onPress={navigateToDetail}
      style={[globalStyles.cardContainer, styles.container]}>
      <View style={styles.boxContainer}>
        <Text style={styles.boxText}>{index + 1}</Text>
      </View>
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
