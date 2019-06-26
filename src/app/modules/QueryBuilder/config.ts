const QueryBuilderConfig = {
  moduleName: 'Query Builder',
  moduleInfo:
    'This tool allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format. You create queries based on finding the organisations, and then be configured filter the published data down to what you need and elements you want to include in your export. You find an example data table snippet of your query and your download link  in the bottom section.',
  fragments: [
    {
      title: 'Who',
      info:
        'First you need to find the organisation or organisations you want data about. Depending if you want one specific organsation or a wieder net. You can use the filters to narrow the data you want.'
    },
    {
      title: 'Filters',
      info:
        'First select the organsation to only show applicable filters for thats organisations published data unless you want data from all IATI organisations. You don’t need to use all filters only the onces needed to get the data you want.'
    },
    {
      title: 'Output format',
      info:
        'You can use default, but these options allow you to configure the way in which your data is disaggregated.'
    }
  ]
};

export default QueryBuilderConfig;
