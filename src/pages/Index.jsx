import React from "react";
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Flex, Container, Text, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaDollarSign, FaChartLine, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Heading mb={10}>Business Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <StatBox icon={FaShoppingCart} title="Total Sales" stat="1,234" helpText="Since last month" changeType="increase" changeAmount="23.36%" />

        <StatBox icon={FaDollarSign} title="Revenue" stat="$89,400" helpText="Since last month" changeType="increase" changeAmount="5.38%" />

        <StatBox icon={FaChartLine} title="Conversion Rate" stat="9.54%" helpText="Since last month" changeType="increase" changeAmount="1.10%" />

        <StatBox icon={FaUsers} title="New Customers" stat="834" helpText="Since last month" changeType="decrease" changeAmount="3.47%" />
      </SimpleGrid>
    </Container>
  );
};

const StatBox = ({ icon, title, stat, helpText, changeType, changeAmount }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200" rounded="md" bg="white">
      <Flex alignItems="center">
        <Icon as={icon} w={10} h={10} color="blue.500" mr={4} />
        <Box>
          <StatLabel fontWeight="semibold">{title}</StatLabel>
          <StatNumber fontSize="2xl">{stat}</StatNumber>
          <StatHelpText>
            <StatArrow type={changeType} />
            {changeAmount}
            <Text as="span" ml={2} color="gray.500">
              {helpText}
            </Text>
          </StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
