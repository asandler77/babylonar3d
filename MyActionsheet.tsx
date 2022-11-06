import React, {ReactElement, ReactNode} from 'react';
import ActionSheet, {ActionSheetProps} from 'react-native-actions-sheet';

interface AttActionSheetProps extends ActionSheetProps {
  children: ReactNode;
}

export const MyActionSheet = (props: AttActionSheetProps): ReactElement => {
  return (
    <ActionSheet id="attActionSheet" {...props}>
      {props.children}
    </ActionSheet>
  );
};
