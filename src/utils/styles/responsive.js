const size = {
    smartphone_max_portrait: '416px',
    smartphone_min_paysage: '416px',
    smartphone_max_paysage: '870px',
    tablet_min_portrait: '416px',
    tablet_max_portrait: '770px',
    tablet_min_paysage: '870px',
    tablet_max_paysage: '1024px',
    desktop_min: '1024px',
 };
 
 const device = {
    smartphone_portrait: `screen and (orientation: portrait) and (max-width: ${size.smartphone_max_portrait})`,
    smartphone_paysage: `screen and (orientation: landscape) and (min-width: ${size.smartphone_min_paysage}) and (max-width: ${size.smartphone_max_paysage})`,
    tablet_portrait: `screen and (orientation: portrait) and (min-width: ${size.tablet_min_portrait}) and (max-width: ${size.tablet_max_portrait})`,
    tablet_paysage: `screen and (orientation: landscape) and (min-width: ${size.tablet_min_paysage}) and (max-width: ${size.tablet_max_paysage})`,
    desktop: `screen and (min-width: ${size.desktop_min})`,
 };
 
 export default device;
 