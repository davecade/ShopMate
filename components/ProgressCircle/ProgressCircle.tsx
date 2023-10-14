import React, {useMemo} from 'react';
import {View} from 'react-native';
import Svg, {Circle, Text} from 'react-native-svg';
import {
  completedColor,
  inProgressColor,
  notStartedColor,
} from '../ListCard/styles';

type ProgressCircleProps = {
  total: number;
  completed: number;
  radius: number;
  strokeWidth: number;
};

const ProgressCircle = ({
  total,
  completed,
  radius,
  strokeWidth,
}: ProgressCircleProps) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (completed / total) * circumference;
  const progressText = `${completed}/${total}`;

  const progressColor = useMemo(() => {
    if (completed === 0) {
      return notStartedColor;
    }

    if (completed === total) {
      return completedColor;
    }

    return inProgressColor;
  }, [completed, total]);

  return (
    <View>
      <Svg
        width={radius * 2 + strokeWidth}
        height={radius * 2 + strokeWidth}
        viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}>
        <Circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="gray"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray.toString()}
          strokeDashoffset={strokeDashoffset.toString()}
        />
        <Text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill={progressColor}
          fontSize="16"
          dy=".3em">
          {progressText}
        </Text>
      </Svg>
    </View>
  );
};

export default ProgressCircle;
