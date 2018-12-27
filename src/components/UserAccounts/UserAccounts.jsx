import * as React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import { Form } from './AccountsForm';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: '16px 0px 150px 0px'
  },

  container: {
    margin: '0 auto',
    maxWidth: 310
  },

  subTitle: {
    marginBottom: 40,
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  }
});

class UserAccounts extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.subTitle} variant="subtitle1" gutterBottom>
            3. Отметьте социальные сети.
          </Typography>
          <Form />
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(UserAccounts);
