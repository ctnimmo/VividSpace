// FILEPATH: src/pages/page-home.tsx

import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import color from '@material-ui/core/colors/amber';

const styles = theme => ({});
    
export interface HomePageProp {
    classes: any;
}

const HomePage = (p: HomePageProp) => {
    return (
        <div>
            <Paper style={{ marginBottom: "20px", backgroundColor:"black" }}>
                <img src="./Landing.png"/>
            </Paper>
        </div>
    );
};

export default withStyles(styles)(observer(HomePage));
