// FILEPATH: src/components/notifications-button.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

const styles = theme => ({});

interface NotificationsButtonProps {
    classes: any;
    notificationCount: number;
    navigateToNotifications: () => void;
}

const NotificationsButton = (p: NotificationsButtonProps) => {

    let icon = <NotificationsIcon />

    if (p.notificationCount > 0) {
        icon = <Badge badgeContent={p.notificationCount} color={"secondary"}>
            <NotificationsIcon />
        </Badge>
    }

    return <IconButton color="inherit" onClick={p.navigateToNotifications}>
        {icon}
    </IconButton>
}

export default withStyles(styles)(observer(NotificationsButton));