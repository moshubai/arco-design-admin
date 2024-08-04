import React, { useMemo } from 'react';
import store from '@/mobx';
import authentication, { AuthParams } from '@/utils/authentication';
import { toJS } from 'mobx';

type PermissionWrapperProps = AuthParams & {
  backup?: React.ReactNode;
};

const PermissionWrapper = (
  props: React.PropsWithChildren<PermissionWrapperProps>
) => {
  const { backup, requiredPermissions, oneOfPerm } = props;
  const { useAppStore } = store;
  const { userInfo } = useAppStore;

  const hasPermission = useMemo(() => {
    return authentication(
      { requiredPermissions, oneOfPerm },
      toJS(userInfo).permissions
    );
  }, [oneOfPerm, requiredPermissions, toJS(userInfo).permissions]);

  if (hasPermission) {
    return <>{convertReactElement(props.children)}</>;
  }
  if (backup) {
    return <>{convertReactElement(backup)}</>;
  }
  return null;
};

function convertReactElement(node: React.ReactNode): React.ReactElement {
  if (!React.isValidElement(node)) {
    return <>{node}</>;
  }
  return node;
}

export default PermissionWrapper;
