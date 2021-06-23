import React from 'react';
import { View, StyleSheet } from 'react-native';
// <generic>(params): return-type => {}
const ContainerWrapper = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => {
  return (props) => (
    <View>
      <Component {...props}>
        {/* Add some children */}
      </Component>
    </View>
  );
}

export default ContainerWrapper;