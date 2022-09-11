import * as React from "react";

export const PageSelectProvider = React.createContext({
    Page: '',
    SelectPage: () => {},
    Props: {},
    SetProps: () => {}
});
