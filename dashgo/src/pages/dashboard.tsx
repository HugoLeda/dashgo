import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic"
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false,      
    },
    zoom: {
      enable: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enable: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-03-14T00:00:00.000Z',
      '2022-03-15T00:00:00.000Z',
      '2022-03-16T00:00:00.000Z',
      '2022-03-17T00:00:00.000Z',
      '2022-03-18T00:00:00.000Z',
      '2022-03-19T00:00:00.000Z',
      '2022-03-20T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
  
}

const series = [
  {
    name: 'seires1',
    data: [31, 120, 10, 52, 26, 52, 104]
  }
]

export default function Dashboard() {

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex 
        w="100%"
        my="6"
        maxWidth={1480}
        marginX="auto"
        px="6"
      >
        <Sidebar/>

        <SimpleGrid 
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius="8"
          >       
            <Text fontSize="lg" mb="4">
              Inscritos da semana
              <Chart options={options} series={series} type="area" height={160}/>
            </Text>
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius="8"
          >       
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
              <Chart options={options} series={series} type="area" height={160}/>
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}