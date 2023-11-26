import {
  Button,
  Container,
  HStack,
  Heading,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { Layout } from '../../layout';
import { AddIcon } from '@chakra-ui/icons';
import { AddModalComponent } from './components/AddModalComponent';
import { CardComponent } from './components/CardComponent';
import { useGetInspectionData } from './hooks/useGetInspectionData';
import { CardSkeleton } from './components/CardSkeleton';
import { useEffect, useState } from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const DashboardPage = () => {
  useDocumentTitle('Car Inspection | Dashboard');

  const [isFakeLoading, setIsFakeLoading] = useState(true);

  const inspectionData = useGetInspectionData();

  // Add Fake Loading
  useEffect(() => {
    setTimeout(() => {
      setIsFakeLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      <Container as={'section'} py={'40px'} maxW={'6xl'} minH='calc(100vh - 140px)'>
        <HStack p={'md'} align={'center'} justifyContent={'space-between'} mb={'30px'}>
          <Heading size={{ base: 'md', md: 'lg' }}>
            Dashboard
            {isFakeLoading && <Spinner size={{ base: 'sm', md: 'md' }} ml='10px' color='red.500' />}
          </Heading>

          <AddModalComponent
            trigger={
              <Button
                leftIcon={<AddIcon />}
                size={{ base: 'sm', md: 'md' }}
                colorScheme='red'
                title='add new inspection'
                variant='solid'>
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
              {isFakeLoading && <CardSkeleton />}

              {!isFakeLoading &&
                inspectionData?.upcoming?.map((i: any, index: any) => (
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
              {isFakeLoading && <CardSkeleton />}

              {!isFakeLoading &&
                inspectionData.history?.map((i: any, index: any) => (
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
