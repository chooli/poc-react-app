import React from 'react';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import translationEN from './locales/en.json';
import store from './fundation/redux/App.redux-store';
import {BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './fundation/layout/MainLayout';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/es/styles';
import ApplicationContext from './ApplicationContext';

const THEME = createMuiTheme({
  typography: {
    'fontFamily': 'Nunito Sans, Helvetica, Arial, sans-serif',
    'fontSize': 14,
    'fontWeight': 600,
  },
});

const defaultNamespace = 'foundation-react-app';

const initI18n = (option) => {
  i18n.init(option);
  return i18n;
};

const App = ({appContext}) => (
  <MuiThemeProvider theme={THEME}>
    <Router>
      <Provider store={store}>
        <I18nextProvider i18n={initI18n({
          interpolation: {escapeValue: false},
          lng: appContext.language,
          resources: {
            en: {
              translation: translationEN
            }
          },
        })}
        >
          <ApplicationContext.Provider value={appContext}>
            <MainLayout/>
          </ApplicationContext.Provider>
        </I18nextProvider>
      </Provider>
    </Router>
  </MuiThemeProvider>
);

export default App;
