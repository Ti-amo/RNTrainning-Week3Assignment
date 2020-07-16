import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from './../styles/styles'
const Button = props => (
    <TouchableOpacity
        style={styles.button}
        onPress={() => props.onPress(props.name)}
    >
        <Text style={styles.buttonText}>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </Text>
    </TouchableOpacity>
);

export default Button;