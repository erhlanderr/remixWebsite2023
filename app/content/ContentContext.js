import React, { useContext } from 'react';

export const ContentContext = React.createContext();


export const useContentContext = () => useContext(ContentContext);