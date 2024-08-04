import { G2 } from 'bizcharts';
import { useEffect, useState } from 'react';
import store from '@/mobx';
import { toJS } from 'mobx';

const defaultDarkTheme = G2.getTheme('dark');

G2.registerTheme('darkTheme', {
  ...defaultDarkTheme,
  background: 'transparent',
});

function useBizTheme() {
  const { useAppStore } = store;
  const { settings } = useAppStore;

  const theme = toJS(settings).theme;
  const themeName = theme === 'dark' ? 'darkTheme' : 'light';
  const [themeObj, setThemeObj] = useState(G2.getTheme(themeName));

  useEffect(() => {
    const themeName = theme === 'dark' ? 'darkTheme' : 'light';
    const newTheme = G2.getTheme(themeName);
    setThemeObj(newTheme);
  }, [theme]);

  return themeObj;
}

export default useBizTheme;
