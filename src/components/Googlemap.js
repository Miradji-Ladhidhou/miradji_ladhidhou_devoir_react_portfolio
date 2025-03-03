import React from 'react';

const Map = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', width: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44518.150578942004!2d4.771466063376932!3d45.78352590364499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb155df1bc7f%3A0x1c08ab2e41e47c90!2s69009%20Lyon!5e0!3m2!1sfr!2sfr!4v1740972289404!5m2!1sfr!2sfr"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map of Lyon"
      ></iframe>
    </div>
  );
};

export default Map;
