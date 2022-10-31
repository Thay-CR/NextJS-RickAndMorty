import React from 'react';
import ReactLoading from 'react-loading';
import { ILoadingProps } from '../types/index'

const Loading = ({ type, color }: ILoadingProps) => (
    <ReactLoading type={type} color={color} height={'5%'} width={'5%'} />
);

export default Loading;