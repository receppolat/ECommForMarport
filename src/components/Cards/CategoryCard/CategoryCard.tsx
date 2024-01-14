import {View, Text} from 'react-native';
import React from 'react';

import styles from './CategoryCard.style';
import type {ICategoryCardProps} from './CategoryCard.type';

const CategoryCard = (props: ICategoryCardProps) => {
  const {category, index} = props;

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.boxText}>{index + 1}</Text>
      </View>
      <Text style={styles.categoryText}>{category}</Text>
    </View>
  );
};

export default CategoryCard;
