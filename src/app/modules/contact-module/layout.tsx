import React from 'react';
import { Box, Container } from '@material-ui/core';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';
import { PageContainer } from 'app/modules/common/PageContainer';

export const ContactLayout = () => {
  return (
    <PageContainer footer>
      <ModuleHeader
        title="Get in touch!"
        description="Contact our team to learn more about the potential of IATI Datastore for your organisation"
      />
      <Box width="100%" height="40px" />
      <Container maxWidth="lg">
        <div id="hubspotSubscribeForm" />
      </Container>

      <Box height="300px" />
    </PageContainer>
  );
};
