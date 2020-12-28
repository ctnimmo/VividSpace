// FILEPATH: src/components/profile-button.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const styles = theme => ({});

interface ProfileButtonProps {
    classes: any;
    username: string;
    navigateToProfile: () => void;
}

const ProfileButton = (p: ProfileButtonProps) => {
    return (
        <Button color="inherit" onClick={p.navigateToProfile}>
            <AccountCircleIcon style={{ marginRight: "10px" }} />
            {p.username}
        </Button>
    );
}

export default withStyles(styles)(observer(ProfileButton));