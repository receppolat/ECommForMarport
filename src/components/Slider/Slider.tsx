import {View, FlatList, Image, ListRenderItem, Text} from 'react-native';
import React from 'react';

import type {ISliderProps} from './Slider.type';
import styles from './Slider.style';
import {Dot} from './components';

const Slider = (props: ISliderProps) => {
  const {images} = props;

  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const onMomentumScrollEnd = event => {
    const index = Math.floor(
      Math.floor(event.nativeEvent.contentOffset.x) /
        Math.floor(event.nativeEvent.layoutMeasurement.width),
    );
    setActiveIndex(index ?? 0);
  };

  const renderItem: ListRenderItem<string> = ({item}) => (
    <Image
      {...{source: {uri: item}, style: styles.image, resizeMode: 'contain'}}
    />
  );

  const renderDot: ListRenderItem<string> = ({item, index}) => {
    return <Dot {...{active: activeIndex === index}} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        {...{
          data: images,
          renderItem,
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          pagingEnabled: true,
          onMomentumScrollEnd,
        }}
      />
      <View style={styles.dotContainer}>
        <FlatList
          {...{data: images, renderItem: renderDot, horizontal: true}}
        />
      </View>
    </View>
  );
};

export default Slider;
