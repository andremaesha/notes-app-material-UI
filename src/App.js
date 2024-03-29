import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Notes from "./Pages/Notes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fefefe",
        },
        secondary: purple,
    },
    typography: {
        fontFamily: "Quicksand",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Notes />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    );
};

export default App;
