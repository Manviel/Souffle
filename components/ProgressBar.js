import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const ProgressBar = () => {
  let animation = useRef(new Animated.Value(0));

  const [progress, setProgress] = useState(0);

  useInterval(() => {
    if (progress < 100) {
      setProgress(progress + 2);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });

  return (
    <View style={styles.bar}>
      <Animated.View
        style={
          ([StyleSheet.absoluteFill], { backgroundColor: "#292F2F", width })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    height: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#E7E7E7"
  }
});

export default ProgressBar;
