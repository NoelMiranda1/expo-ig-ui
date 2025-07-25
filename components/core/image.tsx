import React, { PropsWithChildren } from 'react';
import { Image as ExpoImage, ImageProps as ExpoImageProps } from 'expo-image';

type Props = PropsWithChildren<ExpoImageProps>;

const Image: React.FC<Props> = (props): React.ReactNode => {
  return <ExpoImage contentFit="cover" transition={200} {...props} />;
};

export default Image;
