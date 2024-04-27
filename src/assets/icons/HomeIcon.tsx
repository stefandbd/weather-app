import {IconProps} from '@types/GlobalTypes';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props: IconProps) {
  return (
    <Svg
      fill="rgb(0, 168, 255)"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      {...props}>
      <Path d="M24.963 1.055a1 1 0 00-.578.209l-23 17.947a1 1 0 001.23 1.578L4 19.71V46a1 1 0 001 1h13.832a1 1 0 00.326 0h11.674a1 1 0 00.326 0H45a1 1 0 001-1V19.709l1.385 1.08a1 1 0 101.23-1.578L41 13.27V6h-6v2.586l-9.385-7.322a1 1 0 00-.652-.21zM25 3.322l19 14.826V45H32V26H18v19H6V18.148L25 3.322zM37 8h2v3.709l-2-1.563V8zM20 28h10v17H20V28z" />
    </Svg>
  );
}

export default HomeIcon;
