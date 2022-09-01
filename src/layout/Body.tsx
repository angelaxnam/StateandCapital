import React, {useEffect} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet} from 'react-router-dom';
import { Container } from 'reactstrap';


const queryClient = new QueryClient()

function Body() {
  return (
    <QueryClientProvider client={queryClient}>
       <Container>
        <Outlet/>
      </Container>
    </QueryClientProvider>
  );
}
export default Body;