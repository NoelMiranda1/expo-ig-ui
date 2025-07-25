import React, { PropsWithChildren, PureComponent } from 'react';
import { FlatList, FlatListProps, ListRenderItemInfo } from 'react-native';
import Animated from 'react-native-reanimated';

type Props<T extends { id: ID }> = PropsWithChildren<
  {
    data: T[];
    animated?: boolean;
    renderItem: (item: ListRenderItemInfo<T>) => React.JSX.Element;
  } & Omit<FlatListProps<T>, 'data' | 'renderItem'>
>;

class OptimizedFlatList<T extends { id: ID }> extends PureComponent<Props<T>> {
  render() {
    const Component = this.props.animated ? Animated.FlatList : FlatList;

    return (
      <Component
        initialNumToRender={12}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        {...this.props}
        CellRendererComponent={undefined}
        data={this.props.data}
        renderItem={this.props.renderItem}
      />
    );
  }
}

export default OptimizedFlatList;
