import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardOfertas from '../produtos/Ofertas';
import CardOfertas2 from '../produtos/CardPlaceHolder';
import { Container } from '../styles/Containers';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Destaques" {...a11yProps(0)} />
        <Tab label="Recentes" {...a11yProps(1)} />
        <Tab label="Menor preço" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0} style={{display: 'flex'}}>
        <Container>
            <CardOfertas/>
            <CardOfertas2/>
        </Container>          
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardOfertas/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>
            <CardOfertas/>
            <CardOfertas2/>
        </Container>   
      </TabPanel>
    </Box>
  );
}
