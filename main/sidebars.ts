module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'MicrosimuladorMTY',
      link: {
        type: 'doc',
        id: 'microsimuladorMty/overview',
      },
      items: [
        'microsimuladorMty/entradas-salidas',
        'microsimuladorMty/modelos',
        'microsimuladorMty/pipeline',
        {
          type: 'category',
          label: 'Simulador',
          items: ['microsimuladorMty/simulador/setup'],
        },
        {
          type: 'category',
          label: 'Análisis',
          items: ['microsimuladorMty/analisis/reporte'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Crowd Counting',
      link: {
        type: 'doc',
        id: 'crowdcounting/overview',
      },
      items: [
        'crowdcounting/entradas-salidas',
        'crowdcounting/modelos',
        'crowdcounting/pipeline',
      ],
    },
  ],
};
