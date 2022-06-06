import React, { useEffect, useMemo } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TabsOwnProps } from './types'

const TabsView: React.FC<TabsOwnProps> = ({ tabs }) => {
    const [value, setValue] = React.useState<string>('');

    useEffect(() => {
      if (tabs && tabs.length !== 0) setValue(tabs[0].title)
    }, [tabs])

    const renderedTabs = useMemo(() => {
      if (!tabs || tabs.length === 0) return null
      return tabs.map((tab) => (
        <Tab label={tab.title} value={tab.title}/>
      ))
    }, [tabs])

    const renderedContent = useMemo(() => {
      if (!tabs || tabs.length === 0) return null
      return tabs.map((tab) => (
        <TabPanel value={tab.title}>{tab.content}</TabPanel>
      ))
    }, [tabs])
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Patterns">
              {renderedTabs}
            </TabList>
          </Box>
          {renderedContent}
        </TabContext>
      </Box>
    );
  }

  export { TabsView }