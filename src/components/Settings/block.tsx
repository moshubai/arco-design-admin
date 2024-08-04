import React, { ReactNode } from 'react';
import { Switch, Divider, InputNumber } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/block.module.less';
import store from '@/mobx';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

export interface BlockProps {
  title?: ReactNode;
  options?: { name: string; value: string; type?: 'switch' | 'number' }[];
  children?: ReactNode;
}

const Block = (props: BlockProps) => {
  const { title, options, children } = props;
  const locale = useLocale();

  const { useAppStore } = store;
  const { settings } = useAppStore;

  return (
    <div className={styles.block}>
      <h5 className={styles.title}>{title}</h5>
      {options &&
        options.map((option) => {
          const type = option.type || 'switch';

          return (
            <div className={styles['switch-wrapper']} key={option.value}>
              <span>{locale[option.name]}</span>
              {type === 'switch' && (
                <Switch
                  size="small"
                  checked={!!toJS(settings)[option.value]}
                  onChange={(checked) => {
                    const newSetting = {
                      ...toJS(settings),
                      [option.value]: checked,
                    };
                    useAppStore.setSetting(newSetting);

                    // set color week
                    if (checked && option.value === 'colorWeek') {
                      document.body.style.filter = 'invert(80%)';
                    }
                    if (!checked && option.value === 'colorWeek') {
                      document.body.style.filter = 'none';
                    }
                  }}
                />
              )}
              {type === 'number' && (
                <InputNumber
                  style={{ width: 80 }}
                  size="small"
                  value={toJS(settings).menuWidth}
                  onChange={(value) => {
                    const newSetting = {
                      ...toJS(settings),
                      [option.value]: value,
                    };
                    useAppStore.setSetting(newSetting);
                  }}
                />
              )}
            </div>
          );
        })}
      {children}
      <Divider />
    </div>
  );
};

export default observer(Block);
