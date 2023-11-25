import { Button, Container, HStack, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import { Layout } from '../../layout';
import { AddIcon } from '@chakra-ui/icons';
import { AddModalComponent } from './components/AddModalComponent';
import { CardComponent } from './components/CardComponent';
import { useGetInspectionData } from './hooks/useGetInspectionData';

const DashboardPage = () => {
  const inspectionData = useGetInspectionData();

  return (
    <Layout>
      <Container textAlign={'center'} as={'section'} p={'30px'} maxW={'6xl'} minH={'calc(100vh - 140px)'}>
        <HStack p={'md'} align={'center'} justifyContent={'space-between'} mb={'30px'}>
          <Heading size={'lg'}>Dashboard</Heading>

          <AddModalComponent
            trigger={
              <Button leftIcon={<AddIcon />} colorScheme='red' title='add new inspection' variant='solid'>
                New inspection
              </Button>
            }
          />
        </HStack>

        <Tabs colorScheme='red' variant='enclosed'>
          <TabList>
            <Tab>Upcoming</Tab>
            <Tab>History</Tab>
          </TabList>

          <TabPanels>
            <TabPanel as={VStack} spacing={'15px'} align={'stretch'}>
              {inspectionData.upcoming?.map((i: any, index: any) => (
                <CardComponent
                  key={index}
                  image={i.image}
                  date={i.date}
                  make={i.make}
                  model={i.model}
                  plate={i.numberPlate}
                  color={i.color}
                  vinNumber={i.vinNumber}
                  year={i.year}
                />
              ))}
            </TabPanel>

            <TabPanel as={VStack} spacing={'15px'} align={'stretch'}>
              {inspectionData.history?.map((i: any, index: any) => (
                <CardComponent
                  key={index}
                  image={i.image}
                  date={i.date}
                  make={i.make}
                  model={i.model}
                  plate={i.numberPlate}
                  color={i.color}
                  vinNumber={i.vinNumber}
                  year={i.year}
                  status={i.status}
                />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
