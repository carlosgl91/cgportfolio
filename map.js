// Archivo: map.js

// Lista de proyectos con país, nombre, tipo y enlace (más una coordenada de ejemplo para cada uno)
const projects = [
  { country_code: 'BRA', 
     project_name: 'ENVIRA',
     project_type: 'Carbon project - REDD', 
     country_name: 'Brazil',
     institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist', 
     Link: 'https://registry.verra.org/app/projectDetail/VCS/1382',
     coords: [-7.25, -70.0] },
  { country_code: 'BRA',
    project_name: 'Reflorestamiento de Impacto no Brasil',
    project_type: 'Carbon project - ARR',
     country_name: 'Brazil',
     institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/4430',
    coords: [-10.0, -52.0] },
  { country_code: 'CMR',
    project_name: 'Greenzone Reforestation Project',
    project_type: 'Carbon project - ARR',
    country_name: 'Cameroon',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist', 
    Link: 'https://registry.verra.org/app/projectDetail/VCS/4176', 
    coords: [5.0, 12.0] },
  { country_code: 'CMR',
    project_name: 'Agroforestry Project of Cameroon',
    project_type: 'Carbon project - ARR',
    country_name: 'Cameroon',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/4883', 
    coords: [4.5, 11.5] },
  { country_code: 'GHA',
    project_name: 'Community Restoration of Native Ecosystems in Ghana Project',
    project_type: 'Carbon project - ARR',
    country_name: 'Ghana',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/4126', coords: [7.5, -1.0] },
  { country_code: 'IDN', 
    project_name: 'The West Sulawesi REDD+ Project',
    project_type: 'Carbon project - REDD', country_name: 'Indonesia',
    Link: 'Indonesia',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    coords: [-2.5, 119.0] },
  { country_code: 'IDN',
    project_name: 'Pesisir Biru Nusantara: An Indonesian Mangrove Restoration Project',
    project_type: 'Carbon project - ARR, RWE',
    country_name: 'Indonesia',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'Indonesia',
    coords: [-1.0, 117.0] },
  { country_code: 'KEN',
    project_name: 'Entooma Sidai: A Maasai Mara Rangeland Restoration and Conservation Project', 
    project_type: 'Carbon project - ALM',
    country_name: 'Kenya',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/4994',
    coords: [-1.4, 35.0] },
  { country_code: 'KEN',
    project_name: 'The Hongera Reforestation Project',
    project_type: 'Carbon project - ARR', 
    country_name: 'Kenya',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/3321',
    coords: [0.5, 37.0] },
  { country_code: 'NIC',
    project_name: 'The Native Ecosystem Restoration in Nicaragua Project',
    project_type: 'Carbon project - ARR',
    country_name: 'Nicaragua',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/4004',
    coords: [12.5, -85.0] },
  { country_code: 'PRY',
    project_name: 'CORAZÓN VERDE DEL CHACO PROJECT', 
    project_type: 'Carbon project - REDD',
    institution_type: 'Private',
    country_name: 'Paraguay', 
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist - Project Manager',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/2611', 
    coords: [-21.5, -60.0] },
  { country_code: 'PRY', 
    project_name: 'IMPACT REFORESTATION IN THE CHACO PROJECT', 
    project_type: 'Carbon project - ARR',
    country_name: 'Paraguay',
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist - Project Manager',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/2496', 
    coords: [-22.0, -59.5] },
  { country_code: 'UGA', 
    project_name: 'The Uganda Native Reforestation and Agroforestry Project', 
    project_type: 'Carbon project - ARR', 
    country_name: 'Uganda', 
    institution_type: 'Private',
    organization_name: 'Climate Investment Partners - CIP',
    rol:'GIS and Remote Sensing Specialist',
    Link: 'https://registry.verra.org/app/projectDetail/VCS/4882', 
    coords: [1.2, 32.3] },
  { country_code: 'PRY', 
    project_name: 'PROEZA PROJECT', 
    project_type: 'Cross-cutting (Environmental, Social, Sustainable development and gender)', 
    country_name: 'Paraguay',
    institution_type: 'UN-International Cooperation Agency',
    organization_name: 'FAO',
    rol:'GIS and Database Specialist',
    Link: 'https://proeza.vep.gov.py/', 
    coords: [-23.8,-59.6] },
  { country_code: 'PRY', 
    project_name: 'Critical Habitat Analysis and Net Biodiversity Balance Proposal', 
    project_type: 'Private - Habitat analysis', 
    country_name: 'Paraguay', 
    institution_type: 'Private - Forestry',
    organization_name: 'SilviPar S.A',
    rol:'GIS and Landscape Specialist',
    Link: 'https://www.silvipar.com/', 
    coords: [-24.5,-58] },
    { country_code: 'PRY', 
    project_name: 'Bosques para el crecimiento sostenible. United Nations Development Programme (UNDP).', 
    project_type: 'Forest and Forestry sector', 
    country_name: 'Paraguay', 
    institution_type: 'UN-International Cooperation Agency',
    organization_name: 'United Nations Development Programme (UNDP)',
    rol:'GIS and Remote sensing technician',
    Link: 'https://www.undp.org/es/paraguay/publicaciones/estrategia-nacional-de-bosques-para-el-crecimiento-sostenible-enbc', 
    coords: [-24.8, -58] },
    { country_code: 'PRY', 
    project_name: 'Project PINV15-188 Topa Dengue - CONACYT-Paraguay', 
    project_type: 'Research - Public Health', 
    country_name: 'Paraguay', 
    institution_type: 'University',
    organization_name: 'Universidad Católica de Asunción',
    rol:'Associate researcher',
    Link: 'https://datos.conacyt.gov.py/proyectos/nid/331', 
    coords: [-25.3, -57] },
    { country_code: 'PRY', 
    project_name: 'Aquatic communities associated with native forests and eucalyptus forest plantations - CONACYT-Paraguay', 
    project_type: 'Research - Public Health', 
    country_name: 'Paraguay', 
    institution_type: 'University',
    organization_name: 'Universidad Católica de Asunción',
    rol:'Associate researcher',
    Link: 'https://datos.conacyt.gov.py/proyectos/nid/331', 
    coords: [-22.0, -59.2] }
];

// Check if the map container exists before trying to initialize the map.
// This is a good practice, especially when content is loaded dynamically.
if (document.getElementById('map')) {
    // Initialize the Leaflet map.
    // 'map' is the ID of the div where the map will be displayed.
    // setView defines the initial geographical center and zoom level.
    // Using [0,0] and zoom 2 for a world view.
    const map = L.map('map').setView([0, 0], 2); 

    // Add a tile layer to the map.
    // OpenStreetMap is a common choice for a base map.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10, // Max zoom level for the tiles
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); // Add the tile layer to the map instance.

    // Iterate through the projects array to add markers to the map.
    projects.forEach(p => {
      // Check if the project has coordinates defined.
      if (p.coords && Array.isArray(p.coords) && p.coords.length === 2) {
        // Create a marker at the project's coordinates.
        const marker = L.marker(p.coords);  
        
        // Create the HTML content for the marker's popup.
        let popupContent = `<strong>${p.project_name || 'N/A'}</strong><br>`;
        if (p.country_name) popupContent += `Country: ${p.country_name}<br>`;
        if (p.project_type) popupContent += `Type: ${p.project_type}<br>`;
        if (p.organization_name) popupContent += `Organization: ${p.organization_name}<br>`;
        if (p.institution_type) popupContent += `Org. Type: ${p.institution_type}<br>`;
        if (p.rol) popupContent += `Role: ${p.rol}<br>`;
        if (p.Link && p.Link !== '#') { // Add link only if it's valid
            popupContent += `<a href="${p.Link}" target="_blank">To the project</a>`;
        } else {
            popupContent += `Link: N/A`;
        }
        
        marker.bindPopup(popupContent); // Bind the popup to the marker.
        marker.addTo(map); // Add the marker to the map.
      } else {
        console.warn('Project missing or has invalid coordinates:', p.project_name);
      }
    });

    // Marker clustering is not active as per your request.
    // If you wanted to use it, you would uncomment the L.markerClusterGroup related lines
    // and ensure leaflet.markercluster.js is loaded in index.html.
    // Example:
    // const markers = L.markerClusterGroup();
    // ... add individual markers to 'markers' ...
    // map.addLayer(markers);

} else {
    // Log an error if the map container div isn't found.
    console.error("Map container 'map' not found. Map cannot be initialized.");
}