import { ThemeProvider } from "./Context/ThemeContext"


const StoreProvider = ({children}) => {
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}



export default StoreProvider;